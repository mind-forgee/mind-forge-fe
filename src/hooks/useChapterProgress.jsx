export const useChapterProgress = (chapters) => {
  const total = chapters.length;
  const completed = chapters.filter((c) => c.progress.at(0)?.is_done).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, percentage };
};
