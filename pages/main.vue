<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-divider />
        <v-divider />
        <daytab />
        <v-divider />
        <div class="text-center subtle--text">Today</div>
        <time-summary :tasks="tasks" />
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
import TimeSummary from '~/components/TimeSummary.vue'
import Daytab from '~/components/Daytab.vue'
import Tasklist from '~/components/Tasklist.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    MenuButton,
    TimeSummary,
    Daytab,
    Tasklist,
    Clock,
  },
  data() {
    return {
      tasks: this.$store.state.tasks.today,
    }
  },
}
</script>
