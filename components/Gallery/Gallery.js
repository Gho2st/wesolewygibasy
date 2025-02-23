import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.css";
import NextImage from "next/image"; // Zmieniamy nazwę importu, aby uniknąć konfliktu

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

        // Używamy globalnego obiektu Image z przeglądarki
        const imagesWithDimensions = await Promise.all(
          data.map(async (image) => {
            const img = new window.Image(); // Używamy window.Image zamiast Image
            img.src = image.imageUrl;
            await img.decode(); // Czekamy, aż zdjęcie się załaduje
            return {
              ...image,
              width: img.width,
              height: img.height,
            };
          })
        );

        // Sortowanie: najpierw pionowe (height > width), potem poziome
        const sortedImages = imagesWithDimensions.sort((a, b) => {
          const aIsVertical = a.height > a.width;
          const bIsVertical = b.height > b.width;
          return aIsVertical === bIsVertical ? 0 : aIsVertical ? -1 : 1;
        });

        setImages(sortedImages);
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
              <NextImage // Używamy NextImage zamiast Image
                key={index}
                src={image.imageUrl}
                width={100} // Możesz dostosować wymiary
                height={100} // Możesz dostosować wymiary
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