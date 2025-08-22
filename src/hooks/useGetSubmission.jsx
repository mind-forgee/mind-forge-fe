import { useQuery } from "@tanstack/react-query";
import { getSubmission } from "../api/course/getSubmission";


export const useGetSubmission = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["submission"],
    queryFn: getSubmission,
    onError: (err) => {
      console.error("❌ Error fetching submission:", err);
    },
  });

  return { data, isLoading, isError, error };
};
