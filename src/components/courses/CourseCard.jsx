import { Clock, Star, Users, Video } from "lucide-react";


const CourseCard = ({ course }) => {
  return (
    <div
      key={course.id}
      className="w-full overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute -bottom-4 right-2 bg-dark text-light px-3 py-1 rounded-full flex items-center text-sm font-semibold">
          <Star className="w-4 h-4 mr-1 fill-accent text-accent" />{" "}
          {course.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
        <p className="text-dark opacity-70 text-sm mb-4">
          {course.description}
        </p>
        <div className="flex items-center text-dark text-sm gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {course.hours}
          </span>
          <span className="flex items-center gap-1">
            <Video className="w-4 h-4" /> {course.videos} Video
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {course.users} Users
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
