<template>
  <div>
    <swiper ref="swiper" class="swiper" :options="swiperOption">
      <swiper-slide class="left"><left /></swiper-slide>
      <swiper-slide class="center">
        <center />
      </swiper-slide>
      <swiper-slide class="right"><right /></swiper-slide>
      <div
        v-if="swiper.activeIndex === 0"
        ref="swiperButtonNext"
        class="swiper-button-next"
      ></div>
      <div
        v-if="swiper.activeIndex === 2"
        ref="swiperButtonPrev"
        class="swiper-button-prev"
      ></div>
    </swiper>
    <div class="swiper-scrollbar"></div>
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
            console.log(this.swiper.activeIndex)
          },
        },
      },
    }
  },
  mounted() {
    this.$refs.swiper.$swiper.params.navigation.nextEl = this.$refs.swiperButtonNext
    this.$refs.swiper.$swiper.params.navigation.prevEl = this.$refs.swiperButtonPrev
    this.$refs.swiper.$swiper.init()
    // console.log(this.$refs.swiper.$swiper.activeIndex)
    this.swiper = this.$refs.swiper.$swiper
    console.log(this.swiper)
  },
  methods: {
    toggleMenu(event) {
      this.menuOpened ? this.swiper.slideNext() : this.swiper.slidePrev()
    },
    debug() {
      return Object.getOwnPropertyNames(this.$children[0].$swiper)
    },
    activeIndex() {
      return this.$refs.swiper.$swiper.activeIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import './base.scss';
.swiper {
  .left .right {
    min-width: 100px;
    width: 90%;
    // max-width: 320px;
    // background-color: #2c8dfb !important;
    color: #fff;
  }

  .center {
    width: 100%;
  }
}
</style>
