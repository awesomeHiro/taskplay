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

  .menu-button {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 15px;
    cursor: pointer;
    transition: 0.3s;
    // background-color: #2c8dfb;

    &:hover {
      .bar:nth-of-type(1) {
        transform: translateY(1.5px) rotate(-4.5deg);
      }
      .bar:nth-of-type(2) {
        opacity: 0.9;
      }
      .bar:nth-of-type(3) {
        transform: translateY(-1.5px) rotate(4.5deg);
      }
    }

    &.opened {
      .bar:nth-of-type(1) {
        transform: translateY(15px) rotate(-45deg);
      }
      .bar:nth-of-type(2) {
        opacity: 0;
      }
      .bar:nth-of-type(3) {
        transform: translateY(-15px) rotate(45deg);
      }

      &:hover {
        .bar:nth-of-type(1) {
          transform: translateY(13.5px) rotate(-40.5deg);
        }
        .bar:nth-of-type(2) {
          opacity: 0.1;
        }
        .bar:nth-of-type(3) {
          transform: translateY(-13.5px) rotate(40.5deg);
        }
      }
    }
  }
}
</style>
