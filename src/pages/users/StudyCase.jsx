import SubmissionContainer from "../../components/studycase/SubmissionContainer";

const StudyCase = ({ title, description, content}) => {
  return (
    <div className="bg-[#F6F8FE] text-gray-900 min-h-screen flex flex-col">
      <main className="container mx-auto px-6 flex-1">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
        <div className="flex justify-center mb-10">
          <img
            src="/images/studicase.png"
            alt="Study Case"
            className="rounded-md shadow-md w-full max-w-4xl"
          />
        </div>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3">Description</h3>
          <p className="text-gray-700">
           {description}
          </p>
        </section>
        <section className="mb-8">
          <p className="text-gray-700">
           {content}
          </p>
        </section>
        <SubmissionContainer />
      </main>
      
    </div>
  );
};

export default StudyCase;
