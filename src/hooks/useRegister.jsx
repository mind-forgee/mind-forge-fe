/* eslint-disable no-unused-vars */
import { useFormik } from "formik"
import { useMutation } from '@tanstack/react-query'
import { toast } from "sonner"
import axiosInstance from "../lib/axios"
import { useNavigate } from "react-router-dom"

const useRegister = () => {
    const navigate = useNavigate()
    const handleCreateUser = async (body) => {
        const { data } = await axiosInstance.post('/auth/register', body)
        return data
    }

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            mutate(values)
        },

    })

    const { mutate, isPending } = useMutation({
        mutationFn: (body) => handleCreateUser(body),
        onError: (err) => {
            toast.error("Failed to create account. Please try again.")
        },
        onSuccess: () => {
            toast.success("Account created successfully!")
            formik.handleReset()
            navigate('/login')
        },
    })

    return { formik, isPending }
}

export default useRegister