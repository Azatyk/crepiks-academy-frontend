import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Skeleton from "vue-loading-skeleton";
import vuescroll from "vuescroll/dist/vuescroll-native";
import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);

Vue.config.productionTip = false;

Vue.use(Skeleton);
Vue.use(vuescroll);

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#e74c3c"
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
