import sections from './sections.json'

export const state = () => ({
  sections,
})

export const getters = {
  byId: state => id => {
    return state.sections.find(x => x.id === id) || { name: '' }
  },
}
