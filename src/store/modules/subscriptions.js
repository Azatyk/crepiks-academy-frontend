import { request } from "@/requests/request";

export default {
  actions: {
    getSubscriptions(ctx, userId) {
      return new Promise((resolve, reject) => {
        request({
          url: `/users/${userId}/subscriptions`,
          method: "GET"
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    }
  }
};
