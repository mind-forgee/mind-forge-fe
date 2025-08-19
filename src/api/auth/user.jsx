import { getSession } from "./session";

export const getUser = async () => {
  const { user } = await getSession();
  return user;
};
