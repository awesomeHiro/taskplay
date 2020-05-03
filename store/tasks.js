import { nanoid } from 'nanoid'
import today from './tasks.json'

export const state = () => ({
  today,
})

export const mutations = {
  addTask(state, payload) {
    state.tasks.today.push(payload)
  },
}

export const actions = {
  addTask({ commit }, payload) {
    const id = {
      id: nanoid(),
      section: '8',
      name: nanoid(),
      project: nanoid(),
    }
    const newTask = { ...defaultTask, ...id, ...payload }
    commit('addTask', newTask)
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
