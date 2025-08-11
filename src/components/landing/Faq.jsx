import  { useState } from "react";
import { faqData } from "../../data/faqData"; // Assuming you have a faqData.js file with your FAQ data



const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Got more questions to ask? <br />
            Contact us at{" "}
            <span className="text-gray-700">mindforge@gmail.com</span>
          </p>
        </div>


        <div className="md:col-span-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-green-500 font-semibold">
                    {item.number}
                  </span>
                  <h3 className="font-medium text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? "×" : "+"}
                </span>
              </div>

           
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="pl-10 text-gray-500 text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
