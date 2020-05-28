import meta from './meta.json'

export const state = () => ({
  meta,
})

export const getters = {
  activeIndex: state => [state.meta.activeIndex][0],
  selectedSectionId: state => [state.meta.selectedSectionId][0],
  selectedSection: (state, getters, rootState) => {
    return rootState.sections.sections.find(
      section => section.id === getters.selectedSectionId,
    )
  },
}

export const mutations = {
  setActiveIndex(state, index) {
    state.meta.activeIndex = index
  },
  setSelectedSectionId(state, sectionId) {
    state.meta.selectedSection = sectionId
  },
}
