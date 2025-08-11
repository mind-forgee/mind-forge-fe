import React, { useRef, useState } from "react";
import { testimonials } from "../../data/testimonials"; 
import TestimonialSwiper from "../review/TestimonialSwiper";

const Review = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-orange-50 to-orange-100 min-h-[400px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              What do They Say
              <br />
              About MindForge
            </h2>
            <p className="text-lg text-gray-600 mb-2 font-medium">
              MindForge is trusted by 10,000 users!
            </p>
            <p className="text-gray-500 font-medium">Try them!</p>
          </div>
            <TestimonialSwiper
              swiperRef={swiperRef}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              testimonials={testimonials}
            />
        </div>
      </div>
    </section>
  );
};

export default Review;
