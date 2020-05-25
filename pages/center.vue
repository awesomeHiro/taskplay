<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <clock />
        <Todo :section="selectedSection" />
        <v-list-item />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Todo from '~/components/Todo.vue'
import Clock from '~/components/Clock.vue'
export default {
  components: {
    Todo,
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
