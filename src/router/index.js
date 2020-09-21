import Vue from "vue";
import VueRouter from "vue-router";

import cLanding from "@/views/landing/cLanding";

import cRegister from "@/views/register/cRegister";
import cLogin from "@/views/login/cLogin";

import cHome from "@/views/home/cHome";

import cCourses from "@/views/courses/cCourses";
import cCourse from "@/views/course/cCourse";
import cLesson from "@/views/lesson/cLesson";

import cTrainer from "@/views/trainer/cTrainer";

import cEmpty from "@/views/empty/cEmpty";

import cDefaultLayout from "@/views/layouts/cDefaultLayout";
import cAppLayout from "@/views/layouts/cAppLayout";
import cMainNavigationLayout from "@/views/layouts/cMainNavigationLayout";
import cAuthLayout from "@/views/layouts/cAuthLayout";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: cDefaultLayout,
    children: [
      {
        path: "auth",
        name: "auth",
        component: cAuthLayout,
        children: [
          {
            path: "register",
            name: "register",
            component: cRegister,
            meta: {
              title: "Регистрация",
              noAuthOnly: true
            }
          },
          {
            path: "login",
            name: "login",
            component: cLogin,
            meta: {
              title: "Вход",
              noAuthOnly: true
            }
          }
        ]
      },
      {
        path: "",
        name: "landing",
        component: cLanding,
        meta: {
          title: "Crepiks Academy - программируй вместе с нами",
          noAuthOnly: true
        }
      },
      {
        path: "app",
        component: cAppLayout,
        children: [
          {
            path: "",
            component: cMainNavigationLayout,
            children: [
              {
                path: "home",
                name: "home",
                component: cHome,
                meta: {
                  title: "Главная"
                }
              },
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
              {
                path: "trainer",
                name: "trainer",
                component: cTrainer,
                meta: {
                  title: "Тренажёр"
                }
              }
            ]
          },
          {
            path: "courses/:courseId/lessons/:lessonId",
            name: "lesson",
            component: cLesson,
            meta: {
              title: "Урок",
              needAuth: true
            }
          },
          {
            path: "empty",
            name: "empty",
            component: cEmpty,
            meta: {
              title: "Crepiks Academy - программируй вместе с нами"
            }
          }
        ]
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
});

export default router;
