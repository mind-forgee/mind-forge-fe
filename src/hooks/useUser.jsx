// hooks/useUser.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

const getUserSession = async () => {
  const response = await axiosInstance.get("/auth/session", {
    withCredentials: true,
  });
  return response.data.result; 
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"], 
    queryFn: getUserSession,
    retry: false, 
    staleTime: 5 * 60 * 1000, 
  });
};
