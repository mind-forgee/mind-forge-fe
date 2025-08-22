import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const updateProfile = async(body) => {
    const response = await axiosInstance.patch(`${ENDPOINT.PROFILE}/update`, body)
    return response.data.data
}