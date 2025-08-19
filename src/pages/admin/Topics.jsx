import { useState } from "react";
import TopicsTable from "../../components/admin/TopicsTable";
import TopicsModal from "../../components/admin/TopicsModal";
import AddTopicForm from "../../components/form/AddTopicForm";
import { useGetAllTopics } from "../../hooks/useGetAllTopics";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const Topics = () => {
  const { data: topics, isLoading } = useGetAllTopics();
  const [data, setData] = useState(topics);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (newTopic) => {
    setData((prev) => [...prev, newTopic]);
    setIsOpen(false);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Topics</h1>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <LoadingSpinner  />
        </div>
      ) : (
        <TopicsTable
          columns={["ID", "Name", "Image", "Description"]}
          data={data}
          onAdd={() => setIsOpen(true)}
        />
      )}

      <TopicsModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddTopicForm onSubmit={handleAdd} />
      </TopicsModal>
    </main>
  );
};

export default Topics;