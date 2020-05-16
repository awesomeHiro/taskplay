import projects from './fire-store/projects.json'

export const state = () => ({
  projects,
})

export const getters = {
  byId: state => id => {
    return state.projects.find(x => x.id === id) || { name: '' }
  },
}
