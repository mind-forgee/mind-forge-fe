import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const getSubmission = async () => {
  const response = await axiosInstance.get(
    `${ENDPOINT.COURSE}/study-case/proofs`
  )
  return response.data.data
}