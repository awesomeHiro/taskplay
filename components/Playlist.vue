<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <div class="text-center">April</div>
      <v-divider></v-divider>
      <daytab />
      <v-divider></v-divider>
      <time-summary></time-summary>
      <v-divider></v-divider>
      <clock />
      <v-divider></v-divider>
      <Tasklist />
    </v-card>
    <v-btn color="pink" dark fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>
<script>
import TimeSummary from '~/components/TimeSummary.vue'
import Daytab from '~/components/Daytab.vue'
import Tasklist from '~/components/Tasklist.vue'
import Clock from '~/components/Clock.vue'

export default {
  components: {
    TimeSummary,
    Daytab,
    Tasklist,
    Clock
  }
}
</script>
