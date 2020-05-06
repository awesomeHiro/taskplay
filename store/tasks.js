import { nanoid } from 'nanoid'
import today from './tasks.json'
import { genSortToken } from '~/plugins/genSortToken'

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
    const initials = {
      id: nanoid(),
      sortToken: genSortToken(),
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
  section: '',
  project: '',
  estimate: 0,
  start: '',
  end: '',
  date: '',
  created: '',
  updated: '',
}
