import { useQuery } from "@tanstack/react-query";
import { session } from "../api/auth/session";


export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: session,
  })

  return {
    data,
    isLoading
  }


};
