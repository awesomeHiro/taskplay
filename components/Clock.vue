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
      time: '',
      date: ''
    }
  },
  computed: {
    formatTime() {
      const cd = new Date()
      return cd.getSeconds()
    }
  },
  created() {
    setInterval(() => {
      this.updateTime()
    }, 1000)
    this.timerOn = true // timerがOFFであることを状態として保持
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
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        '-' +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        this.zeroPadding(cd.getDate(), 2) +
        ' ' +
        week[cd.getDay()]
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
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
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
