import Vue from "vue";
import VueRouter from "vue-router";

import landing from "@/views/landing/crepiks-landing";

import register from "@/views/register/crepiks-register";
import login from "@/views/login/crepiks-login";

import cCourses from "@/views/courses/cCourses";
import cCourse from "@/views/course/cCourse";
import cLesson from "@/views/lesson/cLesson";

import emptyLayout from "@/views/layouts/crepiks-empty-layout";
import appLayout from "@/views/layouts/crepiks-app-layout";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: emptyLayout,
    children: [
      {
        path: "auth/register",
        name: "register",
        component: register,
        meta: {
          title: "Регистрация",
          noAuthOnly: true
        }
      },
      {
        path: "auth/login",
        name: "login",
        component: login,
        meta: {
          title: "Вход",
          noAuthOnly: true
        }
      },

      {
        path: "",
        name: "landing",
        component: landing,
        meta: {
          title: "Crepiks — курсы программирования",
          noAuthOnly: true
        }
      }
    ]
  },
  {
    path: "/app",
    component: appLayout,
    meta: {
      needAuth: true
    },
    children: [
      {
        path: "courses",
        name: "courses",
        component: cCourses,
        meta: {
          title: "Курсы"
        }
      },
      {
        path: "courses/:id",
        name: "course",
        component: cCourse,
        meta: {
          title: "Курс"
        }
      },
      // страницы уроков надо будет вынести в отдельный layout
      {
        path: "courses/:courseId/lessons/:lessonId",
        name: "lesson",
        component: cLesson,
        meta: {
          title: "Урок",
          needAuth: true,
          shouldHaveCourse: true
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
  window.scrollTo(0, 0);
  document.title = to.meta.title;
  if (to.matched.some(record => record.meta.needAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        path: "/auth/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
  if (to.matched.some(record => record.meta.noAuthOnly)) {
    if (store.getters.isLoggedIn) {
      next({
        path: "/app/home",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }

  if (to.name == "lesson") {
    var purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses"));
    var isPurchasedCourse = false;

    purchasedCourses.forEach(course => {
      if (course.id == Number(to.params.courseId)) {
        isPurchasedCourse = true;
      } else {
        isPurchasedCourse = false;
      }
    });
    if (isPurchasedCourse == false) {
      next({
        path: "/app/how-get"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
