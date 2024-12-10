import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

function Gallary({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define static glob imports for each category
    const categoryImages = {
      kids: import.meta.glob("../images/kids/kids1/*.jpg"),
      nature: import.meta.glob("../images/nature/*.jpg"),
      wedding: import.meta.glob("../images/wedding/*.jpg"),
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
    <div className="p-4 gallarydiv">
      {images.length > 0 ? (
        <LightGallery
          elementClassNames="custom-wrapper-class grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
          onBeforeSlide={onBeforeSlide}
        >
          {images.map((value, index) => (
            <a key={index} href={value.src} className="block">
              <img
                src={value.src}
                alt={value.caption}
                className="w-full h-auto object-cover rounded-sm shadow-lg transition-transform duration-200 hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      ) : (
        <p className="text-center text-gray-500">Loading images...</p>
      )}
    </div>
  );
}

export default Gallary;
