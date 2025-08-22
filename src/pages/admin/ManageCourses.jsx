import React from "react";
import CoursesTable from "../../components/admin/CoursesTable";
import useGetAllCourses from "../../hooks/useGetAllCourses";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const ManageCourses = () => {

  const { data: courses, isLoading } = useGetAllCourses();

  return (
    <>
        <CoursesTable
          columns={["No", "Name", "Difficulty", "Description", "Action"]}
          data={courses}
          loading={isLoading}
        />
    </>
  );
};

export default ManageCourses;

