import { useState } from "react";
import TopicsTable from "../../components/admin/TopicsTable";
import TopicsModal from "../../components/admin/TopicsModal";
import AddTopicForm from "../../components/form/AddTopicForm";
import { useGetAllTopics } from "../../hooks/useGetAllTopics";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const Topics = () => {
  const { data: topics, isLoading } = useGetAllTopics();
  console.log(topics);
  const [data, setData] = useState(topics);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (newTopic) => {
    setData((prev) => [...prev, newTopic]);
    setIsOpen(false);
  };

  return (
    <main className="p-6">
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <LoadingSpinner  />
        </div>
      ) : (
        <TopicsTable
          columns={["ID", "Name", "Description", "Action"]}
          data={topics}
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