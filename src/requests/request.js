import axios from "axios";
import config from "@/config/config";
import store from "@/store";
import router from "@/router";

const request = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { "Content-Type": "application/json" }
});

request.interceptors.request.use(
  config => {
    config.headers["Authorization"] = store.getters.accessToken;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/");
    }
    return Promise.reject(err);
  }
);

const requestWithoutProgress = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

requestWithoutProgress.interceptors.request.use(
  config => {
    config.headers["Authorization"] = store.getters.accessToken;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

requestWithoutProgress.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/auth/login");
    }
    return Promise.reject(err);
  }
);

export { request, requestWithoutProgress };
