import { getSession } from "./session";

export const getUser = async () => {
  const { user } = await getSession();
  console.log("get user response", user);
  return user;
};

