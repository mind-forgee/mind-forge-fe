import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const getSession = async () => {
  const response = await axiosInstance.get(ENDPOINT.SESSION);
  return response.data.data;
};
