<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <div>
          <comp />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Comp from '~/components/Progress.vue'
import Comp from '~/components/Playlist.vue'
// import Comp from '~/components/Temp.vue'

export default {
  components: {
    Comp
  }
}
</script>
