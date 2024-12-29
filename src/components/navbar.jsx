import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo/2R.png";

function Navbar() {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const [navState, setNavState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  scrollY.on("change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen((pre)=>!pre);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSectionClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-100%" },
      }}
      animate={navState ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "backInOut" }}
      className="sticky top-0 z-10 bg-white h-14 flex justify-between items-center px-4 shadow-md"
    >
      {/* Logo */}
      <span className="flex items-center">
        <img src={logo} className="h-10 w-10" alt="Logo" />
        <span className="logo text-xl  ml-2 text-gray-800">MELWIN CLICKS</span>
      </span>
      
      {/* Mobile Menu Button */}
      <div className="block sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu */}
      <ul
        ref={menuRef}
        className={`flex-col sm:flex-row list-none justify-end items-center space-y-4 sm:space-y-0 sm:space-x-5 absolute sm:static right-4 top-16 sm:top-auto sm:right-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none rounded-lg sm:rounded-none ${
          isOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        <li
          className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-all duration-300"
          onClick={() => handleSectionClick("/")}
        >
          Portfolio
        </li>
        <li
          className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-all duration-300"
          onClick={() => handleSectionClick("/projects")}
        >
          Projects
        </li>
        <li
          className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-all duration-300"
          onClick={() => handleSectionClick("/about")}
        >
          About
        </li>
        <li
          className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-all duration-300"
          onClick={() => handleSectionClick("/contact")}
        >
          Contact
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
