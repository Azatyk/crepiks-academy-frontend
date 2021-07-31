const storeSource = source => {
  localStorage.setItem("source", JSON.stringify(source));
};

export default {
  state: {
    source: JSON.parse(localStorage.getItem("source")) || {}
  },
  mutations: {
    setSource(state, newValue) {
      state.source = newValue;
      storeSource(newValue);
    }
  },
  getters: {
    source: state => state.source
  }
};
