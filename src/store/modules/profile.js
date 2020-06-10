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
            console.log(res.data);
            commit("gettingSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            commit("gettingError");
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
    }
  },
  getters: {
    userData: state => state.userData
  }
};
