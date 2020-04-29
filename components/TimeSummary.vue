<template>
  <v-row>
    <v-col v-for="s in summary" :key="s.id">
      <div class="text-center caption">
        {{ s.text }}<br />
        <v-divider></v-divider>
        {{ s.value }}
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    section: { type: String, default: '∑' }
  },
  data: () => ({
    summary: [
      { id: 1, text: 'Estimate', value: '07:34' },
      { id: 2, text: 'Result', value: '00:41' },
      { id: 3, text: 'Difference', value: '+6' },
      { id: 4, text: 'Left', value: '06:59' },
      { id: 5, text: 'Finish at', value: '18:02' }
    ]
  })
}
</script>
