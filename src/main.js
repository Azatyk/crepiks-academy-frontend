import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";

Vue.config.productionTip = false;

Vue.use(Vuesax, {
  colors: {
    primary: "#6ddeca",
    success: "#6ddeca",
    danger: "#f2135d",
    warning: "rgb(255, 130, 0)",
    dark: "#384a62"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
