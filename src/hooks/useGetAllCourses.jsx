import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCourses } from "../api/course/getAllCourses";

const useGetAllCourses = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
    onError: (err) => {
      console.error("❌ Error fetching courses:", err);
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useGetAllCourses;
