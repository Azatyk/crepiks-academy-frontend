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
          url: "/courses/" + id + "/lessons",
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
          url: "/courses/" + data.courseId + "/lessons/" + data.lessonId,
          method: "GET"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
