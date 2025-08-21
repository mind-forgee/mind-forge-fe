import MarkdownRenderer from "../../utils/MarkdownRenderer";


export default function ChapterContent({ chapter, contentRef }) {
  return (
    <div
      ref={contentRef}
      className="md:col-span-2 overflow-y-auto pr-0 md:pr-4 h-[calc(100vh-6rem)]"
    >
      <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>
      {chapter.video_url_embed && (
        <iframe
          src={chapter.video_url_embed}
          frameBorder="0"
          className="w-full aspect-video mb-3"
        ></iframe>
      )}
      <p className="text-gray-600 mb-4 text-justify">{chapter.description}</p>
      {chapter.content && (
        <div className="text-gray-700 text-justify leading-relaxed">
          <MarkdownRenderer content={chapter.content} />
        </div>
      )}
    </div>
  );
}
