<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-divider />
        <v-divider />
        <Summary :tasks="this.$store.state.tasks.today" />
        <clock />
        <Todo />
        <v-list-item />
        <MenuButton />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import MenuButton from '~/components/MenuButton.vue'
import Summary from '~/components/Summary.vue'
import Todo from '~/components/Todo.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    MenuButton,
    Summary,
    Todo,
    Clock,
  },
}
</script>
