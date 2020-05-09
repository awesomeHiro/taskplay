<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <v-list-item v-for="(t, i) in tasks" :key="t.id" class="pl-0 pr-0">
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
              v-text="t.project"
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
          <div v-if="!i">
            {{ t.start }}
          </div>
          <div v-if="t.result">
            {{ t.end }}
          </div>
          <div v-if="i && !t.result" class="barely--text">
            {{ totalEstToFinish[i] }}
          </div>
        </v-col>
      </v-list-item>
    </v-list-item-group>
    <v-list-item> </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      selected: [2],
      tasks: this.$store.state.tasks.today,
      sections: this.$store.state.sections.sections,
      leftEsts: [],
    }
  },
  computed: {
    totalEstToFinish() {
      const totalEsts = []
      let totalEst = 0
      let lastDone = 0
      this.tasks.forEach((x, i) => {
        if (x.result) {
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
    alert(s) {
      alert(s)
    },
    sortTasks() {
      this.tasks.sort((a, b) => (a.section >= b.section ? 1 : -1))
    },
    getTasksBySection(section) {
      return this.tasks.filter(task => task.section === section)
    },
  },
}
const pad = n => n.toString().padStart(2, 0)
const min2string = min => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`
const string2min = str =>
  parseInt(str.split(':')[0]) * 60 + parseInt(str.split(':')[1])
</script>
