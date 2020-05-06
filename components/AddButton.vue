<template>
  <div>
    <v-bottom-sheet v-model="sheet" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="pink" fab fixed bottom right v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-divider></v-divider>

        <v-list-item class="pa2">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="auto" class=" text-center">
              <v-text-field
                ref="taskname"
                v-model="taskname"
                autofocus
                hide-details
                filled
                solo
                flat
                dense
                placeholder="What's next?"
                :rules="nameRules"
                @keydown.enter="addTask()"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center">
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="projectSelect"
                active-class="primary white--text"
                column
              >
                <div class="text-center">
                  <v-chip
                    v-for="p in projects"
                    :key="p.id"
                    small
                    class="pa-2"
                    @click="$refs.taskname.focus()"
                  >
                    {{ p.name }}
                  </v-chip>
                </div>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="sectionSelect"
                active-class="primary white--text"
                class="text-center"
                column
              >
                <v-chip
                  v-for="s in sections"
                  :key="s"
                  small
                  class="pa-2"
                  @click="$refs.taskname.focus()"
                >
                  {{ s }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item class="pa2">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="auto" class=" text-center">
              <v-text-field
                ref="time"
                v-model="inputTime"
                hide-details
                filled
                solo
                flat
                dense
                type="number"
                :rules="timeRules"
              ></v-text-field>
              min
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              {{ time.toString().padStart(2, 0) }} min
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="raughTimeSelect"
                active-class="primary white--text"
                class="text-center"
                multiple
                column
              >
                <v-chip
                  v-for="(t, i) in raughTimes"
                  :key="i"
                  small
                  class="pa-2"
                  @click="$refs.taskname.focus()"
                >
                  {{ t }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      taskname: '',
      nameRules: [name => !!name],
      sheet: true,
      sections: ['A', 'B', 'C', 'D', 'E', 'F'],
      sectionSelect: 0,
      projects: this.$store.state.projects.projects,
      projectSelect: 0,
      inputTime: 0,
      raughTime: 0,
      raughTimes: [1, 1, 2, 3, 5, 8, 13, 21, 34],
      raughTimeSelect: [],
      timeRules: [time => time > 0],
    }
  },
  computed: {
    time() {
      return this.raughTime + this.inputTime
    },
  },
  methods: {
    addtime(amount) {
      this.time += amount
      this.$refs.taskname.focus()
    },
    addTask() {
      this.$store.dispatch('tasks/add', { section: '2' })
      this.sheet = false
    },
  },
}
</script>
