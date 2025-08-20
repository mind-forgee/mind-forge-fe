import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTopic } from "../api/topics/deleteTopic";
import { toast } from "sonner";

const useDeleteTopics = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (topicId) => deleteTopic(topicId),
    onSuccess: () => {
      toast.success("Topic deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
    onError: (error) => {
      toast.error("Failed to delete topic");
      console.error("Failed to delete topic:", error);
    },
  });
};

export default useDeleteTopics;
