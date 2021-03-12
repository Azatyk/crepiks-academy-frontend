import { request } from "@/requests/request";
import router from "../../router";

export default {
  state: {
    token: {
      accessToken: localStorage.getItem("token") || ""
    },
    userData: JSON.parse(localStorage.getItem("user")) || {}
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
            const token = res.data.auth.accessToken;
            const user = res.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            commit("authSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        request({
          url: "auth/register",
          data: user,
          method: "POST"
        })
          .then(res => {
            const token = res.data.auth.accessToken;
            const user = res.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            commit("authSuccess", res.data);
            resolve(res);
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
        accessToken: data.auth.accessToken,
        accessTokenExpiredAt: data.auth.accessTokenExpiredAt
      };
      state.userData = data.user;
    },
    updateUserData(state) {
      state.userData = JSON.parse(localStorage.getItem("user")) || {};
    },
    logout(state) {
      state.token = {};
      state.userData = null;
      window.localStorage.removeItem("token");
      router.push("/");
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token.accessToken),
    authStatus: state => state.status,
    accessToken: state => state.token.accessToken,
    userData: state => state.userData
  }
};
