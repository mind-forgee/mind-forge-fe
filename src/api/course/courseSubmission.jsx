import axiosInstance from "../axios"
import { ENDPOINT } from "../endpoint"

export const courseSubmission = async ({ studyCaseChapterId, body }) => {
  const response = await axiosInstance.post(
    `${ENDPOINT.COURSE}/chapter/${studyCaseChapterId}/study-case`,
    body
  )
  return response.data.data
}