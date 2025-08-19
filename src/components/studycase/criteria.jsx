import React from "react";

const Criteria = () => {
  const items = [
    {
      title: "Design & Layout",
      text: "The website should have a clean, professional, and responsive design that looks good on both desktop and mobile devices."
    },
    {
      title: "Content",
      text: "Include sections for an introduction/about me, skills, project showcase (with descriptions and links), and contact information."
    },
    {
      title: "Functionality",
      text: "The website should be fully functional with working navigation links and responsive buttons or interactive elements."
    },
    {
      title: "Code Quality",
      text: "Use semantic HTML, clean and well-organized CSS, and efficient JavaScript if needed. Code should be readable and maintainable."
    },
    {
      title: "Performance",
      text: "The website should load quickly and be optimized for a smooth user experience."
    },
    {
      title: "Accessibility",
      text: "Follow basic accessibility practices to ensure the site is usable by people with disabilities (e.g., proper alt text for images, keyboard navigation)."
    },
    {
      title: "Creativity",
      text: "Show originality in design or interaction to make your portfolio stand out."
    }
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-3">Criteria</h3>
      <ol className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="grid grid-cols-[auto,1fr] gap-2 text-gray-700">
            <span className="font-semibold">{index + 1}.</span>
            <div>
              <p className="font-semibold">{item.title}:</p>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Criteria;
