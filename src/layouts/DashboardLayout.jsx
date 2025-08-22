import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/courses/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <main>
      <DashboardNavbar />
      <Outlet />
    </main>
  );
}
