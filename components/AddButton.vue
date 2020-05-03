<template>
  <v-btn color="pink" dark fixed bottom right fab @click="add">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      add: 'addtask',
    }),
  },
}
</script>
