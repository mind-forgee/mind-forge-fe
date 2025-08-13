import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export function useLogout() {
  const logout = async () => {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  };

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
