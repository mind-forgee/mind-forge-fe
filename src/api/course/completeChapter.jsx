import axiosInstance from "../axios";
import { ENDPOINT } from "../endpoint";

export const completeChapter = async (chapterId) => {
    const response = await axiosInstance.patch(`${ENDPOINT.COURSE}/${chapterId}`)
    return response.data
}
