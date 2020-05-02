<template>
  <v-tabs center-active show-arrows>
    <v-tab v-for="d in days" :key="d.date">
      <div class="caption">{{ d.day }}<br />{{ d.date }}</div>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
  data: () => ({
    days: [
      {
        month: '4',
        date: '27',
        day: 'Mon',
      },
      {
        month: '4',
        date: '28',
        day: 'Tue',
      },
      {
        month: '4',
        date: '29',
        day: 'Wed',
      },
      {
        month: '4',
        date: '30',
        day: 'Thu',
      },
      {
        month: '5',
        date: '1',
        day: 'Fri',
      },
      {
        month: '5',
        date: '2',
        day: 'Sat',
      },
      {
        month: '5',
        date: '3',
        day: 'Sun',
      },
    ],
  }),
}
</script>
