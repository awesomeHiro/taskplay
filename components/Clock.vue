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
      time: '99:99:99',
      interval: ''
    }
  },
  beforeCreate() {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1)
  },
  created() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      const cd = new Date()
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ':' +
        this.zeroPadding(cd.getMinutes(), 2) +
        ':' +
        this.zeroPadding(cd.getSeconds(), 2)
    },
    zeroPadding(num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
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
