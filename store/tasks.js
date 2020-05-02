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
  addTask({ commit }) {
    commit('addTask', commit)
  },
}
