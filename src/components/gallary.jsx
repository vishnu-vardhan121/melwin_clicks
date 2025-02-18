import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import { motion } from "framer-motion";

function Gallary({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const categoryImages = {
      kids: import.meta.glob("../images/kids/*.{jpg,png,gif,webp}"),
      nature: import.meta.glob("../images/nature/*.{jpg,png,gif,webp}"),
      wedding: import.meta.glob("../images/wedding/*.{jpg,png,gif,webp}"),
      city: import.meta.glob("../images/city/*.{jpg,png,gif,webp}"),
    };

    const loadImages = async () => {
      const modules = categoryImages[category];
      const loadedImages = [];

      for (const path in modules) {
        try {
          const image = await modules[path]();
          loadedImages.push({
            src: image.default,
            caption: `Image from ${category}`,
          });
        } catch (error) {
          console.error(`Error loading image from ${path}:`, error);
        }
      }

      setImages(loadedImages);
    };

    if (categoryImages[category]) {
      loadImages();
    } else {
      console.error(`No images found for category: ${category}`);
    }
  }, [category]);

  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  return (
    <div className="p-4 gallarydiv min-h-screen">
      {images.length > 0 ? (
        <LightGallery
          elementClassNames="masonry columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-2"
          onBeforeSlide={onBeforeSlide}
        >
          {images.map((value, index) => (
            <motion.a
              key={index}
              href={value.src}
              className="mb-4 block overflow-hidden rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={value.src}
                alt={value.caption + " Landscape photography by Melwi Clicks"}
                className="w-full h-auto object-cover rounded-lg transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all"></div>
            </motion.a>
          ))}
        </LightGallery>
      ) : (
        <p className="text-center text-white animate-pulse">Loading images...</p>
      )}
    </div>
  );
}

export default Gallary;
