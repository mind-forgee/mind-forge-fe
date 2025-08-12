import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const UserLayout = () => {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default UserLayout