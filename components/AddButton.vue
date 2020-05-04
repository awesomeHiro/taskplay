<template>
  <v-btn color="pink" fixed bottom right @click="add">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>
<script>
export default {
  methods: {
    add() {
      this.$store.dispatch('tasks/add')
    },
  },
}
</script>
