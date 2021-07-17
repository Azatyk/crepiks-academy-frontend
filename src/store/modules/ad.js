const storeIsAdSidebarLinkActive = isAdSidebarLinkActive => {
  localStorage.setItem(
    "isAdSidebarLinkActive",
    JSON.stringify(isAdSidebarLinkActive)
  );
};

const storeIsAdNotificationActive = isAdNotificationActive => {
  localStorage.setItem(
    "isAdNotificationActive",
    JSON.stringify(isAdNotificationActive)
  );
};

export default {
  state: {
    isAdSidebarLinkActive:
      JSON.parse(localStorage.getItem("isAdSidebarLinkActive")) || false,
    isAdNotificationActive:
      JSON.parse(localStorage.getItem("isAdNotificationActive")) || false,
    isAdBannerActive: false
  },
  mutations: {
    setAdSidebarLink(state, newStatus) {
      state.isAdSidebarLinkActive = newStatus;
      storeIsAdSidebarLinkActive(newStatus);
    },
    setAdNotification(state, newStatus) {
      state.isAdNotificationActive = newStatus;
      storeIsAdNotificationActive(newStatus);
    },
    setAdBanner(state, newStatus) {
      state.isAdBannerActive = newStatus;
    }
  },
  getters: {
    isAdSidebarLinkActive: state => state.isAdSidebarLinkActive,
    isAdNotificationActive: state => state.isAdNotificationActive,
    isAdBannerActive: state => state.isAdBannerActive
  }
};
