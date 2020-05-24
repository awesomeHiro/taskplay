<template>
  <div
    class="carousel"
    style="margin: 0px; padding: 0px; width: 100%; height: 100%"
  >
    <v-carousel
      v-model="currentCarousel"
      :continuous="false"
      :show-arrows="showArrows"
      hide-delimiters
      style="margin: 0px; padding: 0px; width: 100%; height: 100%"
    >
      <v-carousel-item><left /></v-carousel-item>
      <v-carousel-item><center /></v-carousel-item>
      <v-carousel-item><right /></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import left from '~/pages/left.vue'
import center from '~/pages/center.vue'
import right from '~/pages/right.vue'
export default {
  components: {
    left,
    center,
    right,
  },
  data() {
    return {
      currentCarousel: 0,
    }
  },
  computed: {
    showArrows() {
      if (this.currentCarousel === 1) return false
      return true
    },
  },
}
</script>
