export default {
  state: {
    isSubscriptionSuccessModalOpen: false
  },

  mutations: {
    setSubscriptionSuccessModal(state, newStatus) {
      state.isSubscriptionSuccessModalOpen = newStatus;
    }
  },

  getters: {
    isSubscriptionSuccessModalOpen: state =>
      state.isSubscriptionSuccessModalOpen
  }
};
