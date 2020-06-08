<template>
  <div>
    <v-list two-line dense class="caption" :flat="!executable">
      <div v-for="section in getSectionsFromTasks(tasks)" :key="section.id">
        <v-list-item-group v-model="selected" active-class="blue--text">
          <SectionsTitle :section="section" />
          <draggable handle=".handle">
            <v-list-item
              v-for="(task, tIndex) in filterTasksBySection(section)"
              :key="task.id"
              v-model="selected"
              :disabled="Boolean(task.sectionId !== selectedSectionId)"
              class="pl-0 pr-0"
              flat
              active-class="pink--text"
            >
              <v-col cols="1" class="handle px-0 mx-0">
                <div>
                  <v-icon color="barely">
                    drag_handle
                  </v-icon>
                </div>
              </v-col>
              <v-col cols="1" class="pa-0 ma-0">
                <div class="pa-0 ma-0 subtle--text">
                  <span>
                    {{ $store.getters['sections/byId'](task.sectionId).name }}
                  </span>
                </div>
              </v-col>
              <v-col cols="7" class="text-left pa-0">
                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="subtitle-2 subtle--text"
                    v-text="task.repeat ? task.name + ' ↺' : task.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    class="barely--text"
                    v-text="
                      $store.getters['projects/byId'](task.projectId).name
                    "
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="barely--text"
                    v-text="task.sortToken.slice(0, 3)"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col cols="1" class="pa-0 ma-0">
                <div class="barely--text">
                  {{ task.estimate }}
                </div>
                <div v-if="task.result" class="subtle--text">
                  {{ task.result }}
                </div>
              </v-col>
              <v-col cols="1" class="pa-0 ma-0">
                <!-- eslint-disable-next-line prettier/prettier -->
                <div  v-if="task.result" :class="0 >= task.result - task.estimate  ? 'success--text' : 'error--text'">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  {{
                    0 >= task.result - task.estimate
                      ? task.result - task.estimate
                      : '+' + (task.result - task.estimate)
                  }}
                </div>
              </v-col>
              <v-col cols="1" class="ma-0 pa-0">
                <div v-if="!tIndex" class="subtle--text">
                  {{ task.start }}
                </div>
                <div v-if="task.end" class="subtle--text">
                  {{ task.end }}
                </div>
                <div v-if="!task.end" class="barely--text">
                  {{ task.estFinishAt }}
                </div>
              </v-col>
            </v-list-item>
          </draggable>
        </v-list-item-group>
      </div>
      <v-list-item />
    </v-list>
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
      selected: [0],
      sections: this.$store.state.sections.sections,
      selectedSectionId: this.$store.getters['meta/selectedSectionId'],
    }
  },
  methods: {
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
