import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { navItems } from "../../data/navItems";
import { useNavigate } from "react-router-dom";
import UserInfo from "../ui/UserInfo";
import { useGetUser } from "../../hooks/useGetUser";
import LoadingSpinner from "../ui/LoadingSpinner";
import ButtonSkeleton from "../ui/ButtonSkeleton";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");
  const { data: user, isLoading } = useGetUser();
  console.log(user);

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

  const renderAuthButton = (isMobile = false) => {
    if (isLoading) return <ButtonSkeleton />;
    if (user) {
      return (
        <div className={`${isMobile ? "w-full flex justify-center py-3" : ""}`}>
          <UserInfo />
        </div>
      );
    }
    return (
      <button
        className={`border border-light rounded-md transition-all duration-300 ${
          isMobile
            ? "w-full px-4 py-2 hover:bg-light hover:text-secondary"
            : "px-9 py-3 hover:bg-light hover:text-secondary"
        }`}
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    );
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full bg-secondary text-light z-50 text-sm shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8 py-3">
            {" "}
            {/* perbaikan padding */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Logo />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 hover:text-accent transition-all duration-300 ${
                      activeSection === item.id ? "text-accent" : ""
                    } group`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform origin-left duration-300 ${
                        activeSection === item.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                ))}
                {renderAuthButton()}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
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
            <div className="space-y-1 px-4 pb-3">
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

              <div className="border-t border-gray-600 mt-2 pt-3">
                {isLoading ? (
                  <span className="text-light">Loading...</span>
                ) : user ? (
                  <div className="py-2">
                    <UserInfo mobile />
                  </div>
                ) : (
                  <button
                    className="w-full px-4 py-2 border border-light rounded-md hover:bg-light hover:text-secondary transition-all duration-300"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
