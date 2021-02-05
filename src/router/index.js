import Vue from "vue";
import VueRouter from "vue-router";

import cSoon from "@/views/soon/cSoon";
import cHowPay from "@/views/how-pay/cHowPay";

import landing from "@/views/landing/crepiks-landing";

import register from "@/views/register/crepiks-register";
import login from "@/views/login/crepiks-login";

import cHome from "@/views/home/cHome";

import cCourses from "@/views/courses/cCourses";
import cCourse from "@/views/course/cCourse";
import cLesson from "@/views/lesson/cLesson";

// import cTrainer from "@/views/trainer/cTrainer";

import cEmpty from "@/views/empty/cEmpty";

import emptyLayout from "@/views/layouts/crepiks-empty-layout.vue";
import cAppLayout from "@/views/layouts/cAppLayout";
import cMainNavigationLayout from "@/views/layouts/cMainNavigationLayout";

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
      },

      {
        path: "app",
        component: cAppLayout,
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
                  title: "Главная"
                }
              },
              {
                path: "soon",
                name: "soon",
                component: cSoon,
                meta: {
                  title: "Скоро"
                }
              },
              {
                path: "how-get",
                name: "how-pay",
                component: cHowPay,
                meta: {
                  title: "Как получить курс?"
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
              }
              // {
              //   path: "trainer",
              //   name: "trainer",
              //   component: cTrainer,
              //   meta: {
              //     title: "Тренажёр",
              //   },
              // },
            ]
          },
          {
            path: "courses/:courseId/lessons/:lessonId",
            name: "lesson",
            component: cLesson,
            meta: {
              title: "Урок",
              needAuth: true,
              shouldHaveCourse: true
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
