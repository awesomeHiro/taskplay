<template>
  <v-list two-line>
    <v-list-item-group v-model="selected" active-class="green--text">
      <template v-for="section in listSections">
        <template v-for="(t, index) in getTasksBySection(section)">
          <v-list-item :key="t.text + index">
            <template>
              <v-col cols="auto">
                <div class="drag-bar">
                  <v-icon>
                    drag_handle
                  </v-icon>
                </div>
              </v-col>
              <v-col cols="auto">
                <div class="section">
                  {{ t.section }}
                </div>
              </v-col>
              <v-list-item-content>
                <v-list-item-title
                  v-text="t.repeat ? t.name + ' ↺' : t.name"
                ></v-list-item-title>
                <v-list-item-subtitle v-text="t.project"></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-text="t.start + ' - ' + t.end"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-col cols="auto"> </v-col>
              <div>
                <div class="grey--text">
                  {{ t.estimate + ' min' }}
                </div>
                <div v-if="t.result" class="white--text">
                  {{ t.result + ' min' }}
                </div>
                <div v-if="t.result">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  <div :class="t.result - t.estimate <= 0 ? 'success--text' : 'error--text'">
                    {{
                      t.result - t.estimate > 0
                        ? '+' + t.result - t.estimate
                        : t.result - t.estimate
                    }}
                  </div>
                </div>
              </div>
            </template>
          </v-list-item>
        </template>
      </template>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      selected: [2],
      tasks: this.$store.state.tasks.list
      // tasks: []
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
