import AccentButton from "../ui/AccentButton";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center bg-secondary text-light px-16 py-12 gap-8">

      <div className="flex-1 flex px-4 flex-col items-start justify-center space-y-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          #ForgeYourMindandSkills
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-justify md:text-left">
          Master the skills that power today’s tech industry. From Front-End to
          Back-End, AI to Product Management, MindForge gives you hands-on
          lessons, interactive projects, and guided career paths for beginners,
          pros, and everyone in between. Forge your path. Build something
          extraordinary.
        </p>
        <div className="flex  items-center gap-4">
        <AccentButton onClick={() => alert("Button Clicked!")}>
          Our Courses
        </AccentButton>
        <button className=" px-9 py-3 ">
          Register Now!
        </button>
        </div>
      </div>

    
      <div className="flex-1 flex justify-center">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
