<template>
  <v-btn fixed bottom left @click="menu">
    <v-icon>mdi-menu</v-icon>
  </v-btn>
</template>
<script>
export default {
  methods: {
    menu() {
      alert('menu')
    },
  },
}
</script>
