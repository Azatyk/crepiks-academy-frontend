import { request } from "@/requests/login";

export default {
  state: {
    status: "",
    token: {
      accessToken: localStorage.getItem("token") || ""
    },
    user: {},
    errorMessage: ""
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        request({
          url: "auth/login",
          data: {
            email,
            password
          },
          method: "POST"
        })
          .then(res => {
            const token = res.data.accessToken;
            localStorage.setItem("token", token);
            commit("authSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            commit("authError", err.response.data.message);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit("authLoading");
        let loginData = {
          email: user.email,
          password: user.password
        };
        request({
          url: "auth/register",
          data: user,
          method: "POST"
        })
          .then(res => {
            resolve(res);
            dispatch("login", loginData);
          })
          .catch(err => {
            commit("authError", err.response.data.message);
            reject(err);
          });
      });
    }
  },
  mutations: {
    authLoading(state) {
      state.status = "loading";
    },
    authSuccess(state, data) {
      state.status = "success";
      state.token = {
        accessToken: data.accessToken,
        accessTokenExpiredAt: data.accessTokenExpiredAt
      };
      state.user = {
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName
      };
    },
    authError(state, errMessage) {
      state.status = "error";
      state.errorMessage = errMessage;
      // setTimeout(state => {
      //   state.errorMessage = ""
      // }, 2500)
    },
    logout(state) {
      state.status = "";
      state.token = {};
      state.user = {};
      window.localStorage.removeItem("token");
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token.accessToken),
    authStatus: state => state.status,
    accessToken: state => state.token.accessToken,
    errorRes: state => state.errorMessage
  }
};
