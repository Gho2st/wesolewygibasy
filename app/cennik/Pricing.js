"use client";
import { useState } from "react";
import Header from "@/components/UI/Header";
import PricingInfo from "./pricingInfo";

const PRICING_DATA = [
  {
    id: "lokietka",
    title: "Łokietka",
    themeColor: "bg-teal-700",
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
    title: "Śliczna & Stańczyka - Czesne 0zł",
    themeColor: "bg-teal-700",
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
    themeColor: "bg-teal-700",
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
      onClick={onClick}
      className={`
        flex-1 min-w-[240px] p-5 rounded-xl shadow-md transition-all duration-200
        text-white font-semibold text-lg md:text-xl cursor-pointer
        ${
          isActive
            ? "bg-[#fa7070] scale-105 shadow-xl ring-2 ring-[#fa7070]/40"
            : "bg-[#fa7070]/80 hover:bg-[#fa7070] hover:shadow-lg"
        }
      `}
    >
      {location.title}
    </button>
  );
};

const PricingTable = ({ data }) => {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-sm md:text-base">
        <thead>
          <tr className={`${data.themeColor} text-white`}>
            {data.headers.map((head, i) => (
              <th
                key={i}
                className={`p-3 md:p-4 border-r last:border-r-0 font-medium ${
                  head.includes("Wpłata") ? "bg-blue-700/90" : ""
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
              className={`
                border-b last:border-b-0 hover:bg-gray-50 transition-colors
                ${rowIndex % 2 === 0 ? "bg-gray-50/70" : "bg-white"}
              `}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-3 md:p-4 border-r last:border-r-0 text-center"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-5 md:p-6 space-y-4 text-sm md:text-base">
        {data.additionalFee && (
          <p className="text-blue-700 font-semibold">{data.additionalFee}</p>
        )}

        <p className="text-gray-600 font-medium">
          * Zwrot dotacji ok. 20 dnia następnego miesiąca
        </p>

        {data.extraInfo && (
          <p className="text-teal-700 font-medium italic">{data.extraInfo}</p>
        )}
      </div>
    </div>
  );
};

export default function Pricing() {
  const [activeLocation, setActiveLocation] = useState("lokietka");

  const activeData = PRICING_DATA.find((loc) => loc.id === activeLocation);

  return (
    <main className="px-4 sm:px-6 lg:px-[10%] 2xl:px-[16%] py-12 min-h-screen">
      <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />

      <PricingInfo />

      <div className="mt-12 md:mt-16">
        {/* Trzy karty obok siebie */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-14">
          {PRICING_DATA.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              isActive={activeLocation === location.id}
              onClick={() => setActiveLocation(location.id)}
            />
          ))}
        </div>

        {/* Wybrana tabela */}
        {activeData && <PricingTable data={activeData} />}
      </div>
    </main>
  );
}
