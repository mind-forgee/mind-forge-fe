/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { UserRound, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLogout } from "../../hooks/useLogout";
import { useGetUser } from "../../hooks/useGetUser";
import { useGetUserCourse } from "../../hooks/useGetUserCourse";

const UserInfo = () => {
  const { data: user } = useGetUser();
  const { data: course } = useGetUserCourse();
  const userCourse = course?.course;
  const { mutate: logout } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative text-light" ref={dropdownRef}>
      {/* Trigger */}
      <div
        className="flex items-center justify-between gap-2 cursor-pointer select-none px-2 py-1 rounded-md hover:bg-secondary/30 transition"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            className="w-8 h-8 rounded-full object-cover"
            alt="user avatar"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserRound className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex flex-col min-w-0">
          <h1 className="truncate">Hi, {user?.full_name || "Undefined"}</h1>
          <p className="text-xs opacity-70 truncate max-w-[120px]">
            {userCourse?.title || "No course assigned"}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-primary rounded-lg shadow-lg z-50"
          >
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-secondary cursor-pointer truncate">
                <a href="/profile">{user?.email || "No email"}</a>
              </li>
              <li className="px-4 py-2 hover:bg-secondary cursor-pointer text-red-500">
                <button onClick={() => logout()} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserInfo;
