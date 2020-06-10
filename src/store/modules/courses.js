import { request } from "@/requests/request";

export default {
  state: {
    status: "",
    courses: []
  },
  actions: {
    getCourses({ commit }) {
      return new Promise((resolve, reject) => {
        commit("coursesLoading");
        request({
          url: "/courses",
          method: "GET"
        })
          .then(res => {
            console.log(res);
            resolve(res);
          })
          .catch(err => reject(err));
      });
    }
  },
  mutations: {},
  getters: {}
};
