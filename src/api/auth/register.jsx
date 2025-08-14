import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const register = async (body) => {
  const { data } = await axiosInstance.post(ENDPOINT.REGISTER, body);
  return data;
};
