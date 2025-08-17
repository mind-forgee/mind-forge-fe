import { useQuery } from "@tanstack/react-query";
import { getUserChapters } from "../api/course/chapter";

export const useGetUserChapters = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userChapters"],
    queryFn: getUserChapters,
  });

  return { data, isLoading };
};
