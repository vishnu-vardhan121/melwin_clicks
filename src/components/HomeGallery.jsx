import { useState } from "react";
import { motion } from "framer-motion";
import Gallary from "./Gallary.jsx";

function HomeGallery() {
  const [currentSection, setCurrentSection] = useState("kids");

  const categories = ["wedding", "kids", "nature", "city"];
  const sectionStyleString = "border-b-4 border-teal-400 text-teal-400";

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-gray-900">
        <ul className="w-11/12 sm:w-4/5 flex flex-wrap justify-between font-bold text-lg md:text-xl lg:text-2xl px-4 py-2 bg-gray-800 text-white shadow-lg rounded-lg">
          {categories.map((category) => (
            <motion.li
              key={category}
              className={`cursor-pointer p-2 transition-all duration-300 ${
                currentSection === category ? sectionStyleString : "text-gray-400"
              }`}
              onClick={() => setCurrentSection(category)}
              whileHover={{ scale: 1.1, color: "#00bfa5" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.li>
          ))}
        </ul>
      </div>
      <Gallary category={currentSection} />
    </>
  );
}

export default HomeGallery;
