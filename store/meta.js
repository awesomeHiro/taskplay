import meta from './meta.json'

export const state = () => ({
  meta,
})

export const getters = {
  currentCarousel: state => [state.meta.currentCarousel][0],
  selectedSection: state => [state.meta.selectedSection][0],
}

export const mutations = {
  setCurrentCarousel(state, index) {
    state.meta.currentCarousel = index
  },
  setSelectedSection(state, sectionId) {
    state.meta.selectedSection = sectionId
  },
}
