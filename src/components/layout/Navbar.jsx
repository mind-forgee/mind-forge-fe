import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { navItems } from "../../data/navItems";
import { Router, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("hero");
  const handleNavClick = (sectionId) => {


    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full  bg-secondary text-light  z-50 text-sm "
    >
      {({ open }) => (
        <>
          <div className=" px-4 sm:px-16 lg:px-16 py-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <Logo />
              </div>

              <div className="flex justify-between w-full max-w-2xl">
                <div className="hidden md:flex space-x-8 items-center">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3 py-2 transition-all duration-300 hover:text-accent ${activeSection === item.id ? "text-accent" : ""
                        }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform origin-left duration-300 ${activeSection === item.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </button>
                  ))}
                </div>
                <button className="hidden md:block border border-light rounded-md px-9 py-3 hover:bg-light hover:text-secondary transition-all duration-300" onClick={() => navigate('/login')}>
                  Login
                </button>
              </div>

              <div className="md:hidden">
                <Disclosure.Button className="p-2 rounded-md hover:text-accent hover:bg-secondary-dark transition-colors">
                  {open ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden bg-secondary-dark shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${activeSection === item.id
                    ? "text-accent bg-secondary border-b-4 border-accent"
                    : "text-light hover:text-accent hover:bg-secondary"
                    }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* Mobile Login Button */}
              <div className="px-3 py-2" onClick={() => navigate('/login')}>
                <button className="w-full border border-light rounded-md px-4 py-2 hover:bg-light hover:text-secondary transition-all duration-300">
                  Login
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
