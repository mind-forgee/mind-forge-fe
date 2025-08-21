import { ArrowLeft, ArrowRight } from "lucide-react";
import SecondaryButton from "../ui/SecondaryButton";


export default function ChapterNavigation({ prevChapter, nextChapter, isPending, onPrev, onNext }) {
  return (
    <div className="mt-4 flex justify-between fixed md:static bottom-0 left-0 w-full bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none">
      {prevChapter && (
        <SecondaryButton children={<ArrowLeft />} onclick={onPrev} />
      )}
      {nextChapter && (
        <SecondaryButton
          children={isPending ? "Loading..." : <ArrowRight />}
          onclick={onNext}
        />
      )}
    </div>
  );
}
