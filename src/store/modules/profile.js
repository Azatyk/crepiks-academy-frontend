import { request } from "@/requests/request";

export default {
  state: {
    userData: {}
  },
  actions: {
    getUserData({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/profile",
          method: "GET"
        })
          .then(res => {
            commit("gettingSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    changeUserData({ commit }, profile) {
      return new Promise((resolve, reject) => {
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
            reject(err);
          });
      });
    },
    changePassword(ctx, { currentPassword, newPassword }) {
      return new Promise((resolve, reject) => {
        console.log(currentPassword, newPassword);
        request({
          url: "/profile/change-password",
          data: {
            currentPassword,
            newPassword
          },
          method: "PATCH"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  mutations: {
    gettingSuccess(state, data) {
      state.userData = data;
    },
    changingSuccess(state, profile) {
      state.userData = profile;
    }
  },
  getters: {
    userData: state => state.userData
  }
};
