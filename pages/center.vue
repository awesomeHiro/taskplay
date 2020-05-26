<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <clock />
        <Doing :section="selectedSection" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Doing from '~/components/Doing.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    Doing,
    Clock,
  },
  computed: {
    selectedSection: {
      get() {
        return this.$store.getters['meta/selectedSection']
      },
      set(sectionId) {
        this.$store.commit('meta/setSelectedSection', sectionId)
      },
    },
  },
}
</script>
