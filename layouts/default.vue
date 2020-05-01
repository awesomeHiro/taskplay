<template>
  <v-app>
    <v-content>
      <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Settings',
          to: '/settings',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Taskplay',
    }
  },
}
</script>
