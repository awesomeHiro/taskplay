import { nanoid } from 'nanoid'
import today from './fire-store/tasks.json'
import { getSectionById } from '~/plugins/getSectionById'

export const state = () => ({
  today,
})
export const getters = {
  sorted: state => {
    return [...state.today]
      .sort((a, b) => (a.sortToken < b.sortToken ? -1 : 1))
      .sort(
        (a, b) =>
          (a.end === '') - (b.end === '') ||
          +(a.end > b.end) ||
          -(a.end < b.end),
      )
      .sort((a, b) =>
        getSectionById(a.sectionId).start < getSectionById(b.sectionId).start
          ? -1
          : 1,
      )
  },
  bySectionId: (state, getters) => sectionId => {
    return getters.sorted.filter(x => x.sectionId === sectionId)
  },
  recentDone: (state, getters) => {
    if (getters.sorted.length === 0) return 0
    return [...getters.sorted]
      .filter(x => x.end)
      .sort((a, b) => a.end - b.end)
      .pop()
  },
  sectionLastTasks: (state, getters, rootState) => {
    return rootState.sections.sections.map(section =>
      getters.sorted.reverse().find(task => {
        return task.sectionId === section.id
      }),
    )
  },
}

export const mutations = {
  add(state, payload) {
    state.today.push(payload)
  },
  edit(state, payload) {
    const index = state.today.findIndex(x => x.id === payload.id)
    state.today.splice(index, 1, { ...state.today[index], ...payload })
  },
  setEstFinishAt(state, payload) {
    state.today.find(x => x === payload.task).estFinishAt = payload.estFinishAt
  },
}

export const actions = {
  add({ commit }, payload) {
    const initials = {
      id: nanoid(),
      created: new Date(),
      updated: new Date(),
    }
    const newTask = { ...taskTemplate, ...initials, ...payload }
    commit('add', newTask)
  },
  updateEstFinishAt({ commit }, payload) {
    // console.log(this.getters['tasks/sorted'])
    // console.log(this.getters['tasks/recentDone'])
    let totalEst = 0
    this.getters['tasks/sorted'].forEach(x => {
      if (!x.end) {
        totalEst += parseInt(x.estimate)
        this.commit('tasks/setEstFinishAt', {
          task: x,
          estFinishAt: min2string(
            string2min(this.getters['tasks/recentDone'].end) + totalEst,
          ),
        })
      }
    })
  },
  updateOrder({ commit }, payload) {
    // console.log(payload)
  },
}

const taskTemplate = {
  id: '',
  name: '',
  repeat: '',
  sectionId: '',
  projectId: '',
  estimate: 0,
  start: '',
  end: '',
  date: '',
  created: '',
  updated: '',
  estFinishAt: '',
}

const pad = n => n.toString().padStart(2, 0)
const min2string = min => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`
const string2min = str =>
  parseInt(str.split(':')[0]) * 60 + parseInt(str.split(':')[1])
