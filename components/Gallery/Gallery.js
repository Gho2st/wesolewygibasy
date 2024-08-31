import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "react-image-gallery/styles/css/image-gallery.css"; // Import default styles
import classes from "./Gallery.module.css";

function Gallery({ folder }) {
  const [images, setImages] = useState([]);

  console.log("tu gallery comp");
  console.log(folder);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/get_images/${folder}`);
        if (!response.ok) {
          throw new Error("Folder not found");
        }
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [folder]);

  return (
    <div className={classes.container}>
      <div className={classes.imageGrid}>
        {images.length > 0 ? (
          images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index}`}
              className={classes.image}
            />
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
