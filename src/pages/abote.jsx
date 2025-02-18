import { motion } from "framer-motion";
import photo from "../images/Backgrounds/melwin2.jpg";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6 md:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            src={photo}
            alt="Photographer"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg border-4 border-indigo-500"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
            variants={textVariant}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 text-lg leading-relaxed"
            variants={textVariant}
          >
            Hi, I'm <span className="font-semibold text-white">Melwin</span>, a passionate <span className="text-indigo-400">Photographer, Photo Editor, and Video Editor</span>.
            Capturing emotions and crafting stunning visuals is my art.
          </motion.p>

          {/* Profession Section */}
          <motion.div className="mt-6" variants={textVariant}>
            <h3 className="text-2xl font-semibold text-indigo-400 ">Specialized In</h3>
            <ul className="mt-2 space-y-2 text-lg">
              <li>Photography</li>
              <li>Photo Editing</li>
              <li>Video Editing</li>
            </ul>
          </motion.div>

          {/* Camera Gear Section */}
          <motion.div className="mt-6" variants={textVariant}>
            <h3 className="text-2xl font-semibold text-indigo-400">Camera & Gear</h3>
            <ul className="mt-2 space-y-2 text-lg">
              <li>
                <span className="font-semibold">Camera Models:</span> Sony A7III, Canon 5D Mark IV
              </li>
              <li>
                <span className="font-semibold">Lenses:</span> 24-70mm f/2.8, 50mm f/1.2, 70-200mm f/2.8
              </li>
            </ul>
          </motion.div>

          {/* Editing Tools Section */}
          <motion.div className="mt-6" variants={textVariant}>
            <h3 className="text-2xl font-semibold text-indigo-400">Editing Tools</h3>
            <ul className="mt-2 space-y-2 text-lg">
              <li>Adobe Photoshop</li>
              <li>Adobe Lightroom</li>
              <li>Adobe Premiere Pro</li>
              <li>DaVinci Resolve</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
