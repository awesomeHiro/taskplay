<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <Topbar />
        <v-divider></v-divider>
        <div class="text-center barely--text">April</div>
        <v-divider></v-divider>
        <daytab />
        <v-divider></v-divider>
        <time-summary></time-summary>
        <v-divider></v-divider>
        <clock />
        <v-divider></v-divider>
        <Tasklist />
        <MenuButton />
        <AddButton />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Topbar from '~/components/Topbar.vue'
import AddButton from '~/components/AddButton.vue'
import MenuButton from '~/components/MenuButton.vue'
import TimeSummary from '~/components/TimeSummary.vue'
import Daytab from '~/components/Daytab.vue'
import Tasklist from '~/components/Tasklist.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    Topbar,
    AddButton,
    MenuButton,
    TimeSummary,
    Daytab,
    Tasklist,
    Clock,
  },
}
</script>
