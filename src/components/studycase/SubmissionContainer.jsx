import React, { useState } from "react";

const SubmissionContainer = ({ onPrevious, onSubmit }) => {
  const [description, setDescription] = useState("");

  const handleUploadVideo = () => alert("Upload clicked");

  return (
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
  );
};

export default SubmissionContainer;
