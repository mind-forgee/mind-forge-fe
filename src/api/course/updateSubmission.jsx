import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const updateSubmission = async (body) => {
    const response = await axiosInstance.patch(`${ENDPOINT.COURSE}/study-case/proofs/status`, body)
    return response.data.data
}