import { statusConfig } from "../../config/statusConfig";

export default function UserTable({ data }) {
  return (
    <div className=" overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="text-gray-500">
            <th className="py-3 px-4">User</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Course</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            const status = statusConfig[user.status];
            return (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="py-3 px-4 flex items-center gap-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-gray-700">{user.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{user.date}</td>
                <td className="py-3 px-4 text-gray-600">{user.course}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${status.color}`}
                  >
                    {status.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
