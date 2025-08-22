import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { courseSubmission } from "../api/course/courseSubmission"
import { toast } from "sonner"


const useCourseSubmission = () => {

    const formik = useFormik({
        initialValues: {
            proof_url: ""
        },
        onSubmit: (values) => {
            mutate(values)
        }
    })

    const { mutate, isPending } = useMutation({
        mutationFn: (body) => courseSubmission(body),
        onError: (err) => {
            toast.error("Failed to submit course. Please try again.")
            console.error("Error:", err)
        },
        onSuccess: () => {
            toast.success("Course submitted successfully!")
        }
    })

  return {
      formik,
      isPending
  }
}

export default useCourseSubmission