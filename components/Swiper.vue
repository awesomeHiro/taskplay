<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="menu">Menu slide</swiper-slide>
    <swiper-slide class="content">
      <div
        class="menu-button"
        :class="{ opened: menuOpened }"
        @click="toggleMenu($event)"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      Content slide
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'SwiperExampleSlideableNavigationDrawer',
  title: 'Slideable navigation drawer',
  data() {
    return {
      menuOpened: false,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        on: {
          slideChange: () => {
            console.log(this.$refs.swiper.$swiper.activeIndex)
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
