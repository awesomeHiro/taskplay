<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on }">
        <v-btn color="pink" fixed bottom right v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto" max-width="374">
        <v-card-title>Cafe Badilico</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-chip-group
            v-model="project"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip v-for="p in projects" :key="p.id" class="pa-2">
              {{ p.name }}
            </v-chip>
          </v-chip-group>
          <v-divider></v-divider>

          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
          >
            <v-chip v-for="s in sections" :key="s" class="pa-2">
              {{ s }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <v-row>
            <v-col cols="2">
              <div class="text-right">{{ time }}</div></v-col
            >
            <v-col class="pr-4">
              <div class="text-center">
                <v-btn
                  v-for="m in addMins"
                  :key="m"
                  class="mx-2"
                  fab
                  x-small
                  color="primary"
                  @click="addtime(parseInt(m))"
                >
                  {{ m }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-text-field label="Name your task" :rules="rules"></v-text-field>
          <v-btn color="deep-purple lighten-2" text @click="addTask">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
