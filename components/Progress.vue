<template>
  <v-container>
    <v-row>
      <v-col>
        <p>{{ start }}</p>
      </v-col>
      <v-col>
        <v-progress-linear align-self="end" value="15"></v-progress-linear>
      </v-col>
      <v-col>
        <p>{{ end }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      start: '07:32',
      end: '17:43',
      valueDeterminate: 50
    }
  }
}
</script>
