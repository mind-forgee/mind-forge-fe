
export default function StepChooseTopic({ topics, selectedTopic, setSelectedTopic }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => setSelectedTopic(topic)}
          className={`p-4  rounded-lg text-left ${
            selectedTopic?.id === topic.id
              ? "bg-green-500 text-dark font-semibold"
              : "bg-white text-dark font-semibold"
          }`}
        >
          {topic.name}
        </button>
      ))}
    </div>
  );
}
