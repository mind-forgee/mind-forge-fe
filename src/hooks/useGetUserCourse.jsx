import { useQuery } from "@tanstack/react-query";
import { getUserCourse } from "../api/course/course";

export const useGetUserCourse = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["course"],
    queryFn: getUserCourse,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
