import { request } from "@/requests/request";

export default {
  state: {
    courses: [],
    currentCourse: {
      title: "",
      description: "",
      lessons: []
    },
    currentLesson: {}
  },
  actions: {
    getCourses({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses",
          method: "GET"
        })
          .then(res => {
            commit("successGetCourses", res.data);
            resolve(res);
          })
          .catch(err => reject(err));
      });
    },
    getCourse({ commit }, id) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + id,
          method: "GET"
        })
          .then(res => {
            commit("successGetCourse", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getLessons({ commit }, id) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + id + "/lessons",
          method: "GET"
        })
          .then(res => {
            commit("successGetLessons", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getLesson({ commit }, data) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + data.courseId + "/lessons/" + data.lessonId,
          method: "GET"
        })
          .then(res => {
            commit("successGetLesson", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  mutations: {
    successGetCourses(state, courses) {
      state.courses = courses;
    },
    successGetCourse(state, course) {
      state.currentCourse = course;
    },
    successGetLessons(state, lessons) {
      state.currentCourse.lessons = lessons;
    },
    successGetLesson(state, lesson) {
      state.currentLesson = lesson;
    }
  },
  getters: {
    courses: state => state.courses,
    course: state => state.currentCourse,
    lesson: state => state.currentLesson
  }
};
