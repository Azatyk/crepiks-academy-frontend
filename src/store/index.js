import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import mailing from "./modules/mailing";
import profile from "./modules/profile";
import courses from "./modules/courses";
import clientWidth from "./modules/clientWidth";
import i18n from "./modules/i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    mailing,
    profile,
    courses,
    clientWidth,
    i18n
  }
});
