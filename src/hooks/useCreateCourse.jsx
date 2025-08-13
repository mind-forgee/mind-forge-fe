import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../lib/axios"

const useCreateCourse = () => {
    const getCourse = async (body) => {
        const response = await axiosInstance.post('/course', body, { withCredentials: true })
        const { data } = response.data
        console.log(JSON.parse(data))
    }


    const { mutate: handleGetCourse, isPending } = useMutation({
        mutationFn: (body) => getCourse(body)
    })

    return {
        handleGetCourse,
        isPending
    }
}

export default useCreateCourse