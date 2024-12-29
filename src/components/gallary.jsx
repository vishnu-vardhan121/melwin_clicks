import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

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
    <div className="p-4 gallarydiv">
      {images.length > 0 ? (
        <LightGallery
          elementClassNames="masonry columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-1"
          onBeforeSlide={onBeforeSlide}
        >
          {images.map((value, index) => (
            <a key={index} href={value.src} className="mb-4 block">
              <img
                src={value.src}
                alt={value.caption + " Landscape photography by Melwi Clicks"}
                className="w-full h-auto object-cover rounded-sm shadow-lg hover:scale-105 transition-transform"
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
