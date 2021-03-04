export default {
  state: {
    isMobile: null
  },

  mutations: {
    setIsMobile(state, isMobile) {
      state.isMobile = isMobile;
    }
  },

  getters: {
    isMobile: state => state.isMobile
  }
};
