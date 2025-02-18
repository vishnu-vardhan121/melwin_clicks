import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectsPage() {
  const [previewImages, setPreviewImages] = useState({ kids: [], wedding: [] });

  useEffect(() => {
    const loadPreviewImages = async () => {
      const categoryImages = {
        kids: import.meta.glob("/src/images/projects/kids/*/*.{jpg,png,gif,webp}", { eager: true }),
        wedding: import.meta.glob("/src/images/projects/wedding/*/*.{jpg,png,gif,webp}", { eager: true }),
      };

      const previewData = { kids: {}, wedding: {} };

      for (const category in categoryImages) {
        for (const filePath in categoryImages[category]) {
          const parts = filePath.split("/");
          const subcategory = parts[parts.length - 2];

          if (!previewData[category][subcategory]) {
            try {
              const imageModule = categoryImages[category][filePath];
              previewData[category][subcategory] = imageModule.default;
            } catch (error) {
              console.error(`Error loading preview for ${subcategory}:`, error);
            }
          }
        }
      }

      setPreviewImages({
        kids: Object.entries(previewData.kids).map(([subcategory, imageUrl]) => ({
          subcategory,
          imageUrl,
        })),
        wedding: Object.entries(previewData.wedding).map(([subcategory, imageUrl]) => ({
          subcategory,
          imageUrl,
        })),
      });
    };

    loadPreviewImages();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Wedding Projects */}
        <motion.div
          className="border p-6 rounded-xl shadow-lg bg-gray-800 hover:shadow-2xl transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Wedding</h2>
          <ul className="space-y-6">
            {previewImages.wedding.map((preview, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/projects/wedding/${preview.subcategory}`} className="block">
                  <img
                    src={preview.imageUrl}
                    alt={`Preview of ${preview.subcategory}`}
                    className="w-full h-40 object-cover rounded-lg mb-2 shadow-md"
                  />
                  <p className="text-center font-medium text-gray-300">{preview.subcategory}</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kids Projects */}
        <motion.div
          className="border p-6 rounded-xl shadow-lg bg-gray-800 hover:shadow-2xl transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Kids</h2>
          <ul className="space-y-6">
            {previewImages.kids.map((preview, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/projects/kids/${preview.subcategory}`} className="block">
                  <img
                    src={preview.imageUrl}
                    alt={`Preview of ${preview.subcategory}`}
                    className="w-full h-40 object-cover rounded-lg mb-2 shadow-md"
                  />
                  <p className="text-center font-medium text-gray-300">{preview.subcategory}</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsPage;
