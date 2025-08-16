
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Criteria from "./criteria";
import Footer from "../layout/Footer";

const StudyCase = () => {
  const [description, setDescription] = useState("");
  const handleUploadVideo = () => alert("Upload clicked");
  const handlePrevious = () => alert("Previous clicked");
  const handleSubmit = () => alert("Submit clicked");


  return (
    <div className="bg-[#F6F8FE] text-gray-900 min-h-screen flex flex-col">
      <main className="container mx-auto px-6 py-28 flex-1">
        <h2 className="text-3xl font-bold text-center">Study Case</h2>
        <p className="text-xl text-center font-semibold mb-8">Make Your Own Website Portofolio!</p>
        <div className="flex justify-center mb-10">
          <img src="/images/studicase.png" alt="Study Case" className="rounded-md shadow-md w-full max-w-4xl" />
        </div>
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-3">Description</h3>
          <p className="text-gray-700">
            You have been asked to create a personal portfolio website that showcases your skills, projects, and contact information to potential employers or clients. How would you design and build this website to effectively highlight your strengths as a front-end developer?
          </p>
        </section>
        <Criteria />
        <section>
          <h3 className="text-2xl font-bold mb-4">Submission</h3>
          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <img src="/images/insertimages.png" alt="Upload Placeholder" className="border border-gray-300 rounded-md w-full max-w-lg" />
              </div>
              <div>
  <input
    type="file"
    accept="video/mp4,video/webm,video/quicktime"
    id="videoUpload"
    className="hidden"
  />
  <p className="text-sm text-gray-600 mb-2 max-w-xs leading-relaxed">
    Upload your website demo here.{" "}
    <span className="font-semibold">Important guidelines:</span> Maximum 10 minutes, 500 MB.  
    Supported formats: <code>.mp4</code>, <code>.mov</code>, or <code>.webm</code>.
  </p>
  <button
    onClick={handleUploadVideo}
    className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-4 py-2 rounded-md"
  >
    Upload Video
  </button>
</div>

            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Course Descriptions</label>
              <textarea
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-3"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={handlePrevious} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Previous</button>
              <button onClick={handleSubmit} className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-md">Submit</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudyCase;
