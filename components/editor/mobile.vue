<template>
  <prism :code="code" language="js" />
</template>

<script>
import prism from 'vue-prism-editor'
export default {
  components: {
    prism,
  },
  data() {
    return {
      code: '{}',
    }
  },
}
</script>
