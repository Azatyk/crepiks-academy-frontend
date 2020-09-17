import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import VuePrlx from "vue-prlx";
import { i18n } from "@/plugins/i18n";

Vue.config.productionTip = false;

Vue.use(VuePrlx);

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
