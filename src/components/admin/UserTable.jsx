import React from "react";

function UserTableSkeleton({ rows = 3 }) {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="text-gray-500">
            <th className="py-3 px-4">User</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Course</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, i) => (
            <tr key={i} className="border-b last:border-none">
              <td className="py-3 px-4">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function UserTable({ data, loading }) {
  if (loading) return <UserTableSkeleton rows={5} />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="text-gray-500">
            <th className="py-3 px-4">User</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Course</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="py-3 px-4 text-gray-700 font-medium">
                  {item.user?.full_name || "Unknown"}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {item.course?.title || "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-6 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
