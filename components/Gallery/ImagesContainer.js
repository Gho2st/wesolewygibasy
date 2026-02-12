"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageItem from "./ImageItem";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/photoswipe.css";

function normalizujTekst(tekst) {
  return tekst.normalize("NFC");
}

const Spinner = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-white border-solid" />
);

export default function ImagesContainer(props) {
  const INITIAL_COUNT = 10; // Ile folderów na start
  const [widoczneFoldery, setWidoczneFoldery] = useState(INITIAL_COUNT);

  const galleryRef = useRef(null);
  const [foldery, setFoldery] = useState([]);
  const [zdjecia, setZdjecia] = useState([]);
  const [ladowanieFolderow, setLadowanieFolderow] = useState(true);
  const [ladowanieZdjec, setLadowanieZdjec] = useState(false);
  const [blad, setBlad] = useState(null);
  const [wybranyFolder, setWybranyFolder] = useState(null);
  const [dimensions, setDimensions] = useState({});
  const [kliknietyFolder, setKliknietyFolder] = useState(null);

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

  // Funkcja ładująca więcej elementów
  const pokazWiecej = () => {
    setWidoczneFoldery((prev) => prev + INITIAL_COUNT);
  };

  const pobierzZdjeciaZFolderu = async (nazwaFolderu) => {
    setLadowanieZdjec(true);
    setKliknietyFolder(nazwaFolderu);
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
        }),
      );

      const dimensionMap = {};
      dimensions.forEach((dim) => {
        dimensionMap[dim.url] = { width: dim.width, height: dim.height };
      });

      setDimensions(dimensionMap);
      setZdjecia(dane);
      setWybranyFolder(nazwaFolderu);
    } catch (e) {
      console.error("Błąd podczas pobierania zdjęć:", e);
      setBlad(e);
    } finally {
      setLadowanieZdjec(false);
      setKliknietyFolder(null);
    }
  };

  useEffect(() => {
    if (!wybranyFolder || zdjecia.length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: "#pswp-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.on("close", () => {
      setWybranyFolder(null);
      setZdjecia([]);
    });

    lightbox.init();
    galleryRef.current = lightbox;

    setTimeout(() => {
      const firstLink = document.querySelector("#pswp-gallery a");
      if (firstLink) firstLink.click();
    }, 200);

    return () => {
      lightbox.destroy();
    };
  }, [wybranyFolder, zdjecia]);

  const klikniecieFolderu = (e, nazwaFolderu) => {
    e.preventDefault();
    if (ladowanieZdjec) return;
    pobierzZdjeciaZFolderu(nazwaFolderu);
  };

  return (
    <div className="md:px-[9%] pb-10 pt-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-gray-700">
          Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
          maluszki w naszym żłobku{" "}
          <span className="font-semibold">Wesołe Wygibasy</span> w Krakowie...
        </p>
      </div>

      <div className="text-center">
        {ladowanieFolderow && <p>Wczytywanie galerii zdjęć...</p>}
        {blad && <p className="text-red-500">Błąd: {blad.message}</p>}

        {!ladowanieFolderow && !blad && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4">
              {/* Tutaj robimy slice, żeby pokazać tylko określoną liczbę */}
              {foldery.slice(0, widoczneFoldery).map((folder) => {
                const aktywny = kliknietyFolder === folder.folderName;
                return (
                  <div
                    key={folder.folderName}
                    className={`relative transition-opacity duration-200 ${
                      aktywny ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    <ImageItem
                      onClick={(e) => klikniecieFolderu(e, folder.folderName)}
                      src={folder.imageUrl}
                      text={normalizujTekst(folder.folderName)}
                      alt={folder.folderName}
                    />
                    {aktywny && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Spinner />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Przycisk "Pokaż więcej" */}
            {widoczneFoldery < foldery.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={pokazWiecej}
                  className="px-8 py-3 bg-blue-500 text-white rounded-full hover:cursor-pointer font-semibold hover:bg-blue-600 transition-colors shadow-md active:scale-95"
                >
                  Załaduj więcej albumów
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {ladowanieZdjec && (
        <div className="fixed inset-0 z-[9999] flex flex-col gap-4 items-center justify-center bg-blue-500/50 backdrop-blur-sm text-white text-2xl font-bold text-center">
          <Spinner />
          <p className="animate-pulse">Wczytywanie zdjęć...</p>
        </div>
      )}

      {/* Ukryty kontener dla PhotoSwipe */}
      {wybranyFolder && zdjecia.length > 0 && (
        <div id="pswp-gallery" className="hidden">
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
              >
                <img src={zdjecie.imageUrl} alt="" className="hidden" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
