import { request } from "@/requests/login";

export default {
  state: {
    status: "",
    email: ""
  },
  actions: {
    saveEmail({ commit }, email) {
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
            commit("saveSuccess", email);
            resolve(res);
          })
          .catch(err => {
            commit("saveError");
            reject(err);
          });
      });
    }
  },
  mutations: {
    saveLoading(state) {
      state.status = "Loading";
    },
    saveSuccess(state, email) {
      state.status = "Success";
      state.email = email;
    },
    saveError(state) {
      state.status = "Error";
    }
  },
  getters: {
    saveSuccess: state => Boolean(state.email)
  }
};
