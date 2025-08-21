import { Trash2 } from "lucide-react";
import { difficultyCourse } from "../../config/difficultyCourse";
import useDeleteCourse from "../../hooks/useDeleteCourse";

const CoursesTable = ({ columns, data }) => {
    const deleteCourseMutation = useDeleteCourse();
    const handleDelete = (courseId) => {
        deleteCourseMutation.mutate(courseId);
    };
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Courses</h2>
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
          {data.map((course, index) => {
            const difficulty = difficultyCourse[course.difficulty];

            return (
              <tr
                key={course.id}
                className="hover:bg-gray-50 transition text-sm"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{course?.title || "unknown"}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium ${difficulty.color}`}
                  >
                    {difficulty.label}
                  </span>
                </td>
                <td className="p-3 max-w-md truncate">{course.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-500  border px-2 py-1 border-red-500 hover:bg-red-500 hover:text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deleteCourseMutation.isLoading ? "Deleting..." : <Trash2 />}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
