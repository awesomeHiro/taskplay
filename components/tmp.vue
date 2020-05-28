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
        scrollbar: {
          el: '.swiper-scrollbar',
          // hide: true,
        },

        init: false,
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 20,
        on: {
          slideChange: () => {
            this.menuOpened = this.swiper.activeIndex === 0
          },
        },
      },
    }
  },

  mounted() {
    this.$refs.swiper.$swiper.params.navigation.nextEl = this.$refs.swiperButtonNext
    this.$refs.swiper.$swiper.params.navigation.prevEl = this.$refs.swiperButtonPrev
    this.$refs.swiper.$swiper.init()
    this.swiper = this.$refs.swiper.$swiper
  },

  methods: {
    toggleMenu(event) {
      this.menuOpened ? this.swiper.slideNext() : this.swiper.slidePrev()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './base.scss';
.swiper {
  .menu {
    width: 90%;
  }

  .content {
    width: 100%;
  }
}
</style>
