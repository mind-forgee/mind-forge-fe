import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import axiosInstance from '../lib/axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const navigate = useNavigate()



    const handleLoginUser = async (body) => {
        const response = await axiosInstance.post('/auth/login', body, { withCredentials: true })
        return response.data
    }

    const { mutate, isPending } = useMutation({
        mutationFn: (body) => handleLoginUser(body),
        onError: (err) => {
            console.log(err)
            toast.error("Failed to login")
        },
        onSuccess: () => {
            toast.success('Redirecting...')
            navigate('/select-course')
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
        isPending
    }
}

export default useLogin