import { request } from "@/requests/login";

export default {
  state: {
    status: "",
    email: ""
  },
  actions: {
    saveEmail({ commit }, { email }) {
      return new Promise((resolve, reject) => {
        commit("saveLoading");
        request({
          url: "/mailer",
          data: {
            email: email
          },
          method: "POST"
        })
          .then(res => {
            commit("saveSuccess");
            resolve(res);
          })
          .catch(err => {
            commit("saveError");
            console.log(err.response);
            reject(err);
          });
      });
    }
  },
  mutations: {
    saveLoading(state) {
      state.status = "Loading";
    },
    saveSuccess(state) {
      state.status = "Success";
    },
    saveError(state) {
      state.status = "Error";
    }
  },
  getters: {
    saveSuccess: state => state.status
  }
};
