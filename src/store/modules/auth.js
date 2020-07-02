import { request } from "@/requests/request";

export default {
  state: {
    token: {
      accessToken: localStorage.getItem("token") || ""
    },
    user: {}
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
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
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ dispatch }, user) {
      return new Promise((resolve, reject) => {
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
            reject(err);
          });
      });
    }
  },
  mutations: {
    authSuccess(state, data) {
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
    logout(state) {
      state.status = "";
      state.token = {};
      state.user = null;
      window.localStorage.removeItem("token");
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token.accessToken),
    authStatus: state => state.status,
    accessToken: state => state.token.accessToken
  }
};
