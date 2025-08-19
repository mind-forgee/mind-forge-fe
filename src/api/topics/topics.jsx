import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint";

export const getAllTopics = async () => {
    const response = await axiosInstance.get(ENDPOINT.TOPICS);
    return response.data.data;
}