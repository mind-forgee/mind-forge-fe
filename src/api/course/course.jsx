import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const getUserCourse = async () => {
  const response = await axiosInstance.get(ENDPOINT.COURSE);
  return response.data.data;
};
