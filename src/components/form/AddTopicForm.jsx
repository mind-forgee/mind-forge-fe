import { useState } from "react";

const AddTopicForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const payload = {
      id: Date.now(), 
      ...formData,
    };

    onSubmit(payload);
    setFormData({ name: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Image URL</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg w-full"
      >
        Save
      </button>
    </form>
  );
};

export default AddTopicForm;
