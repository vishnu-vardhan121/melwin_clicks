import { useState } from "react";
import Gallary from "./gallary.jsx";

function HomeGallery() {
  const [currentSection, setCurrentSection] = useState("kids");
  const handleSection = (section) => {
    setCurrentSection(section);
  };
  const sectionStyleString = "border-b-4 border-indigo-500 text-indigo-500";

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-gray-100">
        <ul className="w-11/12 sm:w-4/5 flex flex-wrap justify-between font-bold text-lg md:text-xl lg:text-2xl category-list px-4 py-2 bg-white shadow-md rounded-lg">
          <li
            className={`cursor-pointer p-2 ${currentSection === "wedding" ? sectionStyleString : "text-gray-700"}`}
            onClick={() => handleSection("wedding")}
          >
            Wedding
          </li>
          <li
            className={`cursor-pointer p-2 ${currentSection === "kids" ? sectionStyleString : "text-gray-700"}`}
            onClick={() => handleSection("kids")}
          >
            Kids
          </li>
          <li
            className={`cursor-pointer p-2 ${currentSection === "nature" ? sectionStyleString : "text-gray-700"}`}
            onClick={() => handleSection("nature")}
          >
            Nature
          </li>
          <li
            className={`cursor-pointer p-2 ${currentSection === "city" ? sectionStyleString : "text-gray-700"}`}
            onClick={() => handleSection("city")}
          >
            City
          </li>
        </ul>
      </div>
      <Gallary category={currentSection} />
    </>
  );
}

export default HomeGallery;