"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/photoswipe.css";

function normalizujTekst(tekst) {
  return tekst.normalize("NFC");
}

export default function ImagesContainer(props) {
  const galleryRef = useRef(null);
  const [foldery, setFoldery] = useState([]);
  const [zdjecia, setZdjecia] = useState([]);
  const [ladowanieFolderow, setLadowanieFolderow] = useState(true);
  const [ladowanieZdjec, setLadowanieZdjec] = useState(false);
  const [blad, setBlad] = useState(null);
  const [wybranyFolder, setWybranyFolder] = useState(null);
  const [dimensions, setDimensions] = useState({});

  // Pobierz foldery
  useEffect(() => {
    async function pobierzFoldery() {
      try {
        if (!props.folder) throw new Error("Brak wartości props.folder");
        const res = await fetch(`/api/get_folders_aws/${props.folder}`);
        if (!res.ok) throw new Error(`Błąd: ${res.status}`);
        const dane = await res.json();
        setFoldery(dane);
      } catch (e) {
        console.error("Błąd podczas pobierania folderów:", e);
        setBlad(e);
      } finally {
        setLadowanieFolderow(false);
      }
    }

    pobierzFoldery();
  }, [props.folder]);

  // Pobierz zdjęcia z folderu
  const pobierzZdjeciaZFolderu = async (nazwaFolderu) => {
    setLadowanieZdjec(true);
    try {
      const pelnaSciezka = `${props.folder}/${nazwaFolderu}`;
      const res = await fetch(`/api/get_images_aws/${pelnaSciezka}`);
      if (!res.ok) throw new Error(`Błąd: ${res.status}`);
      const dane = await res.json();

      if (!Array.isArray(dane) || !dane.every((item) => item.imageUrl)) {
        throw new Error("Nieprawidłowy format danych");
      }

      const dimensions = await Promise.all(
        dane.map((item) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = item.imageUrl;
            img.onload = () =>
              resolve({
                url: item.imageUrl,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
            img.onerror = () =>
              resolve({ url: item.imageUrl, width: 1200, height: 800 });
          });
        })
      );

      const dimensionMap = {};
      dimensions.forEach((dim) => {
        dimensionMap[dim.url] = {
          width: dim.width,
          height: dim.height,
        };
      });

      setDimensions(dimensionMap);
      setZdjecia(dane);
      setWybranyFolder(nazwaFolderu);

      console.log("Zdjęcia załadowane:", dane);
      console.log("Wymiary:", dimensionMap);
    } catch (e) {
      console.error("Błąd podczas pobierania zdjęć:", e);
      setBlad(e);
    } finally {
      setLadowanieZdjec(false);
    }
  };

  // Inicjalizacja PhotoSwipe
  useEffect(() => {
    if (!wybranyFolder || zdjecia.length === 0) {
      console.log("Brak folderu lub brak zdjęć. Nie inicjalizuję PhotoSwipe.");
      return;
    }

    console.log("Inicjalizuję PhotoSwipe dla folderu:", wybranyFolder);
    console.log("Liczba zdjęć:", zdjecia.length);

    const lightbox = new PhotoSwipeLightbox({
      gallery: "#pswp-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.on("close", () => {
      console.log("Zamknięto PhotoSwipe.");
      setWybranyFolder(null);
      setZdjecia([]);
    });

    lightbox.init();
    galleryRef.current = lightbox;

    // Auto-open first image
    setTimeout(() => {
      const firstLink = document.querySelector("#pswp-gallery a");
      if (firstLink) {
        console.log("Auto-kliknięcie pierwszego zdjęcia:", firstLink.href);
        firstLink.click();
      } else {
        console.log("Nie znaleziono żadnych <a> w #pswp-gallery");
      }
    }, 200);

    return () => {
      console.log("Niszczenie PhotoSwipe");
      lightbox.destroy();
    };
  }, [wybranyFolder, zdjecia]);

  // Debuguj stan komponentu
  useEffect(() => {
    console.log("Aktualny stan komponentu:", {
      wybranyFolder,
      zdjecia,
      dimensions,
    });
  }, [wybranyFolder, zdjecia, dimensions]);

  const klikniecieFolderu = (e, nazwaFolderu) => {
    e.preventDefault();
    pobierzZdjeciaZFolderu(nazwaFolderu);
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Galeria z wydarzeń</h2>
        <p className={classes.galleryText}>
          Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
          maluszki w naszym żłobku <span>Wesołe Wygibasy</span> w Krakowie...
        </p>
      </div>

      <div className={classes.errors}>
        {ladowanieFolderow && <p>Wczytywanie galerii zdjęć...</p>}
        {blad && <p>Błąd: {blad.message}</p>}
        {!ladowanieFolderow && !blad && (
          <div className={classes.gallery}>
            {foldery.map((folder) => (
              <ImageItem
                key={folder.folderName}
                onClick={(e) => klikniecieFolderu(e, folder.folderName)}
                src={folder.imageUrl}
                text={normalizujTekst(folder.folderName)}
                alt={folder.folderName}
              />
            ))}
          </div>
        )}
      </div>

      {ladowanieZdjec && (
        <div className={classes.loadingModal}>
          <p>Wczytywanie zdjęć...</p>
        </div>
      )}

      {wybranyFolder && zdjecia.length > 0 && (
        <div id="pswp-gallery" style={{ display: "none" }}>
          {zdjecia.map((zdjecie, index) => {
            const dim = dimensions[zdjecie.imageUrl] || {
              width: 1200,
              height: 800,
            };
            return (
              <a
                key={index}
                href={zdjecie.imageUrl}
                data-pswp-width={dim.width}
                data-pswp-height={dim.height}
                data-cropped="true"
              >
                <img
                  src={zdjecie.imageUrl}
                  alt={`Zdjęcie ${index + 1}`}
                  width={10}
                  height={10}
                  style={{ display: "none" }}
                />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
