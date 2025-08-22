import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubmission } from "../api/course/updateSubmission";


export const useUpdateSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSubmission,
    onSuccess: () => {
      queryClient.invalidateQueries(["submission"]);
    },
    onError: (err) => {
      console.error("❌ Error updating submission:", err);
    },
  });
};
