<template>
  <div v-if="isMobile">
    <mobile />
  </div>
  <div v-else>
    <desktop />
  </div>
</template>

<script>
// import { isMobile } from 'mobile-device-detect'
import mobile from '~/components/editor/mobile.vue'
import desktop from '~/components/editor/desktop.vue'

export default {
  name: 'HelloWorld',
  components: {
    mobile,
    desktop,
  },
  data() {
    return {
      isMobile: false,
    }
  },
}
</script>
