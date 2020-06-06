import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import mailing from "./modules/mailing";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    mailing
  }
});
