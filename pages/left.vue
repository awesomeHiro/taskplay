<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-row align="center" justify="center" class="caption" no-gutters>
          <v-col><v-divider clsss="ma-2"/></v-col>
          <v-col cols="auto"><div>TODO</div></v-col>
          <v-col><v-divider clsss="ma-2"/></v-col>
        </v-row>
        <Summary :tasks="this.$store.state.tasks.today" />
        <Todo />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Summary from '~/components/Summary.vue'
import Todo from '~/components/Todo.vue'
export default {
  components: {
    Summary,
    Todo,
  },
}
</script>
