// hooks/useUser.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";


export const useGetUser = () => {
  const getUserSession = async () => {
    const response = await axiosInstance.get("/auth/session", {
      withCredentials: true,
    });
    return response.data.result;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUserSession,
  })

  return {
    data,
    isLoading
  }


  // return useQuery({
  //   queryKey: ["user"], 
  //   queryFn: getUserSession,
  //   retry: false, 
  //   staleTime: 5 * 60 * 1000, 
  // });
};
