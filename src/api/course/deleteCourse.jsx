import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const deleteCourse = async (courseId) => {
    const response = await axiosInstance.delete(`${ENDPOINT.COURSE}/${courseId}`)
    return response.data.data
}