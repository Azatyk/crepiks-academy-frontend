import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home/Home";
import Registration from "@/views/registration/Registration";
import Login from "@/views/login/Login";
import Courses from "@/views/courses/Courses";
import cCourse from "@/views/course/cCourse";

import store from "@/store";

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
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/courses",
    name: "courses",
    component: Courses,
    children: [
      {
        path: "markup",
        component: cCourse,
        meta: {
          needAuth: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (!store.getters.isLoggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // всегда так или иначе нужно вызвать next()!
  }
});

export default router;
