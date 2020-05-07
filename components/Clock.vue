<template>
  <v-container pa-1>
    <div id="timer">
      <div class="timer">
        <div class="time subtle--text">
          {{ time }}
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      time: '00:00:00',
    }
  },
  created() {
    this.updateTime()
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      const cd = new Date()
      const f = time => time.toString().padStart(2, 0)
      this.time =
        f(cd.getHours()) + ':' + f(cd.getMinutes()) + ':' + f(cd.getSeconds())
    },
  },
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
