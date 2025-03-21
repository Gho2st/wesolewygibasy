"use client";
import React, { useEffect, useState } from "react";
import ImagesItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function normalizujTekst(tekst) {
  return tekst.normalize("NFC");
}

export default function ImagesContainer(props) {
  const [foldery, setFoldery] = useState([]);
  const [zdjecia, setZdjecia] = useState([]);
  const [ladowanieFolderow, setLadowanieFolderow] = useState(true);
  const [ladowanieZdjec, setLadowanieZdjec] = useState(false);
  const [blad, setBlad] = useState(null);
  const [wybranyFolder, setWybranyFolder] = useState(null);

  useEffect(() => {
    async function pobierzFoldery() {
      try {
        if (!props.folder) {
          throw new Error("Brak wartości props.folder");
        }
        const odpowiedz = await fetch(`/api/get_folders_aws/${props.folder}`);
        if (!odpowiedz.ok) {
          throw new Error(`Błąd odpowiedzi sieci: ${odpowiedz.status}`);
        }
        const dane = await odpowiedz.json();
        setFoldery(dane);
      } catch (blad) {
        console.error("Błąd podczas pobierania folderów:", blad);
        setBlad(blad);
      } finally {
        setLadowanieFolderow(false);
      }
    }

    pobierzFoldery();
  }, [props.folder]);

  const pobierzZdjeciaZFolderu = async (nazwaFolderu) => {
    setLadowanieZdjec(true);
    try {
      const pelnaSciezka = `${props.folder}/${nazwaFolderu}`;
      const odpowiedz = await fetch(`/api/get_images_aws/${pelnaSciezka}`);
      if (!odpowiedz.ok) {
        throw new Error(`Folder nie został znaleziony: ${odpowiedz.status}`);
      }
      const dane = await odpowiedz.json();
      console.log("Pobrane zdjęcia dla folderu", nazwaFolderu, ":", dane);

      if (!Array.isArray(dane) || !dane.every((item) => item.imageUrl)) {
        throw new Error(
          "Nieprawidłowy format danych z API. Oczekiwano tablicy obiektów z polem 'imageUrl'."
        );
      }

      setZdjecia(dane);
      setWybranyFolder(nazwaFolderu);
    } catch (blad) {
      console.error("Błąd podczas pobierania zdjęć:", blad);
      setBlad(blad);
    } finally {
      setLadowanieZdjec(false);
    }
  };

  const klikniecieFolderu = (e, nazwaFolderu) => {
    e.preventDefault();
    pobierzZdjeciaZFolderu(nazwaFolderu);
  };

  const zamknijGalerie = () => {
    setWybranyFolder(null);
    setZdjecia([]);
  };

  // Ustawienia dla urządzeń mobilnych
  const mobileSettings = {
    controls: true, // Wyłączone strzałki nawigacyjne
    showCloseIcon: true, // Włączona ikona zamykania "X"
    download: false, // Wyłączony przycisk pobierania
    counter: true, // Licznik zdjęć (opcjonalne, domyślnie true)
    swipeToClose: true, // Zamykanie przez przesunięcie (domyślnie true)
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Galeria z wydarzeń</h2>
        <p className={classes.galleryText}>
          Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
          maluszki w naszym żłobku <span>Wesołe Wygibasy</span> w Krakowie.
          Zapraszamy do obejrzenia tych pięknych chwil, które pokazują miłość,
          radość i rozwój naszych dzieci. Zdjęcia ukazują różnorodne wydarzenia
          i chwile z życia maluszków w naszej placówce.
        </p>
      </div>

      <div className={classes.errors}>
        {ladowanieFolderow && <p>Wczytywanie galerii zdjęć...</p>}
        {blad && <p>Wystąpił błąd przy wczytywaniu galerii: {blad.message}</p>}
        {!ladowanieFolderow && !blad && (
          <div className={classes.gallery}>
            {foldery.map((folder) => (
              <ImagesItem
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

      {wybranyFolder && zdjecia.length > 0 && !ladowanieZdjec && (
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          onInit={(detail) => {
            detail.instance.openGallery(0);
          }}
          onAfterClose={zamknijGalerie}
          thumbnail={true}
          showThumbByDefault={false}
          elementClassNames={classes.lightGallery}
          mobileSettings={mobileSettings} // Dodajemy ustawienia mobilne
        >
          {zdjecia.map((zdjecie, index) => (
            <a
              key={index}
              data-src={zdjecie.imageUrl}
              data-sub-html={`<h4>${normalizujTekst(wybranyFolder)}</h4>`}
              className={classes.galleryItem}
            >
              <img src={zdjecie.imageUrl} alt={`Zdjęcie ${index + 1}`} />
            </a>
          ))}
        </LightGallery>
      )}
    </div>
  );
}
