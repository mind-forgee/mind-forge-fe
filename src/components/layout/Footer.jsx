import React from 'react';

const footerItems = [
  {
    title: "Social Media",
    items: ["Instagram", "Twitter", "Linkedin"],
  },
  {
    title: "Program",
    items: ["Merdeka Belajar", "Finterpreneur"],
  },
  {
    title: "Dukungan",
    items: ["Tentang Kami", "Ketentuan", "Kebijakan Privasi"],
  },
];

const Footer = () => {
  return (
    <footer className='bg-secondary text-white p-14 md:flex justify-between'>
      <div>
        <h1 className='font-semibold text-2xl'>MindForge</h1>
        <p className='text-sm font-normal opacity-70'>Build your career with MindForge!</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10 md:mt-0'>
        {footerItems.map((section, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h2 className='font-medium text-lg'>{section.title}</h2>
            <ul className='text-sm font-normal'>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
