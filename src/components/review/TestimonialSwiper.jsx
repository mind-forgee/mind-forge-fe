import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSwiper = ({
  testimonials,
  swiperRef,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div className="lg:col-span-3">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          modules={[Pagination, Autoplay]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="transition-shadow duration-300">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-3 w-full">
            <img
              src={testimonials[currentSlide]?.avatar}
              alt={testimonials[currentSlide]?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">
                {testimonials[currentSlide]?.name}
              </h4>
              <p className="text-gray-500 text-xs">
                {testimonials[currentSlide]?.role}
              </p>
            </div>
          </div>

          <div className="custom-pagination "></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
