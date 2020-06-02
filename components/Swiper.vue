<template>
  <swiper ref="swiper" class="swiper" :options="swiperOption">
    <swiper-slide class="menu">
      <left ref="left" />
    </swiper-slide>
    <swiper-slide class="content center">
      <center ref="center" />
    </swiper-slide>
    <swiper-slide class="menu right">
      <right ref="right" />
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

            setTimeout(() => {
              // console.log(document.querySelector('.swiper-container'))
              // console.log(this.swiper.height)
              console.log(
                this.swiper.slides[this.swiper.activeIndex].firstElementChild,
              )
              document.querySelector('.swiper-container').style.height =
                this.swiper.slides[this.swiper.activeIndex].firstElementChild
                  .clientHeight + 'px'
            }, 10)
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
    console.log(this.$refs.left.$el.clientHeight)
    console.log(this.$refs)
    // console.log(this.$refs.right)
    this.$refs.swiper.$swiper.init()
    this.swiper = this.$refs.swiper.$swiper
    this.mySwiper = this.$refs.swiper

    this.$nextTick(function() {
      window.setInterval(() => {
        this.updateAutoHeight()
        // console.log(this.$refs.swiper.height)
      }, 4000)
    })
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
@import './base.scss';
.swiper {
  .menu {
    // width: 90%;
    // height: 100%;
    // overflow: auto;
  }

  .content {
    // overflow: auto;
    // height: 100%;
  }
}
</style>
