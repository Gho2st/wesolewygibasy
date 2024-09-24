import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import Image from "next/image";

function Gallery({ folder }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/get_images_aws/${folder}`);
        if (!response.ok) {
          throw new Error("Folder not found");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folder]);

  return (
    <div className={classes.container}>
      {loading ? (
        <p className={classes.loading}>Ładowanie zdjęć...</p>
      ) : (
        <div className={classes.imageGrid}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <Image
                key={index}
                src={image.imageUrl}
                width={100}
                height={100}
                alt={`Gallery Image ${index}`}
                className={classes.image}
              />
            ))
          ) : (
            <p className={classes.noImages}>Brak zdjęć w tym folderze.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
