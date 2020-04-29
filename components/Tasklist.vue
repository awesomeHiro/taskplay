<template>
  <v-list two-line>
    <v-list-item-group v-model="selected" active-class="green--text">
      <template v-for="section in listSections">
        <template v-for="(t, index) in getTasksBySection(section)">
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
                <v-list-item-subtitle v-text="t.project"></v-list-item-subtitle>
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
        </template>
      </template>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    selected: [2],
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
      return this.tasks
        .reduce((total, task) => [...total, task.section], [])
        .filter((x, i, a) => a.indexOf(x) === i)
    }
  },
  methods: {
    getTasksBySection(section) {
      return this.tasks.filter((task) => task.section === section)
    }
  }
}
</script>
