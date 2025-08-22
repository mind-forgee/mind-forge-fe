import { CirclePlus, Trash2, MoreVertical, Search, Filter } from "lucide-react";
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-gray-900">Topics Management</h2>
            <span className="bg-blue-100 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              {data.length} items
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search topics..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64"
              />
            </div>
            
            {/* Filter Button */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            
            {/* Add Button */}
            <button
              onClick={onAdd}
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <CirclePlus className="h-4 w-4" />
              <span className="font-medium">Add Topic</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {columns.map((col, index) => (
                <th 
                  key={col} 
                  className={`px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ${
                    index === columns.length - 1 ? 'text-center' : ''
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <CirclePlus className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg font-medium">No topics found</p>
                    <p className="text-gray-400 text-sm mt-1">Get started by adding your first topic</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((topic, index) => (
                <tr 
                  key={topic.id} 
                  className="hover:bg-blue-50/50 transition-colors duration-150 group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary/10 text-blue-700 rounded-full text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{topic.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <p className="text-gray-600 text-sm truncate" title={topic.description}>
                        {topic.description}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleDelete(topic.id)}
                        disabled={deleteTopicMutation.isLoading}
                        className="inline-flex items-center justify-center w-8 h-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed group-hover:opacity-100 opacity-70"
                        title="Delete topic"
                      >
                        {deleteTopicMutation.isLoading ? (
                          <div className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin"></div>
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                      
                      <button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group-hover:opacity-100 opacity-70">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TopicsTableSkeleton = ({ columns }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-7 bg-gray-200 rounded-lg w-48"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 bg-gray-200 rounded-lg w-64"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-28"></div>
          </div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {columns.map((_, idx) => (
                <th key={idx} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                <td className="px-6 py-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-5 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopicsTable;