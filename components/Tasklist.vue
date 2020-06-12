<template>
  <div>
    <v-list two-line dense class="caption" :flat="!executable">
      <div v-for="section in getSectionsFromTasks(tasks)" :key="section.id">
        <SectionsTitle :section="section" />

        <v-list-item-group v-model="selected" active-class="blue--text">
          <draggable handle=".handle">
            <v-list-item
              v-for="task in filterTasksBySection(section)"
              :key="task.id"
              v-model="selected"
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
              <v-col cols="1" class="pa-0">
                <div class="pa-0 ma-0kk subtle--text">
                  <v-select
                    :items="sections"
                    item-text="name"
                    item-value="id"
                    :placeholder="
                      $store.getters['sections/byId'](task.sectionId).name
                    "
                    dense
                  ></v-select>
                </div>
              </v-col>
              <v-col cols="6" class="text-left pa-0">
                <v-list-item-content class="pa-0">
                  <v-row align="center" no-gutters>
                    <v-col>
                      <v-text-field
                        :value="task.name"
                        hide-details
                        dense
                        class="pa-0 ma-0"
                        @click.native="selectText($event)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-select
                        :items="projects"
                        item-text="name"
                        item-value="id"
                        :placeholder="
                          $store.getters['projects/byId'](task.projectId).name
                        "
                        dense
                      ></v-select>
                    </v-col>

                    <v-col cols="auto">
                      <span v-if="task.repeat">↺</span>
                    </v-col>
                  </v-row>
                  <v-row align="center" no-gutters> </v-row>
                </v-list-item-content>
              </v-col>
              <v-col cols="2" class="ma-0 pa-0">
                <div class="subtle--text">
                  <v-text-field
                    :value="task.start"
                    hide-details
                    placeholder="0"
                    dense
                    class="pa-0 ma-0"
                    type="tel"
                    @click.native="selectText($event)"
                  />
                </div>
                <div class="subtle--text">
                  <v-text-field
                    :value="task.end"
                    placeholder="0"
                    hide-details
                    dense
                    class="pa-0 ma-0"
                    type="tel"
                    @click.native="selectText($event)"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="1" class="pa-0 ma-0">
                <div v-if="task.start" class="barely--text">
                  {{ task.estimate }}
                </div>
                <div v-else class="barely--text">
                  <v-text-field
                    :value="task.estimate"
                    hide-details
                    dense
                    class="pa-0 ma-0"
                    type="tel"
                    @click.native="selectText($event)"
                  ></v-text-field>
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
      selectedInputElm: {},
      temp_estimate: '0',
      selected: [0],
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
