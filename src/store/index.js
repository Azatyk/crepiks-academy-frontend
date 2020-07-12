import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import mailing from "./modules/mailing";
import profile from "./modules/profile";
import courses from "./modules/courses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    mailing,
    profile,
    courses
  }
});
