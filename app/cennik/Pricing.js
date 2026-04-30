"use client";
import { useState } from "react";
import Header from "@/components/UI/Header";
import PricingInfo from "./PricingInfo";

const PRICING_DATA = [
  {
    id: "lokietka",
    title: "Łokietka",
    icon: "🌟",
    extraInfo:
      "Czesne pokrywane z projektu Aktywny Maluch oraz dotacji urzędu miasta Kraków",
    headers: [
      "Miesiąc",
      "Czesne",
      "Dotacja U.M",
      "Dotacja Aktywnie w Żłobku",
      "Wpłata na konto",
      "Ostateczne opłaty",
    ],
    rows: [
      ["Styczeń 2026", "2200 zł", "580 zł", "1500 zł", "1620 zł", "120 zł"],
      ["Luty 2026", "2200 zł", "580 zł", "1500 zł", "1620 zł", "120 zł"],
      ["Marzec 2026", "2200 zł", "638 zł", "1500 zł", "1562 zł", "62 zł"],
      ["Kwiecień 2026", "2200 zł", "609 zł", "1500 zł", "1591 zł", "91 zł"],
      ["Maj 2026", "2200 zł", "580 zł", "1500 zł", "1620 zł", "120 zł"],
      ["Czerwiec 2026", "2200 zł", "609 zł", "1500 zł", "1591 zł", "91 zł"],
      ["Lipiec 2026", "2200 zł", "667 zł", "1500 zł", "1533 zł", "33 zł"],
    ],
  },
  {
    id: "sliczna",
    title: "Śliczna & Stańczyka",
    badge: "Czesne 0 zł",
    icon: "🎈",
    additionalFee: "Zajęcia dodatkowe płatne 300 zł / miesiąc",
    extraInfo:
      "Czesne w całości pokrywane z projektu maluch + 2022–2029 oraz dotacji urzędu miasta Kraków i Aktywny Maluch",
    headers: [
      "Miesiąc",
      "Czesne",
      "Dotacja U.M",
      "Dotacja Maluch",
      "Dotacja Aktywnie w Żłobku",
      "Wpłata na konto",
      "Ostateczne opłaty",
    ],
    rows: [
      [
        "Styczeń 2026",
        "2300 zł",
        "580 zł",
        "836 zł",
        "884 zł",
        "884 zł",
        "0 zł",
      ],
      ["Luty 2026", "2300 zł", "580 zł", "836 zł", "884 zł", "884 zł", "0 zł"],
      [
        "Marzec 2026",
        "2300 zł",
        "638 zł",
        "836 zł",
        "826 zł",
        "826 zł",
        "0 zł",
      ],
      [
        "Kwiecień 2026",
        "2300 zł",
        "609 zł",
        "836 zł",
        "855 zł",
        "855 zł",
        "0 zł",
      ],
      ["Maj 2026", "2300 zł", "580 zł", "836 zł", "884 zł", "884 zł", "0 zł"],
      [
        "Czerwiec 2026",
        "2300 zł",
        "609 zł",
        "836 zł",
        "855 zł",
        "855 zł",
        "0 zł",
      ],
    ],
  },
  {
    id: "vetulaniego",
    title: "Vetulaniego & Glogera",
    icon: "🎨",
    additionalFee: "Zajęcia dodatkowe płatne 150 zł / miesiąc",
    headers: [
      "Miesiąc",
      "Czesne",
      "Dotacja U.M.",
      "Dotacja Aktywnie w Żłobku",
      "Wpłata na konto",
      "Ostateczne opłaty",
    ],
    rows: [
      ["Styczeń 2026", "2400 zł", "580 zł", "1500 zł", "1820 zł", "320 zł"],
      ["Luty 2026", "2400 zł", "580 zł", "1500 zł", "1820 zł", "320 zł"],
      ["Marzec 2026", "2400 zł", "638 zł", "1500 zł", "1762 zł", "262 zł"],
      ["Kwiecień 2026", "2400 zł", "609 zł", "1500 zł", "1791 zł", "291 zł"],
      ["Maj 2026", "2400 zł", "580 zł", "1500 zł", "1820 zł", "320 zł"],
      ["Czerwiec 2026", "2400 zł", "609 zł", "1500 zł", "1791 zł", "291 zł"],
      ["Lipiec 2026", "2400 zł", "667 zł", "1500 zł", "1733 zł", "233 zł"],
    ],
  },
];

const LocationCard = ({ location, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative flex-1 min-w-[240px] p-6 rounded-2xl 
        transition-all duration-300 cursor-pointer overflow-hidden
        ${
          isActive
            ? "bg-gradient-to-br from-[#fa7070] to-[#ea5252] shadow-2xl shadow-[#fa7070]/30 ring-4 ring-[#fa7070]/30"
            : "bg-white border-2 border-gray-100 hover:border-[#fa7070]/30 hover:shadow-xl"
        }
      `}
    >
      {/* Dekoracyjny element w tle */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full transition-all duration-500 ${
          isActive
            ? "bg-white/15 scale-110"
            : "bg-[#fa7070]/5 group-hover:scale-110"
        }`}
      />

      <div className="relative flex flex-col items-center gap-2">
        <span className="text-3xl mb-1">{location.icon}</span>
        <span
          className={`font-bold text-lg md:text-xl ${
            isActive ? "text-white" : "text-gray-800"
          }`}
        >
          {location.title}
        </span>
        {location.badge && (
          <span
            className={`mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
              isActive
                ? "bg-white text-[#ea5252]"
                : "bg-[#fa7070]/10 text-[#ea5252]"
            }`}
          >
            {location.badge}
          </span>
        )}
      </div>
    </button>
  );
};

const PricingTable = ({ data }) => {
  return (
    <div className="mt-8 rounded-2xl overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-gray-100">
      {/* Nagłówek tabeli z gradientem */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{data.icon}</span>
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl">
              {data.title}
            </h3>
            <p className="text-teal-100 text-sm mt-0.5">
              Szczegółowy cennik miesięczny
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="bg-gradient-to-r from-teal-50 to-teal-100/50 border-b-2 border-teal-200">
              {data.headers.map((head, i) => (
                <th
                  key={i}
                  className={`p-4 text-teal-900 font-semibold text-left first:rounded-tl-none ${
                    head.includes("Wpłata")
                      ? "bg-blue-100/60 text-blue-900"
                      : ""
                  } ${
                    head.includes("Ostateczne")
                      ? "bg-[#fa7070]/10 text-[#ea5252]"
                      : ""
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-100 last:border-b-0 hover:bg-teal-50/30 transition-colors duration-150"
              >
                {row.map((cell, cellIndex) => {
                  const isMonth = cellIndex === 0;
                  const isPayment = data.headers[cellIndex]?.includes("Wpłata");
                  const isFinal =
                    data.headers[cellIndex]?.includes("Ostateczne");

                  return (
                    <td
                      key={cellIndex}
                      className={`p-4 ${
                        isMonth
                          ? "font-semibold text-gray-800"
                          : "text-gray-600"
                      } ${
                        isPayment
                          ? "bg-blue-50/40 font-medium text-blue-900"
                          : ""
                      } ${
                        isFinal ? "bg-[#fa7070]/5 font-bold text-[#ea5252]" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stopka tabeli */}
      <div className="p-6 md:p-7 space-y-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        {data.additionalFee && (
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <span className="text-2xl flex-shrink-0">💡</span>
            <p className="text-blue-900 font-semibold">{data.additionalFee}</p>
          </div>
        )}

        <div className="flex items-start gap-3 text-gray-600">
          <span className="text-lg flex-shrink-0">🔄</span>
          <p className="text-sm md:text-base">
            Zwrot dotacji następuje około{" "}
            <span className="font-semibold">20 dnia następnego miesiąca</span>
          </p>
        </div>

        {data.extraInfo && (
          <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
            <span className="text-2xl flex-shrink-0">✨</span>
            <p className="text-teal-800 font-medium leading-relaxed">
              {data.extraInfo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Pricing() {
  const [activeLocation, setActiveLocation] = useState("lokietka");
  const activeData = PRICING_DATA.find((loc) => loc.id === activeLocation);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-teal-50/20 overflow-hidden">
      {/* Dekoracyjne kółka w tle */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-[#fa7070]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 -right-20 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative px-4 sm:px-6 lg:px-[10%] 2xl:px-[16%] py-12">
        <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />

        <PricingInfo />

        <div className="mt-12 md:mt-16">
          {/* Sekcja wyboru lokalizacji */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Wybierz lokalizację
            </h2>
            <p className="text-gray-500">
              Kliknij placówkę, aby zobaczyć szczegółowy cennik
            </p>
          </div>

          {/* Karty lokalizacji */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-12">
            {PRICING_DATA.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isActive={activeLocation === location.id}
                onClick={() => setActiveLocation(location.id)}
              />
            ))}
          </div>

          {/* Aktywna tabela - min-height żeby uniknąć skoków przy zmianie tabeli */}
          <div className="min-h-[780px]">
            {activeData && <PricingTable data={activeData} />}
          </div>
        </div>
      </div>
    </main>
  );
}
