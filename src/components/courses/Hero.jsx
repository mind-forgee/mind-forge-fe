import courseApiMock from "../../data/courseApiMock";
import AccentButton from "../ui/AccentButton";
import UserHeader from "../users/UserHeader";

const Hero = ({ course }) => {


  return (
  <div>
    <UserHeader subTitle={course?.course_key} title={course?.course_name} />
    <div className="bg-secondary py-12 rounded-md">
      <div className="w-full px-10 gap-y-7 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-light">
          <p className="text-sm mb-2">{course?.difficulty}</p>
          <h1 className="text-3xl font-bold mb-4">
            {course?.course_name}
          </h1>
          <p className="text-justify text-gray-200 mb-10 leading-relaxed">
            {course?.description}
          </p>
          <AccentButton children={"Start Learning"}/>
        </div>

        {/* <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-64 md:h-80 rounded-lg"
            src={course?.hero.promoVideo.embedUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

      </div>
    </div>
  </div>
  );
};

export default Hero;
