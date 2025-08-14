// Simulasi respons API (prototype) — sesuai screenshot yang dibagi 2 bagian
export const courseApiMock = {
  status: "success",
  message: "Course detail fetched",
  data: {
    id: "course_fe_beg_001",
    slug: "front-end-for-beginners",
    category: "Front End Developer",
    title: "Front End for Beginners",
    shortSubtitle:
      "No experience? No problem! Front-end development is all about learning step-by-step.",
    longDescription:
      "Front End for Beginners is a carefully designed course that welcomes absolute newcomers into the world of web development. It covers HTML, CSS, and JavaScript with hands-on projects and practical guidance.",
    hero: {
      thumbnail: {
        url: "https://via.placeholder.com/900x500.png?text=Course+Hero+Thumb",
        alt: "Course thumbnail / hero video frame",
      },
      promoVideo: {
        provider: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: "7:20",
      },
    },

    meta: {
      skillLevel: "Beginner",
      totalDuration: "7 hours",
      numberOfChapters: 10,
      videoIncluded: true,
      totalLessons: 10,
      completedLessons: 3,
      progressPercentage: 15,
      totalLectures: 4
    },

    tabs: [
      { id: "overview", label: "Overview" },
      { id: "skill-level", label: "Skill Level" },
      { id: "duration", label: "Duration" },
      { id: "chapters", label: "No of Chapters" },
      { id: "video-included", label: "Video Included?" },
    ],

    chapters: [
      {
        id: "ch_01",
        title: "Tool Instalation",
        lecturesCount: 4,
        totalDuration: "51m",
        progress: { completedLectures: 1, percentage: 25 }, // 1/4 => 25%
      },
      {
        id: "ch_02",
        title: "Responsive Design",
        lecturesCount: 1,
        totalDuration: "12m",
        progress: { completedLectures: 0, percentage: 0 },
      },

      {
        id: "ch_03",
        title: "Introduction to JavaScript",
        lecturesCount: 2,
        totalDuration: "1h 14m",
        progress: { completedLectures: 1, percentage: 50 },
      },

      {
        id: "ch_04",
        title: "CSS Flexbox & Grid",
        lecturesCount: 2,
        totalDuration: "1h 30m",
        progress: { completedLectures: 0, percentage: 0 },
      },

      {
        id: "ch_05",
        title: "Forms and User Input",
        lecturesCount: 2,
        totalDuration: "27m",
        progress: { completedLectures: 1, percentage: 50 }, // 1/2 done
      },

      {
        id: "ch_06",
        title: "Light and Dark Mode",
        lecturesCount: 1,
        totalDuration: "29m",
        progress: { completedLectures: 0, percentage: 0 },
      
      },

      {
        id: "ch_07",
        title: "Debugging & Troubleshooting",
        lecturesCount: 2,
        totalDuration: "45m",
        progress: { completedLectures: 0, percentage: 0 },
    
      },

      {
        id: "ch_08",
        title: "Responsive Utilities & Helpers",
        lecturesCount: 2,
        totalDuration: "40m",
        progress: { completedLectures: 0, percentage: 0 },
       
      },

      {
        id: "ch_09",
        title: "Performance & Optimization",
        lecturesCount: 2,
        totalDuration: "30m",
        progress: { completedLectures: 0, percentage: 0 },
       
      },

      {
        id: "ch_10",
        title: "Final: Study Case",
        lecturesCount: 2,
        totalDuration: "Unlimited",
        progress: { completedLectures: 0, percentage: 0 },
        
      },
    ],
  },
};

export default courseApiMock;
