import { nanoid } from 'nanoid'
import today from './tasks.json'

export const state = () => ({
  today,
})

export const mutations = {
  add(state, payload) {
    state.today.push(payload)
  },
}

export const actions = {
  add({ commit }, payload) {
    const id = {
      id: nanoid(),
      section: '3',
      name: nanoid(),
      project: nanoid(),
    }
    const newTask = { ...defaultTask, ...id, ...payload }
    commit('add', newTask)
  },
}

const defaultTask = {
  id: '',
  done: 'FALSE',
  repeat: '',
  estimate: 0,
  result: 0,
  section: '',
  name: '',
  project: '',
  start: '',
  end: '',
  date: '',
}
