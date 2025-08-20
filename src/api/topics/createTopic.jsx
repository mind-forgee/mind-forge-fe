import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const createTopic = async (body) => {
  const response = await axiosInstance.post(`${ENDPOINT.TOPICS}`, body);
  return response.data.data;
};
