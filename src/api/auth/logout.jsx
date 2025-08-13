import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const logout = async () => {
  const response = await axiosInstance.post(ENDPOINT.LOGOUT);
  return response.data;
};
