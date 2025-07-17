"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DayScheduleLokietka({ header }) {
  const [activeTab, setActiveTab] = useState("day");

  const scheduleItems = [
    "6:30 - 8:30 - Schodzenie się dzieci i wspólne zabawy na dywanie",
    "8:30 - 9:00 - Śniadanie",
    "9:00 - 9:15 - Czas wolny, zabawy dowolne",
    "9:00 - 10:00 - Przywitanie i zajęcia dodatkowe",
    "10:00 - 10:15 - Drugie śniadanie",
    "10:15 - 11:00 - Zajęcia edukacyjne, spacery, chusta, kulinaria, plastyka, bajkoterapia, sensoryka – zależnie od planu i pogody",
    "11:00 - 11:30 - Obiad",
    "11:30 - 13:15 - Drzemka",
    "13:15 - 13:30 - Podwieczorek",
    "13:30 - 15:30 - Wspólne zabawy ogólnorozwojowe",
    "15:30 - 15:45 - Drugi podwieczorek",
    "15:45 - 17:30 - Zabawy wspierające motorykę oraz odbiór dzieci",
  ];

  const extraItems = [
    {
      day: "Poniedziałek",
      activity: "Dzień tematyczny – zajęcia związane z danym tematem tygodnia.",
    },
    {
      day: "Wtorek",
      activity:
        "Logorytmika – ćwiczenia łączące ruch, rytm i mowę, wspierające rozwój językowy.",
    },
    {
      day: "Środa",
      activity: "Język angielski – nauka przez zabawę, śpiew i ruch.",
    },
    {
      day: "Czwartek",
      activity:
        "Rytmika – zajęcia muzyczno-ruchowe wspierające koordynację i poczucie rytmu.",
    },
    {
      day: "Piątek",
      activity:
        "Dogoterapia lub Gordonki – kontakt z psem terapeutycznym lub muzyka inspirowana teorią Gordona.",
    },
  ];

  return (
    <div className="min-h-screen px-6 sm:px-12 py-16 flex justify-center items-start">
      <div className="w-full max-w-5xl">
        {/* Nagłówek */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-medium mb-12">{header}</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Żłobek jest czynny w godzinach{" "}
            <span className="font-semibold">6:30 do 17:30</span>. Bardzo proszę,
            aby przyprowadzać dziecko do godziny{" "}
            <span className="font-semibold">08:30</span>. Jeśli dziecko nie
            zostaje na leżakowanie (wychodzi po obiedzie), proszę odebrać je do
            godziny <span className="font-semibold">11:30</span>.
          </p>
        </div>

        {/* Przełączniki */}
        <div className="flex justify-center gap-4 sm:gap-8 mt-10 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("day")}
            className={`${
              activeTab === "day"
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white cursor-pointer font-bold py-2 px-4 rounded-md shadow-md transition`}
          >
            Plan Zajęć
          </button>
          <button
            onClick={() => setActiveTab("extra")}
            className={`${
              activeTab === "extra"
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white cursor-pointer font-bold py-2 px-4 rounded-md shadow-md transition`}
          >
            Zajęcia Dodatkowe
          </button>
        </div>

        {/* Animowana treść */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {activeTab === "day" ? (
              <div className="space-y-4 text-lg">
                {scheduleItems.map((text, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 px-4 py-2 rounded-md text-lg"
                  >
                    {text}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-lg space-y-4">
                <p className="text-xl text-center mb-6">
                  Każdego dnia od 9:00 do 11:00 odbywają się różne{" "}
                  <span className="font-semibold">zajęcia dodatkowe.</span>
                </p>
                <ul className="space-y-4">
                  {extraItems.map(({ day, activity }, idx) => (
                    <li key={idx}>
                      <strong>{day}:</strong> {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
