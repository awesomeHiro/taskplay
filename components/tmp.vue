<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-group
        v-for="crud in cruds"
        :key="crud[0]"
        ref="group"
        class="pa-0"
      >
        <template v-slot:activator>
          <!-- <input @click.stop /> {{ crud[0] }}
          <div @click.stop>ijasdfadsf asdf asdffa wef asdfas fd</div> -->
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
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete'],
    ],
  }),
}
</script>

<style>
.v-list-item__icon {
  min-width: 0px !important;
}
</style>
