export default {
  state: {
    language: "ru"
  },
  mutations: {
    changeLanguage(state, newlLanguage) {
      state.language = newlLanguage;
    }
  },
  getters: {
    currentLanguage: state => state.language
  }
};
