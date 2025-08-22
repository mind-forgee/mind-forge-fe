import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ProtectedRoutes = ({ allowedRoles }) => {
  const location = useLocation();
  const { data: user, isLoading } = useGetUser();
  console.log("ProtectedRoutes user:", user);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
