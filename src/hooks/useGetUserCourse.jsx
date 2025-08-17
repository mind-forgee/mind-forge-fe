import { useQuery } from "@tanstack/react-query";
import { getUserCourse } from "../api/course/course";


export const useGetUserCourse = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userCourse"],
    queryFn: getUserCourse,
  });

  return { data, isLoading };
};
