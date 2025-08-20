/* eslint-disable no-unused-vars */
import { useFormik } from "formik"
import { useMutation } from '@tanstack/react-query'
import { toast } from "sonner"

import { createTopic } from "../api/topics/createTopic"

const useCreateTopic = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        onSubmit: (values) => {
            mutate(values)
        },

    })

    const { mutate, isPending } = useMutation({
        mutationFn: (body) => createTopic(body),
        onError: (err) => {
            toast.error("Failed to create topic. Please try again.")
        },
        onSuccess: () => {
            toast.success("Topic created successfully!")
            formik.handleReset()
        },
    })

    return { formik, isPending }
}

export default useCreateTopic