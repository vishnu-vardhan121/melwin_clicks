import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function ProjectDetailPage() {
  const { category, subcategory } = useParams();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoryImages = {
      kids: import.meta.glob("/src/images/projects/kids/*/*.{jpg,png,gif,webp}", { eager: true }),
      wedding: import.meta.glob("/src/images/projects/wedding/*/*.{jpg,png,gif,webp}", { eager: true }),
    };

    const loadedImages = [];

    for (const filePath in categoryImages[category]) {
      if (filePath.includes(`/${subcategory}/`)) {
        loadedImages.push(categoryImages[category][filePath].default);
      }
    }

    setImages(loadedImages);
  }, [category, subcategory]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {subcategory} Gallery
      </motion.h1>

      {/* Back Button Animation */}
      <motion.button
        onClick={() => navigate("/projects")}
        className="mb-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Projects
      </motion.button>

      {images.length > 0 ? (
        <LightGallery elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.a
              key={index}
              href={src}
              className="block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Image ${index + 1} from ${subcategory}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
              />
            </motion.a>
          ))}
        </LightGallery>
      ) : (
        <motion.p
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No images found for {subcategory}.
        </motion.p>
      )}
    </div>
  );
}

export default ProjectDetailPage;
