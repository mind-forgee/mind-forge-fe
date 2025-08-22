import { Outlet, Navigate } from "react-router-dom";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import DashboardNavbar from "../components/courses/DashboardNavbar";
import { useGetUser } from "../hooks/useGetUser";

export default function DashboardLayout() {
  const { data: user, isLoading } = useGetUser();
  console.log("DashboardLayout user:", user);


  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "user" && user.selected_course === null) {
    return <Navigate to="/select-course" replace />;
  }

  if (user.role === "admin") {
    return <Navigate to="/admin/overview" replace />;
  }

  return (
    <main>
      <DashboardNavbar />
      <Outlet />
    </main>
  );
}
