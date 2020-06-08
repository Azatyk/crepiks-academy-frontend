import { request } from "@/requests/login";

export default {
  state: {
    status: "",
    email: "",
    errorText: ""
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
            commit("saveError", err.response.data.message);
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
    saveError(state, text) {
      state.status = "Error";
      state.errorText = text;
      setTimeout(state => {
        state.errorText = "";
      }, 1000);
    }
  },
  getters: {
    saveSuccess: state => Boolean(state.email),
    errorText: state => state.errorText
  }
};
