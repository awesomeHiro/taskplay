import meta from './meta.json'

export const state = () => ({
  meta,
})

export const getters = {
  currentCarousel: state => [state.meta.currentCarousel][0],
}

export const mutations = {
  setCurrentCarousel(state, value) {
    state.meta.currentCarousel = value
  },
}
