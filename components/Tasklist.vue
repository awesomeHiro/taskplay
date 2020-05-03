<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <div class="text-center"></div>
      <div v-for="(t, i) in sortedTasks" :key="t.id">
        <v-list-item class="pl-0 pr-0">
          <template>
            <v-col cols="1" class="pa-0 ma-0">
              <div class="drag-bar pa-0 ma-0" @click="alert('drag')">
                <v-icon>
                  drag_handle
                </v-icon>
              </div>
            </v-col>
            <v-col cols="1" class="pa-0 ma-0" @click="alert('section')">
              <div class="drag-bar pa-0 ma-0">
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
                <v-list-item-subtitle v-text="t.project"></v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
            <v-col cols="1" class="pa-0 ma-0">
              <div :class="t.result ? 'accent--text' : ''">
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
              <div :class="t.result && i ? 'accent--text' : ''">
                {{ t.start }}
              </div>
              <div v-if="t.result">
                {{ t.end }}
              </div>
            </v-col>
          </template>
        </v-list-item>
      </div>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      selected: [2],
    }
  },
  computed: {
    sortedTasks() {
      return [...this.$store.state.tasks.today].sort((a, b) =>
        a.section >= b.section ? 1 : -1,
      )
    },
  },
  methods: {
    alert(s) {
      alert(s)
    },
  },
}
</script>
