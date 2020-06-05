<template>
  <div>
    <Title :title="title" />
    <Summary :tasks="doing" />
    <Clock />
    <Tasklist :tasks="doing" :executable="true" />
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
import Summary from '~/components/Summary.vue'
import Clock from '~/components/Clock.vue'
import Tasklist from '~/components/Tasklist.vue'

export default {
  components: {
    Title,
    Clock,
    Summary,
    Tasklist,
  },
  data() {
    return {
      title: 'NOW',
      doing: this.$store.getters['tasks/doing'],
    }
  },
}
</script>
