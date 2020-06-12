<template>
  <v-card class="mx-auto" width="300">
    <v-btn @click="open()">toggle</v-btn>
    <v-list>
      <v-list-group
        v-for="crud in cruds"
        :key="crud[0]"
        ref="group"
        value="true"
        class="pa-0"
      >
        <template v-slot:activator>
          <input @click.stop /> {{ crud[0] }}
          <div @click.stop>ijasdfadsf asdf asdffa wef asdfas fd</div>
        </template>
        <v-list-item v-for="(crud, i) in cruds" :key="i">
          <v-list-item-title v-text="crud[0]"></v-list-item-title>
          <v-list-item-action>
            <v-icon v-text="crud[1]"></v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings'],
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete'],
    ],
  }),

  created() {
    // this.document.querySelector(
    //   "'#main > div > div > div:nth-child(1) > div.v-list-group__header'",
    // )
    setTimeout(console.log(this.$refs), 3000)
  },
  methods: {
    open() {
      if (this.selected === []) {
        this.selected = [0, 1, 2, 3]
      } else {
        this.selected = []
      }
    },
  },
}
</script>

<style>
.v-list-item__icon {
  min-width: 0px !important;
}
</style>
