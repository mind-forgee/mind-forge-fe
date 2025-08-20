import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const getStatistic = async () => {
  const response = await axiosInstance.get(`${ENDPOINT.TOPICS}/admin`);
  return response.data.data; 
};
