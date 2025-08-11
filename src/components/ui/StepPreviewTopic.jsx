export default function StepPreviewTopic({ topic }) {
  if (!topic) return <p className="text-gray-500">No topic selected</p>;
  return (
    <div className="flex flex-col md:flex-row  items-start">
      <div>
        <p className="text-justify">{topic.description}</p>
      </div>
    </div>
  );
}