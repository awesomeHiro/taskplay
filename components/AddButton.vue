<template>
  <v-btn
    color="pink"
    fixed
    bottom
    right
    @click="$store.tasks.dispatch('addTask', { name: 'new' })"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>
<script>
export default {
  methods: {},
}
</script>
