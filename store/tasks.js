import { nanoid } from 'nanoid'
import today from './tasks.json'

export const state = () => ({
  today,
})

export const mutations = {
  addTask(state, newTask) {
    state.tasks.today.push(newTask)
  },
}

export const actions = {
  addTask({ context }, input) {
    const id = { id: nanoid() }
    const newTask = { ...defaultTask, ...id, ...input }
    context.commit('addTask', newTask)
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
