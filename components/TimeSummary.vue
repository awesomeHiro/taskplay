<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-center caption">
          Total<br /><v-divider />{{ estimate }}
        </div>
      </v-col>
      <v-col>
        <div class="text-center caption">Done<br /><v-divider />{{ done }}</div>
      </v-col>
      <v-col>
        <div class="text-center caption">
          Est Gap<br /><v-divider />
          <div v-if="0 >= estGap" class="success--text">{{ estGap }}</div>
          <div v-else class="error--text">+{{ estGap }}</div>
        </div>
      </v-col>
      <v-col>
        <div class="text-center caption">Left<br /><v-divider />{{ left }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tasks: this.$store.state.tasks.today,
    }
  },
  computed: {
    estimate() {
      return min2string(
        this.tasks.reduce((total, task) => (total += task.estimate), 0),
      )
    },
    done() {
      return min2string(
        this.tasks.reduce((total, task) => (total += task.result), 0),
      )
    },
    estGap() {
      return min2string(
        this.tasks
          .filter(task => task.result)
          .reduce((total, task) => (total += task.result - task.estimate), 0),
      )
    },
    left() {
      return min2string(
        this.tasks
          .filter(task => task.result)
          .reduce((total, task) => (total += task.estimate), 0),
      )
    },
  },
}

const pad = n => n.toString().padStart(2, 0)
const min2string = str => `${pad(Math.floor(str / 60))}:${pad(str % 60)}`
</script>
