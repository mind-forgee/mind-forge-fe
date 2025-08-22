import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/auth/updateProfile";
import { toast } from "sonner";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries(["profile"]);
    },
    onError: (error) => {
      toast.error("Failed to update profile");
      console.error("❌ Failed to update profile:", error);
    },
  });
};
