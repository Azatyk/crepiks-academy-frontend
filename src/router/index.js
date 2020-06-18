import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home/Home";
import cRegister from "@/views/register/cRegister";
import cLogin from "@/views/login/cLogin";
import Courses from "@/views/courses/Courses";
import cEmpty from "@/views/empty/cEmpty";
import cProfile from "@/views/profile/cProfile";
import cChangeProfile from "@/views/change-profile/cChangeProfile";
import cChangePassword from "@/views/change-password/cChangePassword";

// import { mapGetters } from "vuex";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Crepiks Academy - программируй вместе с нами"
    }
  },
  {
    path: "/register",
    name: "register",
    component: cRegister,
    meta: {
      title: "Регистрация"
    }
  },
  {
    path: "/login",
    name: "login",
    component: cLogin,
    meta: {
      title: "Вход"
    }
  },
  {
    path: "/courses",
    name: "courses",
    component: Courses,
    meta: {
      title: "Курсы"
    }
  },
  {
    path: "/empty",
    name: "empty",
    component: cEmpty,
    meta: {
      title: "Crepiks Academy - программируй вместе с нами"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: cProfile,
    meta: {
      title: "Ваш профиль",
      needAuth: true
      // title: mapGetters(['userData']).lastName + " " + mapGetters(['userData']).firstName + " - личный кабинет"
      // title: store.getters.userData.firstName
    }
  },
  {
    path: "/profile/change",
    name: "change",
    component: cChangeProfile,
    meta: {
      title: "Изменение профиля"
    }
  },
  {
    path: "/profile/change-password",
    name: "change-password",
    component: cChangePassword,
    meta: {
      title: "Изменение пароля"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.some(record => record.meta.needAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
