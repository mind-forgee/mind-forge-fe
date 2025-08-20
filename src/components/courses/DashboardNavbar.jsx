import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, User } from "lucide-react";
import UserInfo from "../../components/ui/UserInfo";

const menuItems = [
  { id: "course", label: "Course", path: "/dashboard/course", icon: BookOpen },
  { id: "profile", label: "Profile", path: "/dashboard/profile", icon: User },
];

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-secondary backdrop-blur-md shadow-md top-0 py-2 z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-bold text-light">
            My Dashboard
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition 
                    ${
                      isActive
                        ? "bg-white/20 text-light"
                        : "text-gray-300 hover:bg-white/10 hover:text-light"
                    }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
            <UserInfo />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-secondary/80 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium transition
                      ${
                        isActive
                          ? "bg-white/20 text-light"
                          : "text-gray-300 hover:bg-white/10 hover:text-light"
                      }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <UserInfo />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default DashboardNavbar;
