<template>
  <div>
    <Title :title="title" />
    <Summary :tasks="todo" />
    <Tasklist :tasks="todo" />
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
      title: 'LATER',
      todo: this.$store.getters['tasks/todo'],
      selectedSectionId: this.$store.getters['meta/selectedSectionId'],
    }
  },
}
</script>
