import { useState } from "react";
import { topics } from "../../data/topics";
import TopicsTable from "../../components/admin/TopicsTable";
import TopicsModal from "../../components/admin/TopicsModal";
import AddTopicForm from "../../components/form/AddTopicForm";

const Topics = () => {
  const [data, setData] = useState(topics);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (newTopic) => {
    setData((prev) => [...prev, newTopic]);
    setIsOpen(false);
  };

  return (
    <main className="p-6">
      <TopicsTable
        columns={["ID", "Name", "Image", "Description"]}
        data={data}
        onAdd={() => setIsOpen(true)}
      />

      <TopicsModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddTopicForm onSubmit={handleAdd} />
      </TopicsModal>
    </main>
  );
};

export default Topics;