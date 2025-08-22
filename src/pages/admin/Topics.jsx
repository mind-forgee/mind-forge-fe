import { useState } from "react";
import TopicsTable from "../../components/admin/TopicsTable";
import TopicsModal from "../../components/admin/TopicsModal";
import AddTopicForm from "../../components/form/AddTopicForm";
import { useGetAllTopics } from "../../hooks/useGetAllTopics";


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
        <TopicsTable
          columns={["No", "Name", "Description", "Action"]}
          data={topics}
          onAdd={() => setIsOpen(true)}
          loading={isLoading}
        />

      <TopicsModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddTopicForm onSubmit={handleAdd} />
      </TopicsModal>
    </main>
  );
};

export default Topics;