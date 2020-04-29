<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col>
      <v-card max-width="500px">
        <div>{{ id }}</div>
        <div class="text-center">April</div>
        <v-divider></v-divider>
        <daytab />
        <v-divider></v-divider>
        <time-summary></time-summary>
        <v-divider></v-divider>
        <clock />
        <v-divider></v-divider>
        <Tasklist />
        <v-btn color="pink" dark fixed bottom right fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card></v-col
    >
  </v-row>
</template>
<script>
import { nanoid } from 'nanoid'
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
  },
  data() {
    return {
      id: nanoid()
    }
  }
}
</script>
