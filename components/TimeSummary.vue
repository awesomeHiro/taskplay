<template>
  <v-container class="pa-0">
    <v-row align="center" justify="center" class="caption" no-gutters>
      <v-col align="center" justify="center">
        <div class="text-center overline subtle--text">
          Total<br /><v-divider class="mx-2" />{{ estimate }}
        </div>
      </v-col>
      <v-col>
        <div class="text-center overline subtle--text">
          Done<br /><v-divider class="mx-2" />{{ done }}
        </div>
      </v-col>
      <v-col>
        <div class="text-center overline subtle--text">
          Est Gap<br /><v-divider class="mx-2" />
          <div v-if="0 >= estGap" class="success--text">{{ estGap }}</div>
          <div v-else class="error--text">+{{ estGap }}</div>
        </div>
      </v-col>
      <v-col>
        <div class="text-center overline subtle--text">
          Left<br /><v-divider class="mx-2" />{{ left }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    partOftasks: {
      type: Object,
      require: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      tasks: this.$store.state.tasks.today,
    }
  },
  computed: {
    estimate() {
      return min2string(
        this.tasks.reduce(
          (total, task) => (total += parseInt(task.estimate)),
          0,
        ),
      )
    },
    done() {
      return min2string(
        this.tasks
          .filter(x => x.result)
          .reduce((total, task) => (total += parseInt(task.result)), 0),
      )
    },
    estGap() {
      return min2string(
        this.tasks
          .filter(task => task.result)
          .reduce(
            (total, task) =>
              (total += parseInt(task.result) - parseInt(task.estimate)),
            0,
          ),
      )
    },
    left() {
      return min2string(
        this.tasks
          .filter(task => task.result)
          .reduce((total, task) => (total += parseInt(task.estimate)), 0),
      )
    },
  },
}

const pad = n => n.toString().padStart(2, 0)
const min2string = str => `${pad(Math.floor(str / 60))}:${pad(str % 60)}`
</script>
