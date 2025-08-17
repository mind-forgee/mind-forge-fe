import { getSession } from "./session";

export const getUser = async () => {
  const { existingUser } = await getSession();
  return existingUser;
};
