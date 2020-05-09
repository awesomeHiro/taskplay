<template>
  <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
    <v-row align="center" justify="center" no-gutters>
      <v-col class=" text-center">
        <v-text-field
          ref="taskname"
          v-model="taskname"
          hide-details
          filled
          solo
          dense
          type="text"
          maxlength="40"
          placeholder="New Task!"
          :rules="nameRules"
          @focus="focused('taskname')"
          @keydown.enter="$refs.estimate.focus()"
        ></v-text-field>
      </v-col>
      <v-col v-if="showProjects" cols="2" class=" text-center">
        <v-text-field
          ref="estimate"
          v-model="estimate"
          hide-details
          solo
          dense
          filled
          type="tel"
          maxlength="3"
          placeholder="time"
          :rules="timeRules"
          @focus="focused('estimate')"
          @keydown.enter="addTask()"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row
      v-if="showProjects"
      class="pa-0 ma-0"
      align="center"
      justify="center"
    >
      <v-col cols="auto" class="pa-0 ma-0 text-center">
        <v-chip-group
          v-model="projectSelect"
          active-class="primary white--text"
          column
        >
          <div class="text-center">
            <v-chip
              v-for="p in projects"
              :key="p.id"
              small
              class="pa-2"
              @click="focusPrevInput()"
            >
              {{ p.name }}
            </v-chip>
          </div>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { genSortToken } from '~/plugins/genSortToken'
export default {
  props: {
    section: {
      type: Object,
      default: () => {},
    },
    sectioned: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showProjects: false,
      taskname: '',
      focusedRef: 'taskname',
      nameRules: [value => !!value],
      sheet: false,
      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
      projectSelect: 0,
      estimate: '',
      timeRules: [value => value > 0 && value < 999],
    }
  },
  computed: {
    time() {
      return this.raughTime + this.inputTime
    },
    currentSection() {
      const date = new Date()
      return this.sections
        .filter(x => x.start < date.getHours() + ':' + date.getMinutes())
        .pop()
    },
  },
  created() {
    this.sectionSelect = this.sections.findIndex(x => x === this.currentSection)
  },
  methods: {
    focused(ref) {
      this.focusedRef = ref
      this.showProjects = true
    },
    focusPrevInput() {
      if (this.focusedRef === 'estimate') {
        this.$refs.estimate.focus()
      } else {
        this.$refs.taskname.focus()
      }
    },
    addTask() {
      const payload = {
        sortToken: genSortToken(),
        estimate: this.estimate,
        project: this.projects[this.projectSelect].id,
        name: this.taskname,
        section: this.sections[this.sectionSelect].id,
      }
      this.$store.dispatch('tasks/add', payload)
      this.sheet = false
      this.showProjects = false
      this.taskname = ''
      this.estimate = ''
    },
  },
}
</script>
