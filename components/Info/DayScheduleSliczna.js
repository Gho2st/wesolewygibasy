"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DayScheduleSliczna({ header }) {
  const [activeTab, setActiveTab] = useState("day");

  const scheduleItems = [
    "7:00 - 8:30 - Schodzenie się dzieci. Przychodzą do żłobka, witają się z opiekunami i kolegami. To czas na swobodną zabawę.",
    "8:30 - 9:00 - Śniadanie",
    "9:00 - Przywitanie na dywanie. Wspólne piosenki, instrumenty, ruchowe zabawy.",
    "9:00 - 11:00 - Zajęcia dodatkowe",
    "10:00 - 10:15 - Drugie Śniadanie",
    "11:00 - Obiad",
    "11:45 - 13:30 - Drzemka – czas na odpoczynek i regenerację sił.",
    "13:30 - Podwieczorek",
    "14:00 - 15:30 - Zabawy swobodne i zorganizowane (kąciki tematyczne, plastyka, ruch)",
    "15:30 - Drugi podwieczorek",
    "16:00 - 17:30 - Zabawy i odbiór dzieci (czytanie, wyciszenie, odbiór przez rodziców)",
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
          <p className="text-xl max-w-3xl mx-auto mb-4">
            Żłobek jest czynny w godzinach{" "}
            <span className="font-semibold">7:00 do 17:30</span>. Bardzo proszę,
            aby przyprowadzać dziecko do godziny{" "}
            <span className="font-semibold">08:30</span>.
          </p>
          <p className="text-xl max-w-3xl mx-auto">
            Jeśli dziecko nie zostaje na leżakowanie (wychodzi po obiedzie),
            proszę odebrać je do godziny{" "}
            <span className="font-semibold">11:30</span>.
          </p>
        </div>

        {/* Przełączniki */}
        <div className="flex justify-center gap-4 sm:gap-8 mt-8 mb-12 flex-wrap">
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

        {/* Animowana zawartość */}
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
                  Dziecko otrzymuje w naszym żłobku{" "}
                  <span className="font-semibold">moc atrakcji.</span>{" "}
                  Codziennie od 9:00 do 11:00 odbywają się różne{" "}
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
