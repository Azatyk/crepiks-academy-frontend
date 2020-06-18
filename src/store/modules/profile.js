import { request } from "@/requests/request";
import axios from "axios";

export default {
  state: {
    userData: {}
  },
  actions: {
    getUserData({ commit }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/profile",
          method: "GET"
        })
          .then(res => {
            commit("gettingSuccess", res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    changeUserData({ commit }, profile) {
      return new Promise((resolve, reject) => {
        request({
          url: "/profile",
          data: profile,
          method: "PATCH"
        })
          .then(res => {
            commit("changingSuccess", profile);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    changeImage({ getters }, file) {
      // let formData = new FormData();
      // formData.append('profileImage', image)
      // console.log(formData)
      // request({
      //   url: "/profile/change-image",
      //   data: formData,
      //   method: "PATCH",
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      // .catch(err => console.log(err.response))
      return new Promise((resolve, reject) => {
        let image = new FormData();
        image.append("image", file);
        axios
          .patch(
            "https://api-crepiks.herokuapp.com/api/v1/profile/change-image",
            image,
            {
              headers: {
                Authorization: getters.accessToken,
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    },
    changePassword(ctx, { currentPassword, newPassword }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/profile/change-password",
          data: {
            currentPassword,
            newPassword
          },
          method: "PATCH"
        })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  mutations: {
    gettingSuccess(state, data) {
      state.userData = data;
    },
    changingSuccess(state, profile) {
      state.userData = profile;
    }
  },
  getters: {
    userData: state => state.userData
  }
};
