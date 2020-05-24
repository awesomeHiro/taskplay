<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-app-bar>
          <v-app-bar-nav-icon @click="leftDrawer = !leftDrawer" />
          <v-row>
            <v-col><v-toolbar-title>Taskplay</v-toolbar-title></v-col>
          </v-row>
          <v-app-bar-nav-icon @click="rightDrawer = true" />
        </v-app-bar>
        <v-divider />
        <v-divider />
        <Summary :tasks="tasks" />
        <clock />
        <Tasklist />
        <v-list-item />
        <MenuButton />

        <v-navigation-drawer v-model="leftDrawer" :width="winodowWidth - 50">
          <LeftDrawer />
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="rightDrawer"
          :width="winodowWidth - 50"
          right
        >
          <LeftDrawer />
        </v-navigation-drawer>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import MenuButton from '~/components/MenuButton.vue'
import Summary from '~/components/Summary.vue'
import Tasklist from '~/components/Tasklist.vue'
import Clock from '~/components/Clock.vue'
import LeftDrawer from '~/components/leftDrawer.vue'
export default {
  components: {
    MenuButton,
    Summary,
    Tasklist,
    Clock,
    LeftDrawer,
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
