<template>
  <div>
    <v-bottom-sheet v-model="sheet" max-width="600px">
      <v-card class="mx-auto">
        <v-list-item>
          <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-chip-group
            v-model="project"
            active-class="primary white--text"
            column
          >
            <v-chip v-for="p in projects" :key="p.id" small class="pa-2">
              {{ p.name }}
            </v-chip>
          </v-chip-group>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-chip-group v-model="selection" active-class="primary white--text">
            <v-chip v-for="s in sections" :key="s" small class="pa-2">
              {{ s }}
            </v-chip>
          </v-chip-group>
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
          <v-list-item-subtitle
            ><v-text-field label="Name your task" :rules="rules"></v-text-field
          ></v-list-item-subtitle>
          <v-list-item-icon>
            <v-btn fab @click="addTask">
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-list-item-icon>
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
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
      forecast: [
        {
          day: 'Tuesday',
          icon: 'mdi-white-balance-sunny',
          temp: '24\xB0/12\xB0',
        },
        {
          day: 'Wednesday',
          icon: 'mdi-white-balance-sunny',
          temp: '22\xB0/14\xB0',
        },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],

      sheet: true,
      selection: 0,
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
