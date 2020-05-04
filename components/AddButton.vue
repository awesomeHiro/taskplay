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
                autofocus
                hide-details
                filled
                solo
                dense
                placeholder="What's next?"
                :rules="rules"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-list-item>

        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center">
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="project"
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
                v-model="section"
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

        <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
          <v-col cols="auto" class="pa-0 ma-0 text-center">
            <v-list-item>
              <v-list-item>
                <template v-for="m in minusMins">
                  <div :key="m">
                    <v-btn
                      class="mx-2"
                      x-small
                      fab
                      color="primary"
                      @click="addtime(parseInt(m))"
                    >
                      {{ m }}
                    </v-btn>
                  </div>
                </template>
              </v-list-item>

              <v-list-item-subtitle class="text-center subtitle-1">
                {{ time.toString().padStart(2, 0) }} min
              </v-list-item-subtitle>
              <v-list-item>
                <template v-for="m in addMins">
                  <div :key="m">
                    <v-btn
                      class="mx-2"
                      x-small
                      fab
                      color="primary"
                      @click="addtime(parseInt(m))"
                    >
                      {{ m }}
                    </v-btn>
                  </div>
                </template>
              </v-list-item>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sheet: true,
      section: 0,
      project: 0,
      time: 1,
      minusMins: ['-3'],
      addMins: ['+1', '+3', '+6'],
      sections: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      projects: this.$store.state.projects.projects,
      rules: [value => !!value],
    }
  },
  methods: {
    addtime(amount) {
      this.time += amount
      this.$refs.taskname.focus()
    },
    addTask() {
      this.$store.dispatch('tasks/add', { section: '2' })
      this.sheet = false
      alert('added')
    },
  },
}
</script>
