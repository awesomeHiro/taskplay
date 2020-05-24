<template>
  <div
    class="index"
    style="margin: 0px; padding: 0px; width: 100%; height: 100%"
  >
    <comp />
  </div>
</template>

<script>
// import Comp from '~/components/Progress.vue'
import Comp from '~/pages/main.vue'
// import Comp from '~/components/leftDrawer.vue'
// import Comp from '~/components/firebase/addFieldToFirestoreExample.vue'
// import Comp from '~/components/firebase/addUserExample.vue'

export default {
  components: {
    Comp,
  },
}
</script>
