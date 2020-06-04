<template>
  <div>
    <Title :title="title" />
    <Summary :tasks="done" />
    <Tasklist :tasks="done" />
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
import Summary from '~/components/Summary.vue'
import Tasklist from '~/components/Tasklist.vue'

export default {
  components: {
    Title,
    Summary,
    Tasklist,
  },

  data() {
    return {
      title: 'DONE',
      done: this.$store.getters['tasks/done'],
    }
  },
}
</script>
