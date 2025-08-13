import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const session = async () => {
  const response = await axiosInstance.get(ENDPOINT.SESSION);
  return response.data.data;
};
