<template>
  <v-list two-line dense>
    <v-list-item-group v-model="selected" active-class="blue--text">
      <div v-for="section in sections" :key="section.id">
        <v-row align="center" justify="center" class="caption" no-gutters>
          <v-col><v-divider clsss="ma-2"/></v-col>
          <v-col cols="auto">
            <div class="body-1">
              {{ section.name }} {{ section.start }} - {{ section.desc }}
            </div>
          </v-col>
          <v-col><v-divider clsss="ma-2"/></v-col>
        </v-row>
        <drop-list
          :items="tasksBySection(section)"
          @reorder="changeOrder($event, tasksBySection(section))"
        >
          <template v-slot:item="{ item, reorder }">
            <drag :key="item.id" :data="item">
              <v-list-item
                :disabled="Boolean(item.start)"
                :style="
                  reorder
                    ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                    : {}
                "
                class="pl-0 pr-0"
              >
                <v-row>
                  <v-col cols="1" class="pa-0 ma-0">
                    <div class="drag-bar pa-0 ma-0">
                      <v-icon color="barely">
                        drag_handle
                      </v-icon>
                    </div>
                  </v-col>
                  <v-col cols="1" class="pa-0 ma-0">
                    <div class="drag-bar pa-0 ma-0 subtle--text">
                      <span>
                        {{
                          $store.getters['sections/byId'](item.sectionId).name
                        }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="7" class="text-left pa-0">
                    <v-list-item-content class="pa-0">
                      <v-list-item-title
                        class="subtitle-2 subtle--text"
                        v-text="item.repeat ? item.name + ' ↺' : item.name"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        class="barely--text"
                        v-text="
                          $store.getters['projects/byId'](item.projectId).name
                        "
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle
                        class="barely--text"
                        v-text="item.sortToken.slice(0, 3)"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="1" class="pa-0 ma-0">
                    <div class="barely--text">
                      {{ item.estimate }}
                    </div>
                    <div v-if="item.result" class="subtle--text">
                      {{ item.result }}
                    </div>
                  </v-col>
                  <v-col cols="1" class="pa-0 ma-0">
                    <!-- eslint-disable-next-line prettier/prettier -->
                <div  v-if="item.result" :class="0 >= item.result - item.estimate  ? 'success--text' : 'error--text'">
                      <!-- eslint-disable-next-line prettier/prettier -->
                  {{
                        0 >= item.result - item.estimate
                          ? item.result - item.estimate
                          : '+' + (item.result - item.estimate)
                      }}
                    </div>
                  </v-col>
                  <v-col cols="1" class="ma-0 pa-0">
                    <div v-if="true" class="subtle--text">
                      {{ item.start }}
                    </div>
                    <div v-if="item.end" class="subtle--text">
                      {{ item.end }}
                    </div>
                    <div v-if="!item.end" class="barely--text">
                      {{ item.estFinishAt }}
                    </div>
                  </v-col>
                </v-row>
              </v-list-item>
            </drag>
          </template>
          <template v-slot:inserting-drag-image="{ data }">
            <v-list-item-avatar
              style="transform:translate(-50%, -50%) scale(1.5)"
            >
              <img :src="data.avatar" />
            </v-list-item-avatar>
          </template>
          <template v-slot:reordering-drag-image />
          <template v-slot:feedback="{ data }">
            <v-skeleton-loader
              :key="data.title"
              type="list-item-avatar-three-line"
              style="border-left: 2px solid #1976D2; margin-left: -2px;"
            />
          </template>
        </drop-list>
        <v-row>
          <v-col cols="10">
            <Summary
              v-if="$store.getters['tasks/bySectionId'](section.id).length > 0"
              :tasks="$store.getters['tasks/bySectionId'](section.id)"
            />
          </v-col>
          <v-col cols="2">
            <add-button
              :section="section"
              :sectioned="true"
              :calc-tasks="calcTasks"
            />
          </v-col>
        </v-row>
      </div>
    </v-list-item-group>
  </v-list>
</template>
<script>
import { Drag, DropList } from 'vue-easy-dnd'
import Summary from '~/components/Summary.vue'
import AddButton from '~/components/AddButton.vue'
// import { genSortToken } from '~/plugins/genSortToken'

export default {
  components: {
    Summary,
    AddButton,
    Drag,
    DropList,
  },
  data() {
    return {
      selected: [2],
      sections: this.$store.state.sections.sections,
      projects: this.$store.state.projects.projects,
    }
  },
  computed: {
    tasks() {
      return this.$store.getters['tasks/sorted']
    },
  },
  created() {
    this.calcTasks()
  },
  methods: {
    changeOrder(event, tasks) {
      if (tasks.length < 2) return
      let prev = ''
      let next = ''
      if (event.to < tasks.length - 2) next = tasks[event.to + 1].sortToken
      if (event.to > 1) prev = tasks[event.to - 1].sortToken
      // const payload = {
      //   sortToken: genSortToken({
      //     prev,
      //     next,
      //   }),
      // }
      // console.log(payload.sortToken)

      return [prev, next]
    },
    tasksBySection(section) {
      return this.$store.getters['tasks/bySectionId'](section.id)
    },
    calcTasks() {
      this.$store.dispatch('tasks/updateEstFinishAt')
    },
  },
}
</script>
