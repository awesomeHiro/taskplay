<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="menu">
      <left />
    </swiper-slide>
    <swiper-slide class="content">
      <center />
    </swiper-slide>
    <swiper-slide class="menu">
      <right />
    </swiper-slide>
  </swiper>
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
      menuOpened: false,
      swiper: {
        activeIndex: 1,
      },
      swiperOption: {
        init: false,
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 10,
        on: {
          slideChange: () => {
            this.$store.commit('meta/setActiveIndex', this.swiper.activeIndex)
          },
        },
      },
    }
  },
  computed: {
    activeIndex() {
      return this.$store.getters['meta/activeIndex']
    },
  },
  mounted() {
    this.$refs.swiper.$swiper.init()
    this.swiper = this.$refs.swiper.$swiper
  },
}
</script>

<style lang="scss" scoped>
@import './base.scss';
.swiper {
  .menu {
    overflow: auto;
    width: 95%;
  }

  .content {
    overflow: auto;
    width: 100%;
  }
}
</style>
