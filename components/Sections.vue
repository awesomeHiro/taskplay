<template>
  <div>
    <v-list dense>
      <v-list-item v-for="section in sections" :key="section.id" link>
        <v-list-item-content>
          <v-list-item-title>
            <v-row>
              <v-col> {{ section.start }} - </v-col>
              <v-col> {{ section.name }}</v-col>
              <v-col> {{ section.desc }}</v-col>
            </v-row>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedSection: [2],
      sections: this.$store.state.sections.sections,
    }
  },
}
</script>
