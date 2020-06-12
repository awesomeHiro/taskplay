<template>
  <div>
    <div v-for="section in getSectionsFromTasks(tasks)" :key="section.id">
      <SectionsTitle :section="section" />
      <v-list-item-group v-model="selected" active-class="blue--text">
        <draggable handle=".handle">
          <v-list-group
            v-for="task in filterTasksBySection(section)"
            :key="task.id"
            class="pl-0 pr-0"
            flat
            active-class="pink--text"
          >
            <template v-slot:activator>
              aaaaaaaaaaaa
            </template>
            aaaaaaaaaaaaaaaa
          </v-list-group>
        </draggable>
      </v-list-item-group>
    </div>
    <v-list-item />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import SectionsTitle from '~/components/SectionsTitle.vue'

export default {
  components: {
    draggable,
    SectionsTitle,
  },
  props: {
    executable: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],

      selectedInputElm: {},
      temp_estimate: '0',
      selected: [],
      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
      selectedSectionId: this.$store.getters['meta/selectedSectionId'],
    }
  },
  methods: {
    selectText(event) {
      if (this.selectedInputElm === event.target) {
        event.target.select()
      }
      this.selectedInputElm = event.target
    },
    filterTasksBySection(section) {
      return this.tasks.filter(task => task.sectionId === section.id)
    },
    getSectionsFromTasks(tasks) {
      const sections = tasks.map(task =>
        this.$store.getters['sections/byId'](task.sectionId),
      )
      return [...new Set(sections)]
    },
  },
}
</script>
<style>
.v-list-item__icon {
  min-width: 0px !important;
}

.v-text-field__slot input {
  font-size: 12px;
  padding: 0px;
  text-align: center;
}
.v-input__slot input {
  min-height: 25px;
  padding: 0px;
}
.v-input__control div {
  min-height: 25px !important;
  padding: 0px !important;
  margin: 0px !important;
}
.v-input__slot:before {
  border-color: #444444 !important;
  width: 50% !important;
  transform: translateX(50%);
}
input {
  padding: 0px !important;
  text-align: center !important;
}
.v-input {
  font-size: 10px;
}
.v-input__append-inner {
  display: none !important;
}
.v-text-field__details {
  display: none !important;
}
</style>
