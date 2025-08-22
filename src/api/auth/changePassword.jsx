import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const changePassword = async (body) => {
    const response = await axiosInstance.patch(`${ENDPOINT.PASSWORD}`, body)
    return response.data.data
}