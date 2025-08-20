import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const deleteTopic = async (topicId) => {
    const response = await axiosInstance.delete(`${ENDPOINT.TOPICS}/${topicId}`)
    return response.data.data;
}