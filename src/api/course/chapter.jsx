import { getSession } from "../auth/session";


export const getUserChapters = async () => {
  const { chapterUser } = await getSession();
  return chapterUser;
};
