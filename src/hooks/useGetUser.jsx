import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth/user";

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { data, isLoading };
};
