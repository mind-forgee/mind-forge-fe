import { Outlet } from "react-router-dom";


const UserLayout = () => {
  return (
    <main className="bg-gray-100">
      <Outlet />
    </main>
  )
}

export default UserLayout