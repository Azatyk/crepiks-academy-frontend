import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import { i18n } from "@/plugins/i18n";
import Skeleton from "vue-loading-skeleton";

Vue.use(Skeleton);

Vue.config.productionTip = false;

import "vuesax/dist/vuesax.css";
Vue.use(Vuesax, {
  colors: {
    primary: "#2522a0",
    success: "#2522a0",
    danger: "#f2135d",
    warning: "rgb(255, 130, 0)",
    dark: "#2e2e3d"
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
