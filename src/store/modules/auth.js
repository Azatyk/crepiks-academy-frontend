import { request } from "@/requests/request";
import router from "../../router";

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
            const token = res.data.auth.accessToken;
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
        accessToken: data.auth.accessToken,
        accessTokenExpiredAt: data.auth.accessTokenExpiredAt
      };
      state.user = {
        id: data.user.id,
        email: data.user.email,
        firstName: data.user.firstName,
        lastName: data.user.lastName
      };
    },
    logout(state) {
      state.status = "";
      state.token = {};
      state.user = null;
      window.localStorage.removeItem("token");
      router.push("/");
    }
  },
  getters: {
    isLoggedIn: state => Boolean(state.token.accessToken),
    authStatus: state => state.status,
    accessToken: state => state.token.accessToken,
    userData: state => state.user
  }
};
