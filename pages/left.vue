<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <Todo />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Todo from '~/components/Todo.vue'
export default {
  components: {
    Todo,
  },
}
</script>
