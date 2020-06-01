import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home/Home";
import Registration from "@/views/registration/Registration";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Registration
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
