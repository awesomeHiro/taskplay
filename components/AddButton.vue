<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn color="pink" fixed bottom right v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="
                  `https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`
                "
                :alt="tile.title"
              />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    sheet: false,
    tiles: [
      { img: 'keep.png', title: 'Sections' },
      { img: 'inbox.png', title: 'Sets' },
      { img: 'hangouts.png', title: 'Routines' },
      { img: 'messenger.png', title: 'Projects' },
      { img: 'google.png', title: 'Settings' },
    ],
  }),
  methods: {
    add() {
      this.$store.dispatch('tasks/add')
    },
  },
}
</script>
