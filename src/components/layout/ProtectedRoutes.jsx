import { Outlet, useNavigate } from "react-router-dom"
import { useGetUser } from "../../hooks/useGetUser"

const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const { data: user, isLoading } = useGetUser()

    if (isLoading) {
        return
    }

    if (!user) {
        return navigate('/login')
    }

    return <Outlet />
}

export default ProtectedRoutes