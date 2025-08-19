/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useUser } from "../../hooks/useUser";
import { UserRound, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLogout } from "../../hooks/useLogout";

const UserInfo = () => {
  const { data: user } = useUser();
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
    <div className="hidden md:block relative right-0" ref={dropdownRef}>
      <div
        className="flex items-center justify-between max-w-md w-full gap-2 cursor-pointer select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            className="w-8 h-8 rounded-full"
            alt="user avatar"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserRound className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex flex-col">
          <h1>Hi, {user.full_name}</h1>
          <p className="text-xs opacity-70">Frontend Developer</p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-primary rounded-lg shadow-lg z-50"
          >
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-secondary cursor-pointer">
                {user.email}
              </li>
              <li className="px-4 py-2 hover:bg-secondary cursor-pointer text-red-500">
                <button onClick={() => logout()}>
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
