import { nanoid } from 'nanoid'

import today from './tasks.json'

export const state = () => ({
  today,
})

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
