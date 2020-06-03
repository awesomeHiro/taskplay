<template>
  <div>
    <v-row align="center" justify="center" class="caption" no-gutters>
      <v-col><v-divider clsss="ma-2"/></v-col>
      <v-col cols="auto">
        <div>{{ title }}</div>
      </v-col>
      <v-col><v-divider clsss="ma-2"/></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>
