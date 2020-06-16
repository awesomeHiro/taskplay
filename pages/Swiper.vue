<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="menu">
      <div class="windowsize"><centerl ref="left" class="left editor" /></div>
    </swiper-slide>
    <swiper-slide class="content">
      <div class="windowsize"><centerl ref="centerl" class="editor" /></div>
    </swiper-slide>
    <swiper-slide class="content">
      <div class="windowsize"><center ref="center" class="center" /></div>
    </swiper-slide>
    <swiper-slide class="menu">
      <div class="windowsize"><right ref="right" class="right" /></div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import left from '~/pages/left.vue'
import centerl from '~/components/Editor.vue'
import center from '~/pages/center.vue'
import right from '~/pages/right.vue'
export default {
  components: {
    // left,
    centerl,
    center,
    right,
  },
  data() {
    return {
      mySwiper: {},
      menuOpened: false,
      swiper: {
        // defalut value to prevent error
        activeIndex: 1,
        updateAutoHeight: () => {},
      },
      swiperOption: {
        init: false,
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto',
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
    this.mySwiper = this.$refs.swiper
  },
  methods: {
    updateAutoHeight() {
      // console.log('updateAutoHeight')
      // this.swipe.updateAutoHeight()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/swiper.scss';
.windowsize {
  height: 100vh;
  width: 100vw;
}
.swiper {
  .menu {
    width: 90vw;
    overflow: auto;
  }
  .content {
    overflow: auto;
  }
  .editor {
    font-size: 12px;
    text-align: left;
  }
}
</style>
