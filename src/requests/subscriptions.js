import { request } from "./request";

export const setSubscription = async (userId, days) =>
  await request({
    url: `users/${userId}/subscriptions`,
    data: days,
    method: "POST"
  });
