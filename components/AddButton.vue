<template>
  <v-btn color="pink" fixed bottom right @click="log">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>
<script>
export default {
  methods: {
    log() {
      this.$store.dispatch('tasks/add')
    },
  },
}
</script>
