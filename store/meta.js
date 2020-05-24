import meta from './meta.json'

export const state = () => ({
  meta,
})

export const getters = {
  currentCarousel: state => [state.meta.currentCarousel][0],
  selectedSectionId: state => [state.meta.selectedSectionId][0],
  selectedSection: (state, getters, rootState) => {
    return rootState.sections.sections.find(
      section => section.id === getters.selectedSectionId,
    )
  },
}

export const mutations = {
  setCurrentCarousel(state, index) {
    state.meta.currentCarousel = index
  },
  setSelectedSectionId(state, sectionId) {
    state.meta.selectedSection = sectionId
  },
}
