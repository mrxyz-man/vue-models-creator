const state = () => ({
  loggedIn: false,
});

const getters = {};
const actions = {
  toggleLoggedIn: ({ commit }) => {
    commit('toggleLoggedIn');
  },
};
const mutations = {
  toggleLoggedIn: (state) => {
    state.loggedIn = !state.loggedIn;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
