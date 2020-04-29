export const state = () => ({
  isSignedIn: false
})

export const mutations = {
  setSignInState(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  }
}

export const actions = {
  signIn({ commit }) {
    const isSignedIn = true
    commit('setSignInState', isSignedIn)
  },
  signOut({ commit }) {
    commit('setSignInState', false)
  }
}
