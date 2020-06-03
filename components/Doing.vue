<template>
  <div>
    <Title :title="title" />
    <Summary :tasks="doing" />
    <Clock />
    <Tasklist :tasks="doing" />
  </div>
</template>
<script>
import Summary from '~/components/Summary.vue'
import Clock from '~/components/Clock.vue'
import Tasklist from '~/components/Tasklist.vue'

export default {
  components: {
    Clock,
    Summary,
    Tasklist,
  },
  data() {
    return {
      title: 'Doing',
      todo: this.$store.getters['tasks/doing'],
    }
  },
}
</script>
<style scoped>
.footer {
  -webkit-transform: translateX(95%);
  transform: translateX(95%);
}
</style>
