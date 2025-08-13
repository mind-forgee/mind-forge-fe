import { useMutation } from "@tanstack/react-query"
import { createCourse } from "../api/course/createCourse"

const useCreateCourse = () => {

    const { mutate: handleGetCourse, isPending } = useMutation({
        mutationFn: (body) => createCourse(body)
    })

    return {
        handleGetCourse,
        isPending
    }
}

export default useCreateCourse