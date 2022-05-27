const state = {
  sideExpand: false,
}

const mutations = {
  toggleSideExpand(state, status) {
    console.log(status);
    state.sideExpand = status
  },
}

const actions = {
  toggleSideExpand: ({ commit }, status) => commit('toggleSideExpand', status),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
