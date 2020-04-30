<template>
  <v-container>
    <v-row>
      <v-col v-for="s in summary" :key="s.id" class="pa-0">
        <div class="text-center caption">
          {{ s.text }}<br />
          <v-divider></v-divider>
          <!-- eslint-disable-next-line prettier/prettier -->
        <template v-if="s.text==='Est Gap'">
            <!-- eslint-disable-next-line prettier/prettier -->
          <div :class="0 >= s.value ? 'success--text' : 'error--text'">
              <!-- eslint-disable-next-line prettier/prettier -->
          {{ s.value }}
            </div>
          </template>
          <template v-else>
            {{ s.value }}
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    section: { type: String, default: '∑' }
  },
  data: () => ({
    summary: [
      { id: 1, text: 'Estimate', value: '07:34' },
      { id: 2, text: 'Done', value: '00:41' },
      { id: 3, text: 'Est Gap', value: '+6' },
      { id: 4, text: 'Left', value: '06:59' },
      { id: 5, text: 'Finish at', value: '18:02' }
    ]
  })
}
</script>
