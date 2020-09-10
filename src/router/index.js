import Vue from "vue";
import VueRouter from "vue-router";

import cLanding from "@/views/landing/cLanding";

import cRegister from "@/views/register/cRegister";
import cLogin from "@/views/login/cLogin";

import cHome from "@/views/home/cHome";

// import cCourses from "@/views/courses/cCourses";
import cCourse from "@/views/course/cCourse";
import cLesson from "@/views/lesson/cLesson";

import cTrainer from "@/views/trainer/cTrainer";

import cEmpty from "@/views/empty/cEmpty";

import cProfile from "@/views/profile/cProfile";
import cChangeProfile from "@/views/change-profile/cChangeProfile";
import cChangePassword from "@/views/change-password/cChangePassword";

import cDefaultLayout from "@/views/layouts/cDefaultLayout";
import cLandingLayout from "@/views/layouts/cLandingLayout";
import cAppLayout from "@/views/layouts/cAppLayout";
import cMainNavigationLayout from "@/views/layouts/cMainNavigationLayout";
import cAuthLayout from "@/views/layouts/cAuthLayout";
import cProfileLayout from "@/views/layouts/cProfileLayout";

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
        component: cLandingLayout,
        children: [
          {
            path: "",
            name: "home",
            component: cLanding,
            meta: {
              title: "Crepiks Academy - программируй вместе с нами",
              noAuthOnly: true
            }
          }
        ]
      },
      {
        path: "app",
        component: cAppLayout,
        name: "app",
        meta: {
          needAuth: true
        },
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
                  title: "Главная",
                  needAuth: true
                }
              },
              // {
              //   path: "courses",
              //   name: "courses",
              //   component: cCourses,
              //   meta: {
              //     title: "Курсы",
              //     needAuth: true
              //   }
              // },
              {
                path: "courses/:id",
                name: "course",
                component: cCourse,
                meta: {
                  title: "Курс",
                  needAuth: true
                }
              },
              {
                path: "trainer",
                name: "trainer",
                component: cTrainer,
                meta: {
                  title: "Тренажёр",
                  needAuth: true
                }
              }
            ]
          },
          {
            path: "",
            component: cProfileLayout,
            children: [
              {
                path: "profile",
                name: "profile",
                component: cProfile,
                meta: {
                  title: "Ваш профиль",
                  needAuth: true
                }
              },
              {
                path: "profile/change",
                name: "change",
                component: cChangeProfile,
                meta: {
                  title: "Изменение профиля",
                  needAuth: true
                }
              },
              {
                path: "profile/change-password",
                name: "change-password",
                component: cChangePassword,
                meta: {
                  title: "Изменение пароля",
                  needAuth: true
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
