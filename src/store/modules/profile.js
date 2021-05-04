import { request } from "@/requests/request";

export default {
  actions: {
    getUserData(ctx, id) {
      return new Promise((resolve, reject) => {
        request({
          url: "/users/" + id,
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
    changeUserData({ commit }, { id, updatedData }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/users/" + id,
          data: updatedData,
          method: "PATCH"
        })
          .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            commit("updateUserData");
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    // changeImage(ctx, file) {
    //   return new Promise((resolve, reject) => {
    //     let image = new FormData();
    //     image.append("image", file);
    //     axios
    //       .patch(
    //         "https://api-crepiks.herokuapp.com/api/v1/profile/change-image",
    //         image,
    //         {
    //           headers: {
    //             Authorization: getters.accessToken,
    //             "Content-Type": "multipart/form-data"
    //           }
    //         }
    //       )
    //       .then(res => {
    //         resolve(res);
    //       })
    //       .catch(err => reject(err));
    //   });
    // },
    changePassword(ctx, { id, passwords }) {
      return new Promise((resolve, reject) => {
        request({
          url: "/users/" + id + "/password",
          data: {
            oldPassword: passwords.oldPassword,
            newPassword: passwords.newPassword
          },
          method: "POST"
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
