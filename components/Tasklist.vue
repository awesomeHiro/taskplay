<template>
  <div>
    <div
      v-for="section in getSectionsFromTasks(tasks)"
      :key="section.id"
      class="pa-0"
    >
      <SectionsTitle :section="section" />
      <draggable handle=".handle">
        <v-list-group
          v-for="task in filterTasksBySection(section)"
          :key="task.id"
          class="pa-0"
        >
          <template v-slot:activator>
            <v-col cols="1" class="handle pa-0" @click.stop>
              <div>
                <v-icon color="barely">
                  drag_handle
                </v-icon>
              </div>
            </v-col>

            <v-col class="text-left pa-0" @click.stop>
              <v-list-item-content class="pa-0">
                <v-row align="center" no-gutters>
                  <v-col>
                    <v-text-field
                      :value="task.name"
                      hide-details
                      dense
                      class="pa-0 ma-0"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="auto">
                    <span v-if="task.repeat">↺</span>
                  </v-col>
                </v-row>
                <v-row align="center" no-gutters> </v-row>
              </v-list-item-content>
            </v-col>
            <v-col cols="3" class="ma-0 pa-0">
              <v-row align="center" no-gutters>
                <v-col class="ma-0 pa-0" @click.stop>
                  <div class="subtle--text">
                    <v-text-field
                      :value="task.start"
                      hide-details
                      placeholder="0"
                      dense
                      class="pa-0 ma-0"
                      type="tel"
                    />
                  </div>
                </v-col>
                <v-col class="ma-0 pa-0" @click.stop>
                  <div class="subtle--text">
                    <v-text-field
                      :value="task.end"
                      placeholder="0"
                      hide-details
                      dense
                      class="pa-0 ma-0"
                      type="tel"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="1" class="pa-0 ma-0" @click.stop>
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
                ></v-text-field>
              </div>
              <div v-if="task.result" class="subtle--text">
                {{ task.result }}
              </div>
            </v-col>
            <v-col cols="1" class="pa-0 ma-0" @click.stop>
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
          </template>
          <v-list-item>
            <v-col cols="1" class="pa-0" @click.stop>
              <div class="pa-0 ma-0kk subtle--text">
                <v-select
                  :items="sections"
                  :placeholder="
                    $store.getters['sections/byId'](task.sectionId).name
                  "
                  item-text="name"
                  item-value="id"
                  dense
                ></v-select>
              </div>
            </v-col>
            <v-col cols="4">
              <v-select
                :items="projects"
                item-value="id"
                :placeholder="
                  $store.getters['projects/byId'](task.projectId).name
                "
                item-text="name"
                dense
              ></v-select>
            </v-col>
          </v-list-item>
        </v-list-group>
      </draggable>
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
      selectedInputElm: {},
      temp_estimate: '0',

      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
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
<style>
.v-text-field__slot input {
  font-size: 12px !important;
  padding: 0px !important;
  text-align: center !important;
}
.v-input__slot input {
  font-size: 12px !important;
  min-height: 25px !important;
  padding: 0px !important;
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
.v-select__selection--comma {
  font-size: 12px !important;
  transform: translateX(-50%) !important;
}
input {
  padding: 0px !important;
  text-align: center !important;
}

.v-select__selection--comma {
  color: #888888 !important;
  transform: translateX(0%) !important;
}

.v-select__selection .v-input {
  font-size: 10px !important;
}
.v-input__append-inner {
  display: none !important;
}
.v-text-field__details {
  display: none !important;
}
.v-list-item__icon {
  min-width: 0px !important;
}
/* .v-list-item {
  min-height: 36px !important;
} */
</style>
