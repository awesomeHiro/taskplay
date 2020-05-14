<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <div v-for="s in sections" :key="s.id">
        <v-row align="center" justify="center" class="caption" no-gutters>
          <v-col><v-divider clsss="ma-2"/></v-col>
          <v-col cols="auto">
            <div class="body-1">{{ s.name }} {{ s.start }} - {{ s.desc }}</div>
          </v-col>
          <v-col><v-divider clsss="ma-2"/></v-col>
        </v-row>
        <v-list-item
          v-for="(t, ti) in getTasksBySectionId(s.id)"
          :key="t.id"
          class="pl-0 pr-0"
        >
          <v-col cols="1" class="pa-0 ma-0">
            <div class="drag-bar pa-0 ma-0">
              <v-icon color="barely">
                drag_handle
              </v-icon>
            </div>
          </v-col>
          <v-col cols="1" class="pa-0 ma-0">
            <div class="drag-bar pa-0 ma-0 subtle--text">
              <span>
                {{ getSectionById(t.sectionId).name }}
              </span>
            </div>
          </v-col>
          <v-col cols="7" class="text-left pa-0">
            <v-list-item-content class="pa-0">
              <v-list-item-title
                class="subtitle-2 subtle--text"
                v-text="t.repeat ? t.name + ' ↺' : t.name"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="barely--text"
                v-text="$store.getters['projects/byId'](t.projectId).name"
              ></v-list-item-subtitle>
              <v-list-item-subtitle
                class="barely--text"
                v-text="t.sortToken.slice(0, 3)"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
          <v-col cols="1" class="pa-0 ma-0">
            <div class="barely--text">
              {{ t.estimate }}
            </div>
            <div v-if="t.result" class="subtle--text">
              {{ t.result }}
            </div>
          </v-col>
          <v-col cols="1" class="pa-0 ma-0">
            <!-- eslint-disable-next-line prettier/prettier -->
                <div  v-if="t.result" :class="0 >= t.result - t.estimate  ? 'success--text' : 'error--text'">
              <!-- eslint-disable-next-line prettier/prettier -->
                  {{
                0 >= t.result - t.estimate
                  ? t.result - t.estimate
                  : '+' + (t.result - t.estimate)
              }}
            </div>
          </v-col>
          <v-col cols="1" class="ma-0 pa-0">
            <div v-if="!ti" class="subtle--text">
              {{ t.start }}
            </div>
            <div v-if="t.end" class="subtle--text">
              {{ t.end }}
            </div>
            <div v-if="!t.end" class="barely--text">
              {{ t.estFinishAt }}
            </div>
          </v-col>
        </v-list-item>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="10">
            <Summary
              v-if="getTasksBySectionId(s.id).length > 0"
              :tasks="getTasksBySectionId(s.id)"
            />
          </v-col>
          <v-col cols="2">
            <add-button
              :section="s"
              :sectioned="true"
              :update-calc="updateCalc"
              :get-tasks-by-section-id="getTasksBySectionId"
            />
          </v-col>
        </v-row>
      </div>
    </v-list-item-group>
  </v-list>
</template>
<script>
import Summary from '~/components/Summary.vue'
import AddButton from '~/components/AddButton.vue'
import { getSectionById } from '~/plugins/getSectionById'

export default {
  components: {
    Summary,
    AddButton,
  },
  data() {
    return {
      selected: [2],
      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
      tasks: this.$store.getters['tasks/sorted'],
    }
  },
  computed: {
    recentDone() {
      if (this.tasks.length === 0) return 0
      return [...this.tasks]
        .filter(x => x.end)
        .sort((a, b) => a.end - b.end)
        .pop()
    },
  },
  created() {
    this.updateCalc()
  },
  methods: {
    updateCalc() {
      this.updateEstFinishAt()
    },
    updateEstFinishAt() {
      let totalEst = 0
      this.tasks.forEach(x => {
        if (!x.end) {
          totalEst += parseInt(x.estimate)
          this.$store.commit('tasks/setEstFinishAt', {
            task: x,
            estFinishAt: min2string(string2min(this.recentDone.end) + totalEst),
          })
        }
      })
    },
    getProjectById(id) {
      return this.projects.find(x => x.id === id) || { name: '' }
    },
    getSectionById(id) {
      return getSectionById(id)
    },
    getTasksBySectionId(sectionId) {
      return this.tasks.filter(x => x.sectionId === sectionId)
    },
  },
}
const pad = n => n.toString().padStart(2, 0)
const min2string = min => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`
const string2min = str =>
  parseInt(str.split(':')[0]) * 60 + parseInt(str.split(':')[1])
</script>
