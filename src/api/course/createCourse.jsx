import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const createCourse = async (body) => {
  const response = await axiosInstance.post(ENDPOINT.COURSE, body, { withCredentials: true });
  const { data } = response.data;
  console.log(JSON.parse(data))
  return JSON.parse(data)
};