import { request } from "./request";

export const setSource = async (userId, source) =>
  await request({
    url: `users/${userId}/source`,
    data: source,
    method: "POST"
  });
