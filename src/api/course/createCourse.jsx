import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const createCourse = async (body) => {
  console.log("DATA DIAMBIL")
  const response = await axiosInstance.post(ENDPOINT.COURSE, body, { withCredentials: true });
  const { data } = response.data;
  console.log(data)
  return JSON.parse(data)
};