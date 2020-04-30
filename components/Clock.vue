<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      time: '00:00:00'
    }
  },
  beforeCreate() {
    const cd = new Date()
    this.time =
      // eslint-disable-next-line prettier/prettier
      cd.getHours().toString().padStart(2, 0) +':' +
      // eslint-disable-next-line prettier/prettier
      cd.getMinutes().toString().padStart(2, 0) + ':' +
      // eslint-disable-next-line prettier/prettier
      cd.getSeconds().toString().padStart(2, 0)
  },
  created() {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      const cd = new Date()
      this.time =
        // eslint-disable-next-line prettier/prettier
      cd.getHours().toString().padStart(2, 0) +':' +
        // eslint-disable-next-line prettier/prettier
      cd.getMinutes().toString().padStart(2, 0) + ':' +
        // eslint-disable-next-line prettier/prettier
      cd.getSeconds().toString().padStart(2, 0)
    }
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.time {
  font-size: 14px;
}
</style>
