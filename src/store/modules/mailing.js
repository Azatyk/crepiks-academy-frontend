import { request } from "@/requests/request";

export default {
  actions: {
    saveEmail(ctx, email) {
      return new Promise((resolve, reject) => {
        request({
          url: "/mailer",
          data: {
            email: email
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
