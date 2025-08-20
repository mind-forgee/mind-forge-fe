import { useQuery } from "@tanstack/react-query";
import { getStatistic } from "../api/topics/statistic";



export const useGetAdminStats = () => {
  return useQuery({
    queryKey: ["admin-stats"],
    queryFn: getStatistic,
  });
};


export const useGetUserStats = () => {
  return useQuery({
    queryKey: ["admin-stats", "users"],
    queryFn: async () => {
      const data = await getStatistic();
      return data.users;
    },
  });
};


export const useGetSelectedCourses = () => {
  return useQuery({
    queryKey: ["admin-stats", "selectedCourses"],
    queryFn: async () => {
      const data = await getStatistic();
      return data.selectedCourses;
    },
  });
};
