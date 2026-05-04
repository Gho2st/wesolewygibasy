"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    ad_storage: "denied",
    analytics_storage: "denied",
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem("consent");
    if (storedConsent) {
      const parsed = JSON.parse(storedConsent);
      setConsent(parsed);
      updateGtagConsent(parsed);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  // Aktualizuje zgodę w Google Consent Mode
  const updateGtagConsent = (consentState) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("consent", "update", {
      ad_storage: consentState.ad_storage,
      ad_user_data: consentState.ad_storage,
      ad_personalization: consentState.ad_storage,
      analytics_storage: consentState.analytics_storage,
    });
  };

  const saveConsent = (newConsent) => {
    setConsent(newConsent);
    localStorage.setItem("consent", JSON.stringify(newConsent));
    updateGtagConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      ad_storage: "denied",
      analytics_storage: "denied",
    });
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
  };

  const toggleConsent = (key) => {
    setConsent((prev) => ({
      ...prev,
      [key]: prev[key] === "granted" ? "denied" : "granted",
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:mx-4 bg-gray-900 text-white p-4 md:p-6 rounded-t-lg md:rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 tracking-tight">
          Zgoda na ciasteczka
        </h2>
        <p className="mb-3 md:mb-4 text-xs md:text-sm leading-relaxed text-gray-300">
          Cześć! Używamy cookies (np. Google Analytics, Google Ads), aby Twoja
          wizyta była jeszcze lepsza – od personalizacji po analizę ruchu. Masz
          pełną kontrolę nad ustawieniami!
        </p>
        <Link
          href="/polityka-cookies"
          className="text-blue-400 hover:underline text-xs md:text-sm inline-block mb-3 md:mb-4"
        >
          Dowiedz się więcej
        </Link>

        {showSettings && (
          <div className="mt-3 md:mt-4 flex flex-col gap-2 md:gap-3 bg-gray-800 p-3 md:p-4 rounded-md transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold tracking-tight">
              Ustawienia cookies
            </h3>
            <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">
              Możesz wybrać, które cookies chcesz zaakceptować. Niezbędne
              cookies są zawsze włączone, aby strona działała prawidłowo.
            </p>
            <label className="flex items-center gap-2 md:gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.analytics_storage === "granted"}
                onChange={() => toggleConsent("analytics_storage")}
                className="h-4 w-4 md:h-5 md:w-5 accent-blue-500 rounded focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-xs md:text-sm">Analityczne cookies</span>
            </label>
            <label className="flex items-center gap-2 md:gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.ad_storage === "granted"}
                onChange={() => toggleConsent("ad_storage")}
                className="h-4 w-4 md:h-5 md:w-5 accent-blue-500 rounded focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-xs md:text-sm">Reklamowe cookies</span>
            </label>
            <div className="flex justify-center gap-2 md:gap-4 mt-2 md:mt-3">
              <button
                onClick={handleSaveSettings}
                className="bg-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-blue-500 transition-all duration-200 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Zapisz ustawienia
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="bg-gray-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-gray-600 transition-all duration-200 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Anuluj
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-row justify-center gap-2 md:gap-4 mt-3 md:mt-4">
          <button
            onClick={handleAcceptAll}
            className="bg-green-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-green-500 transition-all duration-200 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Akceptuj wszystko
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-red-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-red-500 transition-all duration-200 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Odrzuć
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gray-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full hover:bg-gray-600 transition-all duration-200 text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Dostosuj
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
