<template>
  <v-row no-gutters>
    <v-col>
      <v-card max-width="500" class="mx-auto">
        <v-card class="mx-auto" max-width="500">
          <v-img
            class="white--text align-end"
            height="100px"
            src="https://source.unsplash.com/random/500x100"
          >
          </v-img>
          <div class="text-center">April</div>
        </v-card>
        <v-divider></v-divider>
        <v-tabs center-active dark show-arrows>
          <v-tab v-for="d in days" :key="d.date">
            <div>{{ d.day }}<br />{{ d.date }}</div>
          </v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="auto">
            <div>∑</div>
          </v-col>
          <v-col v-for="s in summary" :key="s.text">
            <div class="text-center caption">
              {{ s.text }}<br />
              <v-divider></v-divider>{{ s.value }}
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="text-center">{{ createdAtDisplay }}</div>
        <v-divider></v-divider>
        <v-list two-line>
          <v-list-item-group v-model="selected" active-class="green--text">
            <template v-for="(t, index) in tasks">
              <v-list-item :key="t.text + index">
                <template>
                  <v-col cols="auto">
                    <div class="drag-bar">
                      <v-icon>
                        drag_handle
                      </v-icon>
                    </div>
                  </v-col>
                  <v-col cols="auto">
                    <div class="section">
                      {{ t.section }}
                    </div>
                  </v-col>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="t.repeat ? t.taskname + ' ↺' : t.taskname"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="t.project"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="t.start + ' - ' + t.end"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-col cols="auto"> </v-col>
                  <div>
                    <div class="grey--text">
                      {{ t.estimate + ' min' }}
                    </div>
                    <div v-if="t.result" class="white--text">
                      {{ t.result + ' min' }}
                    </div>
                    <div v-if="t.result">
                      <div v-if="t.result - t.estimate > 0" class="pink--text">
                        {{
                          t.result - t.estimate > 0
                            ? '+' + (t.result - t.estimate)
                            : t.result - t.estimate
                        }}
                      </div>
                      <div v-if="t.result - t.estimate <= 0" class="blue--text">
                        {{
                          t.result - t.estimate > 0
                            ? '+' + (t.result - t.estimate)
                            : t.result - t.estimate
                        }}
                      </div>
                    </div>
                  </div>
                </template>
              </v-list-item>
              <v-divider
                v-if="index + 1 < tasks.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-fab-transition>
      <v-btn color="pink" dark fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    {{ listSections }}
  </v-row>
</template>
<style>
.v-tabs-bar.v-tabs-bar--is-mobile .v-tab {
  margin-left: 0px !important;
}
</style>
<script>
export default {
  data: () => ({
    selected: [2],
    summary: [
      { text: 'Estimate', value: '07:34' },
      { text: 'Result', value: '00:41' },
      { text: 'Difference', value: '+6' },
      { text: 'Left', value: '06:59' },
      { text: 'Finish at', value: '18:02' }
    ],
    days: [
      {
        month: '4',
        date: '27',
        day: 'Mon'
      },
      {
        month: '4',
        date: '28',
        day: 'Tue'
      },
      {
        month: '4',
        date: '29',
        day: 'Wed'
      },
      {
        month: '4',
        date: '30',
        day: 'Thu'
      },
      {
        month: '5',
        date: '1',
        day: 'Fri'
      },
      {
        month: '5',
        date: '2',
        day: 'Sat'
      },
      {
        month: '5',
        date: '3',
        day: 'Sun'
      }
    ],
    tasks: [
      {
        estimate: '15',
        repeat: true,
        result: '21',
        section: 'A',
        taskname: 'Eat lunch',
        project: 'Everyday',
        start: '13:02',
        end: '13:23'
      },
      {
        estimate: '20',
        repeat: '↺',
        result: '20',
        section: 'A',
        taskname: 'Clean teeth',
        project: 'Everyday',
        start: '13:23',
        end: '13:41'
      },
      {
        estimate: '30',
        repeat: '↺',
        result: '',
        section: 'B',
        taskname: 'Go office',
        project: 'Transport',
        start: '13:41',
        end: ''
      },
      {
        estimate: '20',
        repeat: '',
        result: '',
        section: 'B',
        taskname: 'Check schedule',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '10',
        repeat: false,
        result: '',
        section: 'C',
        taskname: 'Contact the Product owner',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '15',
        repeat: true,
        result: '21',
        section: 'A',
        taskname: 'Eat lunch',
        project: 'Everyday',
        start: '13:02',
        end: '13:23'
      },
      {
        estimate: '20',
        repeat: '↺',
        result: '20',
        section: 'A',
        taskname: 'Clean teeth',
        project: 'Everyday',
        start: '13:23',
        end: '13:41'
      },
      {
        estimate: '30',
        repeat: '↺',
        result: '',
        section: 'B',
        taskname: 'Go office',
        project: 'Transport',
        start: '13:41',
        end: ''
      },
      {
        estimate: '20',
        repeat: '',
        result: '',
        section: 'B',
        taskname: 'Check schedule',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '10',
        repeat: false,
        result: '',
        section: 'C',
        taskname: 'Contact the Product owner',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '15',
        repeat: true,
        result: '21',
        section: 'A',
        taskname: 'Eat lunch',
        project: 'Everyday',
        start: '13:02',
        end: '13:23'
      },
      {
        estimate: '20',
        repeat: '↺',
        result: '20',
        section: 'A',
        taskname: 'Clean teeth',
        project: 'Everyday',
        start: '13:23',
        end: '13:41'
      },
      {
        estimate: '30',
        repeat: '↺',
        result: '',
        section: 'B',
        taskname: 'Go office',
        project: 'Transport',
        start: '13:41',
        end: ''
      },
      {
        estimate: '20',
        repeat: '',
        result: '',
        section: 'B',
        taskname: 'Check schedule',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '10',
        repeat: false,
        result: '',
        section: 'C',
        taskname: 'Contact the Product owner',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '15',
        repeat: true,
        result: '21',
        section: 'A',
        taskname: 'Eat lunch',
        project: 'Everyday',
        start: '13:02',
        end: '13:23'
      },
      {
        estimate: '20',
        repeat: '↺',
        result: '20',
        section: 'A',
        taskname: 'Clean teeth',
        project: 'Everyday',
        start: '13:23',
        end: '13:41'
      },
      {
        estimate: '30',
        repeat: '↺',
        result: '',
        section: 'B',
        taskname: 'Go office',
        project: 'Transport',
        start: '13:41',
        end: ''
      },
      {
        estimate: '20',
        repeat: '',
        result: '',
        section: 'B',
        taskname: 'Check schedule',
        project: 'Work',
        start: '',
        end: ''
      },
      {
        estimate: '10',
        repeat: false,
        result: '',
        section: 'C',
        taskname: 'Contact the Product owner',
        project: 'Work',
        start: '',
        end: ''
      }
    ]
  }),
  computed: {
    createdAtDisplay() {
      return new Date().toLocaleTimeString()
    },
    listSections() {
      return this.tasks.reduce((total, task) => {
        return [...total, task.section]
      }, [])
    }
  }
}
</script>
