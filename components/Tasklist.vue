<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <div v-for="section in listSections" :key="section">
        <div class="text-center">
          {{ section }}
        </div>
        <div v-for="t in getTasksBySection(section)" :key="t.id">
          <v-list-item>
            <template>
              <v-col cols="1">
                <div class="drag-bar">
                  <v-icon>
                    drag_handle
                  </v-icon>
                </div>
              </v-col>
              <v-col cols="6" class="text-left">
                <v-list-item-content>
                  <v-list-item-title
                    class="subtitle-2"
                    v-text="t.repeat ? '↺ ' + t.name : t.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="t.project"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-divider vertical> </v-divider>
              <v-col cols="2">
                <div>
                  {{ t.estimate + ' min' }}
                </div>
                <div v-if="t.result">
                  {{ t.result + ' min' }}
                </div>
              </v-col>
              <v-col cols="1" class="text-right">
                <!-- eslint-disable-next-line prettier/prettier -->
                    <div :class="0 >= t.result - t.estimate  ? 'success--text' : 'error--text'">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  {{
                    0 >= t.result - t.estimate
                      ? t.result - t.estimate
                      : '+' + (t.result - t.estimate)
                  }}
                </div>
              </v-col>
              <v-col cols="2">
                <div>{{ t.start }}</div>
                <div>{{ t.end }}</div>
              </v-col>
            </template>
          </v-list-item>
        </div>
        <time-summary></time-summary>
        <v-divider></v-divider>
      </div>
    </v-list-item-group>
  </v-list>
</template>
<script>
import TimeSummary from '~/components/TimeSummary.vue'

export default {
  components: {
    TimeSummary
  },
  data() {
    return {
      selected: [2],
      tasks: this.$store.state.tasks.list
    }
  },
  computed: {
    listSections() {
      return this.tasks
        .reduce((total, task) => [...total, task.section], [])
        .filter((x, i, a) => a.indexOf(x) === i)
        .sort()
    }
  },
  methods: {
    getTasksBySection(section) {
      return this.tasks.filter((task) => task.section === section)
    }
  }
}
</script>
