"use client";
import { useState, useEffect } from "react";
import Button from "@/components/UI/Button";
import Image from "next/image";

export default function PromoModal() {
  // Stan do kontrolowania widoczności modala
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Otwieranie modala po załadowaniu strony z kontrolą sessionStorage
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("promoModalShown");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem("promoModalShown", "true");
      }, 2000); // Modal pojawia się po 2 sekundach
      return () => clearTimeout(timer);
    }
  }, []);

  // Funkcja do zamykania modala
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Zamykanie modala po kliknięciu poza banerem
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Obsługa klawisza Esc do zamykania modala
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-300/65 flex items-center justify-center z-50 p-4 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="relative bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-3xl shadow-2xl max-w-lg w-full p-8 transform transition-all duration-500 scale-100 animate-bounce-in">
            {/* Przycisk zamykania */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-3 right-3 text-purple-800 hover:text-purple-600 text-2xl font-bold focus:outline-none"
              aria-label="Zamknij modal"
            >
              &times;
            </button>

            {/* Zawartość modala */}
            <div className="text-center">
              {/* Zdjęcie ulotki */}
              <Image
                src="/ulotka.png"
                alt="Ulotka promocyjna żłobka"
                width={400}
                height={300}
                priority
                className="w-full h-auto rounded-xl shadow-md mb-6"
              />
              {/* Tekst specjalnej oferty */}
              <h2 className="text-3xl font-bold text-purple-800 mb-4 font-['Comic_Sans_MS', 'cursive'] drop-shadow-sm">
                Bajkowa Promocja dla Maluszków!
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-semibold leading-relaxed">
                Zapisz dziecko we wrześniu lub październiku i skorzystaj z
                wyjątkowej oferty: <br />
                <span className="font-bold text-purple-800">
                  Czesne 0 zł, Wpisowe 0 zł, Wyżywienie 0 zł przez 2 miesiące!
                </span>
              </p>
              {/* Przycisk przekierowania */}
              <Button
                text="Poznaj szczegóły!"
                href="/zlobki/lokietka"
                className="bg-yellow-400 text-purple-800 hover:bg-yellow-500 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-lg tracking-wide"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
