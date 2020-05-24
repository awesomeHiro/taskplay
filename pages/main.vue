<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-divider />
        <v-divider />
        <Summary :tasks="tasks" />
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
  data() {
    return {
      tasks: this.$store.state.tasks.today,
      leftDrawer: false,
      rightDrawer: false,
      winodowHeight: window.innerHeight,
      winodowWidth: window.innerWidth,
    }
  },
  methods: {
    toggleLeftDrawer(ref) {
      this.leftDrawer = !this.leftDrawer
    },
    toggleRightDrawer(ref) {
      this.rightDrawer = !this.rightDrawer
    },
  },
}
</script>
