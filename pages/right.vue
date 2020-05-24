<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-divider />
        <v-divider />
        <Summary :tasks="this.$store.state.tasks.today" />
        <clock />
        <Tasklist />
        <v-list-item />
        <MenuButton />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import MenuButton from '~/components/MenuButton.vue'
import Summary from '~/components/Summary.vue'
import Tasklist from '~/components/Tasklist.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    MenuButton,
    Summary,
    Tasklist,
    Clock,
  },
}
</script>
