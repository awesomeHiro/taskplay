<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <div v-for="s in sections" :key="s.id">
        <v-row align="center" justify="center" class="caption" no-gutters>
          <v-col><v-divider clsss="ma-2"/></v-col>
          <v-col cols="auto">
            <div class="subtle--text">
              {{ s.name }} {{ s.start }} - {{ s.desc }}
            </div>
          </v-col>
          <v-col><v-divider clsss="ma-2"/></v-col>
        </v-row>
        <time-summary
          v-if="getTasksBySectionId(s.id).length > 0"
          :tasks="getTasksBySectionId(s.id)"
        />
        <v-list-item
          v-for="(t, ti) in getTasksBySectionId(s.id)"
          :key="t.id"
          class="pl-0 pr-0"
        >
          <v-col cols="1" class="pa-0 ma-0">
            <div class="drag-bar pa-0 ma-0" @click="alert('drag')">
              <v-icon color="barely">
                drag_handle
              </v-icon>
            </div>
          </v-col>
          <v-col cols="1" class="pa-0 ma-0">
            <div class="drag-bar pa-0 ma-0 subtle--text">
              <span>
                {{ t.section }}
              </span>
            </div>
          </v-col>
          <v-col cols="7" class="text-left pa-0">
            <v-list-item-content class="pa-0">
              <v-list-item-title
                class="subtitle-2"
                v-text="t.repeat ? t.name + ' ↺' : t.name"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="barely--text"
                v-text="getProjectById(t.projectId).name"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-col>
          <v-col cols="1" class="pa-0 ma-0">
            <div class="barely--text">
              {{ t.estimate }}
            </div>
            <div v-if="t.result">
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
            <div v-if="!ti">
              {{ t.start }}
            </div>
            <div v-if="t.end">
              {{ t.end }}
            </div>
            <div v-if="!t.end" class="barely--text">
              {{ totalEstToFinish[tasks.findIndex(x => x === t)] }}
            </div>
          </v-col>
        </v-list-item>
        <v-row align="center" justify="center" no-gutters>
          <add-button :section="s" :sectioned="true" />
        </v-row>
      </div>
    </v-list-item-group>
  </v-list>
</template>
<script>
import TimeSummary from '~/components/TimeSummary.vue'
import AddButton from '~/components/AddButton2.vue'

export default {
  components: {
    TimeSummary,
    AddButton,
  },
  data() {
    return {
      selected: [2],
      tasks: this.$store.state.tasks.today,
      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
      leftEsts: [],
    }
  },
  computed: {
    totalEstToFinish() {
      const totalEsts = []
      let totalEst = 0
      let lastDone = 0
      this.tasks.forEach((x, i) => {
        if (x.end) {
          totalEsts.push(0)
          lastDone = i
        } else {
          totalEst += parseInt(x.estimate)
          totalEsts.push(
            min2string(string2min(this.tasks[lastDone].end) + totalEst),
          )
        }
      })
      return totalEsts
    },
  },
  methods: {
    getProjectById(id) {
      return this.projects.find(x => x.id === id) || { name: '' }
    },

    getSecionById(id) {
      return this.sections.find(x => x.id === id) || { name: '' }
    },
    alert(s) {
      alert(s)
    },
    sortTasks() {
      this.tasks.sort((a, b) => (a.section >= b.section ? 1 : -1))
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
