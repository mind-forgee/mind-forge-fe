import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logout } from "../api/auth/logout";



export function useLogout() {

  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success('Logout Success')
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Logout error")
      console.error("Logout failed:", error);
    },
  });
}
