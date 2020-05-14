import { nanoid } from 'nanoid'
import today from './tasks.json'
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
}

export const mutations = {
  add(state, payload) {
    state.today.push(payload)
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
