import UsersChart from "../../components/admin/UserCharts";
import UserTable from "../../components/admin/UserTable";
import { useGetSelectedCourses, useGetUserStats } from "../../hooks/useGetAdminStats";



const Overview = () => {

  const { data: selectedCourses, isLoading: loadingUsers } = useGetSelectedCourses();
  const { data: users } = useGetUserStats();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <UsersChart data={users} />
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Projects Study Case Overview
        </h2>
          <UserTable data={selectedCourses} loading={loadingUsers} />
      </div>
    </div>
  );
};

export default Overview;
