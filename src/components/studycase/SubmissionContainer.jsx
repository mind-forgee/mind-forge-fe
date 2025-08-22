import useCourseSubmission from "../../hooks/useCourseSubmission";

const SubmissionContainer = () => {
  const { formik, isPending } = useCourseSubmission();

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Submission</h3>
      <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="mb-6">
          <form onSubmit={formik.handleSubmit}>
            <label className="block text-sm font-medium mb-2">
              Project URL
            </label>
            <input
              name="proof_url"
              placeholder="https://yourproject.com"
              value={formik.values.proof_url}
              onChange={formik.handleChange}
              className="block w-full border border-gray-300 rounded-md p-3"
            />
          </form>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={formik.handleSubmit}
            className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-md"
          >
            {isPending ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubmissionContainer;
