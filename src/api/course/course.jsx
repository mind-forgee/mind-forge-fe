import { getSession } from "../auth/session";

export const getUserCourse = async () => {
  const { courseUser } = await getSession();
  return courseUser;
};
