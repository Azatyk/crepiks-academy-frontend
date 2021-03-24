import { request } from "@/requests/request";

export default {
  actions: {
    getCourses() {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses",
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => reject(err));
      });
    },
    getCourse(ctx, id) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + id,
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getLessons(ctx, id) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + id,
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getLesson(ctx, data) {
      return new Promise((resolve, reject) => {
        request({
          url: "/lessons/" + data.lessonId,
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    getOneUserCourses(ctx, userId) {
      return new Promise((resolve, reject) => {
        request({
          url: "/courses/" + "/users/" + userId,
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    getCompletedLessons(ctx, { userId, courseId }) {
      return new Promise((resolve, reject) => {
        request({
          url:
            "/users/" + userId + "/courses/" + courseId + "/completed-lessons",
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    addCompletedLesson(ctx, { userId, lessonId }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/users/" + userId + "/completed-lessons",
          data: {
            lessonId: lessonId
          },
          method: "POST"
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    },

    getCertificate(ctx, userId) {
      return new Promise((resolve, reject) => {
        request({
          url: "/users/" + userId + "/certificates",
          method: "GET"
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    }
  }
};
