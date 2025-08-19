import { useQuery } from "@tanstack/react-query";
import { getAllTopics } from "../api/topics/topics";

export const useGetAllTopics = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["topics"],
    queryFn: getAllTopics,
    onError: (err) => {
      console.error("❌ Error fetching topics:", err);
    },
  });

  return { data, isLoading, isError, error };
};
