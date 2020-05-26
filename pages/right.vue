<template>
  <v-row align="center" justify="center" class="caption" no-gutters>
    <v-col align="center" justify="center">
      <v-card id="main" max-width="600px">
        <v-row align="center" justify="center" class="caption" no-gutters>
          <v-col><v-divider clsss="ma-2"/></v-col>
          <v-col cols="auto"><div>DONE</div></v-col>
          <v-col><v-divider clsss="ma-2"/></v-col>
        </v-row>
        <Summary :tasks="this.$store.state.tasks.today" />
        <Done />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import Summary from '~/components/Summary.vue'
import Done from '~/components/Done.vue'
export default {
  components: {
    Summary,
    Done,
  },
}
</script>
