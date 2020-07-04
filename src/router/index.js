import Vue from "vue";
import VueRouter from "vue-router";

import cHome from "@/views/home/cHome";

import cRegister from "@/views/register/cRegister";
import cLogin from "@/views/login/cLogin";

import cCourses from "@/views/courses/cCourses";
import cCourse from "@/views/course/cCourse";
import cLesson from "@/views/lesson/cLesson";
import cInteractiveCourse from "@/views/interactive-course/cInteractiveCourse";

import cEmpty from "@/views/empty/cEmpty";

import cProfile from "@/views/profile/cProfile";
import cChangeProfile from "@/views/change-profile/cChangeProfile";
import cChangePassword from "@/views/change-password/cChangePassword";

import cDefaultLayout from "@/views/layouts/cDefaultLayout";
import cLandingLayout from "@/views/layouts/cLandingLayout";
import cAppLayout from "@/views/layouts/cAppLayout";
import cAuthLayout from "@/views/layouts/cAuthLayout";
import cProfileLayout from "@/views/layouts/cProfileLayout";
import cCoursesLayout from "@/views/layouts/cCoursesLayout";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: cDefaultLayout,
    children: [
      {
        path: "",
        component: cLandingLayout,
        children: [
          {
            path: "",
            name: "home",
            component: cHome,
            meta: {
              title: "Crepiks Academy - программируй вместе с нами"
            }
          }
        ]
      },
      {
        path: "app",
        component: cAppLayout,
        name: "app",
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
                  title: "Регистрация"
                }
              },
              {
                path: "login",
                name: "login",
                component: cLogin,
                meta: {
                  title: "Вход"
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
                  title: "Изменение профиля"
                }
              },
              {
                path: "profile/change-password",
                name: "change-password",
                component: cChangePassword,
                meta: {
                  title: "Изменение пароля"
                }
              }
            ]
          },
          {
            path: "",
            component: cCoursesLayout,
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
              {
                path: "courses/:courseId/lessons/:lessonId",
                name: "lesson",
                component: cLesson,
                meta: {
                  title: "Урок"
                }
              }
            ]
          },
          {
            path: "empty",
            name: "empty",
            component: cEmpty,
            meta: {
              title: "Crepiks Academy - программируй вместе с нами"
            }
          },
          {
            path: "interactive-course",
            component: cInteractiveCourse,
            meta: {
              title: "Интерактивный курс"
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
