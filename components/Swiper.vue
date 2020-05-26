<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="left"><left /></swiper-slide>
    <swiper-slide class="center">
      <div
        class="menu-button"
        :class="{ opened: menuOpened }"
        @click="toggleMenu($event)"
      ></div>
      <center />
    </swiper-slide>
    <swiper-slide class="right"><right /></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import left from '~/pages/left.vue'
import center from '~/pages/center.vue'
import right from '~/pages/right.vue'
export default {
  components: {
    left,
    center,
    right,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      menuOpened: false,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 20,
        on: {
          slideChange: () => {
            // this.menuOpened = this.swiper.activeIndex === 0
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper
    },
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
  .left .right {
    min-width: 100px;
    // width: 90%;
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
