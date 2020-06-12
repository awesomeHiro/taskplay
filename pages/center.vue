<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <Doing />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Doing from '~/components/Doing.vue'
// import Doing from '~/components/tmp.vue'
// import AddButton from '~/components/AddButton.vue'
export default {
  components: {
    // AddButton,
    Doing,
  },
}
</script>
