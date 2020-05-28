<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <Doing :section="selectedSection" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Doing from '~/components/Doing.vue'
// import AddButton from '~/components/AddButton.vue'
export default {
  components: {
    // AddButton,
    Doing,
  },
  computed: {
    activeIndex() {
      return this.$store.getters['meta/activeIndex']
    },
    selectedSection: {
      get() {
        return this.$store.getters['meta/selectedSection']
      },
      set(sectionId) {
        this.$store.commit('meta/setSelectedSection', sectionId)
      },
    },
  },
  methods: {
    calcTasks() {
      this.$store.dispatch('tasks/updateEstFinishAt')
    },
  },
}
</script>
