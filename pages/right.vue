<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <Done />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Done from '~/components/Done.vue'
export default {
  components: {
    Done,
  },
}
</script>
