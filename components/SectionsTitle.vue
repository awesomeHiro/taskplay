<template>
  <div>
    <v-row align="center" justify="center" class="caption" no-gutters>
      <v-col><v-divider clsss="ma-2"/></v-col>
      <v-col cols="auto">
        <div class="body-1">
          {{ section.name }} {{ section.start }} - {{ section.desc }}
        </div>
      </v-col>
      <v-col><v-divider clsss="ma-2"/></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    section: {
      type: Object,
      default() {
        return { name: 'Z', start: '', desc: 'No Section' }
      },
    },
  },
}
</script>
