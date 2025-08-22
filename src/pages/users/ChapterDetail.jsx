import { useOutletContext } from "react-router-dom";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import StudyCase from "./StudyCase";
import ChapterContent from "../../components/chapter/ChapterContent";

export default function ChapterDetail() {
  const {
    chapter,
    contentRef,
    onPrev,
    onNext,
    isPending,
  } = useOutletContext();

  if (!chapter) {
    return <div className="p-6">Chapter tidak ditemukan.</div>;
  }

  const content = chapter.content || "";

  if (chapter.is_study_case) {
    return (
      <div className="p-0 md:p-0">
        <StudyCase
          title={chapter.title}
          description={chapter.description}
          content={<MarkdownRenderer content={content} />}
        />
      </div>
    );
  }

  return (
    <ChapterContent
      chapter={chapter}
      contentRef={contentRef}
      onPrev={onPrev}
      onNext={onNext}
      isPending={isPending}
    />
  );
}
