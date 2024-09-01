import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import Image from "next/image";

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
            <Image
              key={index}
              src={src}
              width={100}
              height={100}
              alt={`Gallery Image ${index}`}
              className={classes.image}
            />
          ))
        ) : (
          <p className={classes.loading}>Ładowanie zdjęć...</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
