const state = () => ({
  count: 0,
});

const getters = {

};

const actions = {
  setCount: ({ commit }, count) => {
    commit('setCount', count);
  },
};

const mutations = {
  setCount: (state, count) => {
    state.count = count;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
