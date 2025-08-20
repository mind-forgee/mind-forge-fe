export default function UserTable({ data }) {


  console.log("UserTable data:", data);
  
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
          {data.map((item, index) => {
            return (
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
