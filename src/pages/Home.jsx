import React from "react";
import { motion } from "framer-motion";
import CorouselIntro from "../components/CorouselIntro";
import HomeGallery from "../components/HomeGallery";
import whatsappLogo from "../images/logo/icons8-whatsapp-480.png";

function Home() {
  return (
    <div className="relative bg-gray-900 text-green-100">
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://wa.me/9542434908?text=Hi%20there!" target="_blank" rel="noopener noreferrer">
          <img src={whatsappLogo} alt="WhatsApp" className="w-16 drop-shadow-lg" />
        </a>
      </motion.div>

      {/* Hero Section */}
      <CorouselIntro />
      <div className="back"></div>
      <div className="flex justify-center h-fit text-center">
        <div className="shadow-2xl w-fit -translate-y-1/2 midle-text-container" >
        <div className="p-4 md:p-6 lg:p-8">
        <span className="block text-lg md:text-2xl lg:text-3xl font-bold ">Your Vision, My Focus</span>
        <span className="block text-sm md:text-3xl, lg:text-xl text-blue-700">2015-Present
    
  </span>
</div>

        </div>
        </div>


      {/* Gallery Section */}
      <HomeGallery />
    </div>
  );
}

export default Home;
