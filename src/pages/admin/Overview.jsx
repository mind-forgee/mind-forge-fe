import React from "react";
import StatsCard from "../../components/admin/StatsCard";
import UsersChart from "../../components/admin/UserCharts";
import { statsData, usersChartData } from "../../data/dashboardMock";
import UserTable from "../../components/admin/UserTable";
import { useGetSelectedCourses, useGetUserStats } from "../../hooks/useGetAdminStats";



const Overview = () => {

  const { data: selectedCourses, isLoading: loadingUsers } = useGetSelectedCourses();
  const { data: users, isLoading: loadingUsersStats } = useGetUserStats();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>

      <UsersChart data={users} />
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Projects Study Case Overview
        </h2>
        {loadingUsers ? (
          <p>Loading...</p>
        ) : (
          <UserTable data={selectedCourses} />
        )}
      </div>
    </div>
  );
};

export default Overview;
