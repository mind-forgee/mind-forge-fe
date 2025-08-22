import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { courseSubmission } from "../api/course/courseSubmission"
import { toast } from "sonner"


const useCourseSubmission = (studyCaseChapterId) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (body) => courseSubmission({ studyCaseChapterId, body }),
    onError: () => {
      toast.error("Failed to submit course. Please try again.")
    },
    onSuccess: () => {
      toast.success("Course submitted successfully!")
    }
  })

  const formik = useFormik({
    initialValues: { proof_url: "" },
    onSubmit: (values) => {
      if (!studyCaseChapterId) {
        toast.error("Study Case Chapter ID not found")
        return
      }
      mutate(values)
    }
  })

  return { formik, isPending }
}

export default useCourseSubmission