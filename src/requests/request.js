import axios from "axios";
import config from "@/config/config";
import store from "@/store";
import router from "@/router";
import { message } from "ant-design-vue";

// function handleLoading() {
//   const loading = this.$vs.loading()
//   setTimeout(() => {
//     loading.close()
//   }, 3000)
// }

const key = "request";

const request = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { "Content-Type": "application/json" }
});

request.interceptors.request.use(
  config => {
    config.headers["Authorization"] = store.getters.accessToken;
    // handleLoading();
    message.loading({ content: "Пожалуйста подождите...", key });
    return config;
  },
  err => {
    message.error({ content: "Что-то пошло не так", key });
    // handleLoading();
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  res => {
    message.success({ content: "Данные загружены", key });
    return res;
  },
  err => {
    if (err.response.status === 401) {
      store.commit("logout");
      router.push("/");
    }
    message.error({ content: err.response.data.message, key });
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
