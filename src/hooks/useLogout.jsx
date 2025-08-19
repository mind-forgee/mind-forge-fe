import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";

const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export function useLogout() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log("Logout successful");
      navigate("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
}
