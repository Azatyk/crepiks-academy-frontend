import { request } from "@/requests/request";

export default {
  state: {
    status: "",
    userData: {}
  },
  actions: {
    getUserData({ commit }) {
      return new Promise((resolve, reject) => {
        commit("gettingLoading");
        request({
          url: "/profile",
          method: "GET"
        })
          .then(res => {
            commit("gettingSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            commit("gettingError");
            reject(err);
          });
      });
    },
    changeUserData({ commit }, profile) {
      return new Promise((resolve, reject) => {
        commit("changingLoading");
        request({
          url: "/profile",
          data: profile,
          method: "PATCH"
        })
          .then(res => {
            commit("changingSuccess", profile);
            resolve(res);
          })
          .catch(err => {
            commit("changingError");
            reject(err);
          });
      });
    }
  },
  mutations: {
    gettingLoading(state) {
      state.status = "loading";
    },
    gettingSuccess(state, data) {
      state.status = "success";
      state.userData = data;
    },
    gettingError(state) {
      state.status = "error";
    },
    changingLoading(state) {
      state.status = "loading";
    },
    changingSuccess(state, profile) {
      state.status = "success";
      state.userData = profile;
    },
    changingError(state) {
      state.status = "error";
    }
  },
  getters: {
    userData: state => state.userData
  }
};
