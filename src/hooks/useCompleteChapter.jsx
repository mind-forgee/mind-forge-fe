import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeChapter } from "../api/course/completeChapter";
import { toast } from "sonner";

const useCompleteChapter = () => {
  const queryClient = useQueryClient()

  const { mutate: handleCompleteChapter, isPending } = useMutation({
    mutationFn: (chapterId) => completeChapter(chapterId),

    onError: (err) => {
      console.error(err);
      toast.error("Failed to complete chapter");
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['course'] })
      toast.success("Chapter marked as completed!");
    },
  });

  return {
    handleCompleteChapter,
    isPending,
  };
};

export default useCompleteChapter;