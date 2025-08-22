import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { changePassword } from "../api/auth/changePassword";

export const useChangePassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Password updated successfully!");
      queryClient.invalidateQueries(["password"]);
    },
    onError: (error) => {
      toast.error("Failed to update password");
      console.error("❌ Failed to update password:", error);
    },
  });
};
