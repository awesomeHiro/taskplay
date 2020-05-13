import { nanoid } from 'nanoid'

import today from './tasks.json'
// import sections from './sections.json'

import { genSortToken } from '~/plugins/genSortToken'

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

// const getSectionById = id => {
//   return sections.find(x => x.id === id) || { name: '' }
// }

// const filterKeyToStore = (task) => {
//   return {
//     id: task.id,
//     name: task.name,
//     repeat: task.repeat,
//     sectionId: task.sectionId,
//     projectId: task.projectId,
//     estimate: task.estimate,
//     start: task.start,
//     end: task.end,
//     date: task.date,
//     created: task.created,
//     updated: task.updated,
//   }
// }
