import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Skeleton from "vue-loading-skeleton";
Vue.use(Skeleton);

import vuescroll from "vuescroll/dist/vuescroll-native";
Vue.use(vuescroll);

import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#e74c3c"
  }
};

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
