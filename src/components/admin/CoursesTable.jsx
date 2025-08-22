import { Trash2, MoreVertical, Search, Filter, BookOpen } from "lucide-react";
import { difficultyCourse } from "../../config/difficultyCourse";
import useDeleteCourse from "../../hooks/useDeleteCourse";

const SkeletonRow = ({ columns }) => {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </td>
    </tr>
  );
};

const CoursesTable = ({ columns, data, loading }) => {
  const deleteCourseMutation = useDeleteCourse();
  
  const handleDelete = (courseId) => {
    deleteCourseMutation.mutate(courseId);
  };

  const actualData = loading ? [] : data;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Courses Management</h2>

              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
              {loading ? '...' : actualData.length} courses
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm w-64"
              />
            </div>
            
            {/* Filter Button */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
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
            {loading ? (
              Array.from({ length: 5 }).map((_, idx) => (
                <SkeletonRow key={idx} columns={columns} />
              ))
            ) : actualData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-lg font-medium">No courses found</p>
                    <p className="text-gray-400 text-sm mt-1">Start creating your first course</p>
                  </div>
                </td>
              </tr>
            ) : (
              actualData.map((course, index) => {
                const difficulty = difficultyCourse[course.difficulty];

                return (
                  <tr 
                    key={course.id} 
                    className="hover:bg-emerald-50/50 transition-colors duration-150 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">
                        {course?.title || "Untitled Course"}
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      {difficulty ? (
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${difficulty.color}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-current mr-2"></div>
                          {difficulty.label}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                          Unknown
                        </span>
                      )}
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="max-w-md">
                        <p 
                          className="text-gray-600 text-sm truncate" 
                          title={course.description}
                        >
                          {course.description || "No description available"}
                        </p>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleDelete(course.id)}
                          disabled={deleteCourseMutation.isLoading}
                          className="inline-flex items-center justify-center w-8 h-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed group-hover:opacity-100 opacity-70"
                          title="Delete course"
                        >
                          {deleteCourseMutation.isLoading ? (
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
                );
              })
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer with additional info */}
      {!loading && actualData.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <span>Showing {actualData.length} courses</span>
              <div className="flex items-center gap-4">
                {Object.entries(
                  actualData.reduce((acc, course) => {
                    const diff = difficultyCourse[course.difficulty];
                    if (diff) {
                      acc[diff.label] = (acc[diff.label] || 0) + 1;
                    }
                    return acc;
                  }, {})
                ).map(([level, count]) => (
                  <span key={level} className="text-xs">
                    {level}: <span className="font-medium">{count}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTable;