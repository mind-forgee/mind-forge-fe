import { CirclePlus, Trash2 } from "lucide-react";
import useDeleteTopics from "../../hooks/useDeleteTopics";

const TopicsTable = ({ columns, data, onAdd, loading }) => {
  const deleteTopicMutation = useDeleteTopics();

  const handleDelete = (id) => {
    deleteTopicMutation.mutate(id);
  };

  if (loading) {
    return <TopicsTableSkeleton columns={columns} />;
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Topics</h2>
        <button
          onClick={onAdd}
          className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg transition"
        >
          <CirclePlus />
        </button>
      </div>
      <table className="bg-white shadow-md rounded-md w-full border-collapse">
        <thead className="text-left">
          <tr>
            {columns.map((col) => (
              <th key={col} className="p-3 text-sm font-semibold text-primary">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((topic, index) => (
            <tr key={topic.id} className="hover:bg-gray-50 transition text-sm">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{topic.name}</td>
              <td className="p-3 max-w-md truncate">{topic.description}</td>
              <td>
                <button
                  onClick={() => handleDelete(topic.id)}
                  disabled={deleteTopicMutation.isLoading}
                  className="text-red-500 border px-2 py-1 border-red-500 hover:bg-red-500 hover:text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleteTopicMutation.isLoading ? "Deleting..." : <Trash2 size={16} />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TopicsTableSkeleton = ({ columns }) => {
  return (
    <div className="rounded-xl overflow-hidden animate-pulse">
      <div className="flex justify-between items-center p-4">
        <div className="h-6 bg-gray-200 rounded w-24"></div>
        <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
      </div>
      <table className="bg-white shadow-md rounded-md w-full border-collapse">
        <thead className="text-left">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="p-3 text-sm font-semibold text-primary">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            <tr key={rowIdx} className="text-sm">
              {columns.map((_, colIdx) => (
                <td key={colIdx} className="p-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicsTable;
