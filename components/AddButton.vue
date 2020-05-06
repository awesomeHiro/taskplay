<template>
  <div>
    <v-bottom-sheet v-model="sheet" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="pink" fab fixed bottom right v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-divider></v-divider>

        <v-list-item class="pa2">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="auto" class=" text-center">
              <v-text-field
                ref="taskname"
                v-model="taskname"
                autofocus
                hide-details
                solo
                flat
                dense
                placeholder="What's next?"
                :rules="nameRules"
                @keydown.enter="addTask()"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center">
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
                    @click="$refs.taskname.focus()"
                  >
                    {{ p.name }}
                  </v-chip>
                </div>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="sectionSelect"
                active-class="primary white--text"
                class="text-center"
                column
              >
                <v-chip
                  v-for="s in sections"
                  :key="s.id"
                  small
                  class="pa-2"
                  @click="$refs.taskname.focus()"
                >
                  {{ s.name }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item class="pa2">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="2" class="pa-0 ma-0 text-center">
              <span :class="estimate > 0 ? 'success--text' : 'error--text'">
                {{ estimate }}
              </span>
            </v-col>
            <v-col class="pa-0 ma-0 text-center">
              <span v-for="t in addTimes" :key="t">
                <v-btn x-small @click="addtime(parseInt(t))">
                  {{ t }}
                </v-btn>
              </span>
              <v-btn x-small class="mx-1 " @click="cleartime()">
                X
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
import { genSortToken } from '~/plugins/genSortToken'
export default {
  data() {
    return {
      taskname: '',
      nameRules: [value => !!value],
      sheet: true,
      sections: this.$store.state.sections.sections,
      sectionSelect: 0,
      projects: this.$store.state.projects.projects,
      projectSelect: 0,
      estimate: 0,
      addTimes: ['-3', '-1', '+1', '+2', '+5', '+10', '+100'],
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
    },
    addtime(amount) {
      this.estimate += amount
      if (this.estimate > 999) this.estimate = 999
      this.$refs.taskname.focus()
    },
    cleartime() {
      this.estimate = 0
      this.$refs.taskname.focus()
    },
  },
}
</script>
