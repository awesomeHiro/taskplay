<template>
  <div>
    <v-list dense>
      <v-list-item v-for="section in sections" :key="section.id" link>
        <v-list-item-content>
          <v-list-item-title>{{ section.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [2],
      sections: this.$store.state.sections.sections,
    }
  },
}
</script>
