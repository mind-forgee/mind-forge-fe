import React from "react";
import CoursesTable from "../../components/admin/CoursesTable";
import useGetAllCourses from "../../hooks/useGetAllCourses";

const ManageCourses = () => {

  const { data: courses, isLoading } = useGetAllCourses();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CoursesTable
          columns={["ID", "Name", "Difficulty", "Description", "Action"]}
          data={courses}
        />
      )}
    </>
  );
};

export default ManageCourses;

