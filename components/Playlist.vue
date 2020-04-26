<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card max-width="500" class="mx-auto">
          <v-list two-line>
            <v-list-item-group v-model="selected" active-class="pink--text">
              <template v-for="(item, index) in items">
                <v-list-item :key="item.project">
                  <template v-slot:default="{ active }">
                    <v-col cols="auto">
                      <div class="drag-bar">
                        <v-icon>
                          drag_handle
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col cols="auto">
                      <div class="section project">
                        B
                      </div>
                    </v-col>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.taskname"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.project"
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle
                        v-text="item.startend"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-col cols="auto">
                      <div class="repeat">
                        <v-icon>
                          repeat
                        </v-icon>
                      </div>
                    </v-col>
                    <v-list-item-estimate>
                      <div>
                        {{ item.estimate + ' min' }}
                      </div>
                      <div v-if="!active">
                        {{ item.result + ' min' }}
                      </div>
                      <div v-else-if="!!result">
                        {{ item.result + ' min' }}
                      </div>
                    </v-list-item-estimate>
                  </template>
                </v-list-item>
                <v-divider
                  v-if="index + 1 < items.length"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        estimate: '15',
        result: '21',
        taskname: 'Eat lunch',
        project: 'Ali Connors',
        startend: '13:02 - 13:23'
      },
      {
        estimate: '20',
        result: '19',
        taskname: 'Summer BBQ',
        project: 'me, Scrott, Jennifer',
        startend: '13:23 - 13:41'
      },
      {
        estimate: '30',
        result: '',

        taskname: 'Oui oui',
        project: 'Sandra Adams',
        startend: '13:41 - '
      },
      {
        estimate: '20',
        result: '',
        taskname: 'Birthday gift',
        project: 'Trevor Hansen',
        startend: ''
      },
      {
        estimate: '10',
        result: '',
        taskname: 'Recipe to try',
        project: 'Britta Holt',
        startend: ''
      }
    ]
  })
}
</script>
