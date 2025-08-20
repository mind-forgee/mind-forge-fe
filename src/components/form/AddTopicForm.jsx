import useCreateTopic from "../../hooks/useCreateTopic";


const AddTopicForm = () => {

  const { formik, isPending } = useCreateTopic();

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          rows="3"
          className="w-full border rounded-lg p-2 mt-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg w-full"
      >
        {isPending ? "Creating..." : "Create Topic"}
      </button>
    </form>
  );
};

export default AddTopicForm;
