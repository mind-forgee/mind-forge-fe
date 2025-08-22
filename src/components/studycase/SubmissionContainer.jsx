import { CheckCheck, CheckCircle, Clock } from "lucide-react"; 
import useCourseSubmission from "../../hooks/useCourseSubmission";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";

const SubmissionContainer = () => {
  const { data: course } = useGetUserCourse();
  const studyCaseChapter = course?.course?.chapters?.find(
    (chapter) => chapter.is_study_case === true
  );

  const studyCaseChapterId = studyCaseChapter?.id;
  const proofs = studyCaseChapter?.study_case_proofs || [];

  const isApproved = proofs.some((proof) => proof.approved === true);
  const isSubmitted = proofs.length > 0; 

  const submittedProof = proofs[0]?.proof_url; 

  const { formik, isPending } = useCourseSubmission(studyCaseChapterId);

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Submission</h3>
      <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="mb-6">
          <form onSubmit={formik.handleSubmit}>
            <label className="block text-sm font-medium mb-2">Project URL</label>
            <div className="relative">
              <input
                name="proof_url"
                placeholder="https://yourproject.com"
                value={isSubmitted ? submittedProof : formik.values.proof_url}
                onChange={formik.handleChange}
                disabled={isSubmitted} 
                className={`block w-full border rounded-md p-3 ${
                  isApproved
                    ? "border-green-500 bg-green-50"
                    : isSubmitted
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-300"
                }`}
              />

              {isApproved && (
                <CheckCircle className="absolute right-3 top-3 text-green-600" />
              )}
              {!isApproved && isSubmitted && (
                <Clock className="absolute right-3 top-3 text-yellow-600" />
              )}
            </div>
          </form>
        </div>

        <div className="flex justify-between mt-6">
          {!isSubmitted ? (
            <button
              onClick={formik.handleSubmit}
              disabled={isPending}
              className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-md"
            >
              {isPending ? "Sending..." : "Submit"}
            </button>
          ) : isApproved ? (
            <button
              disabled
              className="bg-primary text-white px-6 py-2 rounded-md cursor-not-allowed"
            >
              <CheckCheck className="inline mr-2" />
              Approved 
            </button>
          ) : (
            <button
              disabled
              className="bg-yellow-500 text-white px-6 py-2 rounded-md cursor-wait"
            >
              <Clock className="inline mr-2" />
              Pending Approval 
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubmissionContainer;
