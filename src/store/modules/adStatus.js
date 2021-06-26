export default {
  state: {
    isAdActive: false
  },
  mutations: {
    setAdStatus(state, newStatus) {
      state.isAdActive = newStatus;
    }
  },
  getters: {
    isAdActive: state => state.isAdActive
  }
};
