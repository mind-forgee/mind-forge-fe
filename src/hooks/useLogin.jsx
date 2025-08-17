import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { toast } from 'sonner'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../api/auth/login'

const useLogin = () => {
    const navigate = useNavigate()

    const { mutate, isPending, } = useMutation({
        mutationFn: (body) => login(body),
        onError: (err) => {
            console.log(err)
            toast.error("Failed to login")
        },
        onSuccess: (res) => {
            toast.success('Redirecting...')
            console.log(res.data.selected_course_key)
            if (res?.data.selected_course_key) {
                return navigate('/dashboard')
            }
            return navigate('/success')
        }
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (value) => {
            mutate(value)
        }
    })

    return {
        formik,
        isPending,
    }
}

export default useLogin