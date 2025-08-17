import React from "react";
import StatsCard from "../../components/admin/StatsCard";
import UsersChart from "../../components/admin/UserCharts";
import { statsData, usersChartData } from "../../data/dashboardMock";

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>

      <UsersChart data={usersChartData} />
    </div>
  );
};

export default Overview;
