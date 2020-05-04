<template>
  <div>
    <v-bottom-sheet v-model="sheet" max-width="600px">
      <v-card class="mx-auto">
        <v-divider></v-divider>
        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="project"
                active-class="primary white--text"
                column
              >
                <div class="text-center">
                  <v-chip v-for="p in projects" :key="p.id" small class="pa-2">
                    {{ p.name }}
                  </v-chip>
                </div>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-chip-group
                v-model="section"
                active-class="primary white--text"
                class="text-center"
                column
              >
                <v-chip v-for="s in sections" :key="s" small class="pa-2">
                  {{ s }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-subtitle class="text-center subtitle-1">
            {{ time }} min
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

        <v-divider></v-divider>
        <v-list-item>
          <v-row class="pa-0 ma-0" align="center" justify="center" no-gutters>
            <v-col cols="auto" class="pa-0 ma-0 text-center">
              <v-text-field
                label="Name your task"
                :rules="rules"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-list-item>
        <v-card-actions> </v-card-actions>
      </v-card>
      <template v-slot:activator="{ on }">
        <v-btn color="pink" fab fixed bottom right v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
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
      addMins: ['-1', '+1', '+3', '+5'],
      sections: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      projects: this.$store.state.projects.projects,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }
  },
  methods: {
    addtime(amount) {
      this.time += amount
    },
    addTask() {
      this.$store.dispatch('tasks/add', { section: '2' })
      this.sheet = false
      alert('added')
    },
  },
}
</script>
