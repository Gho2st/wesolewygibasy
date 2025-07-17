"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DayScheduleVetulaniego({ header }) {
  const [activeTab, setActiveTab] = useState("day");

  const scheduleItems = [
    "7:00 - 8:30 - Schodzenie się dzieci, zabawy na dywanie.",
    "8:30 - 9:00 - Czas na śniadanko",
    "9:00 - 9:15 - Witamy się śpiewając i grając na instrumentach",
    "9:15 - 9:45 - Zajęcia dodatkowe",
    "9:50 - 10:10 - Drugie śniadanie",
    "10:10 - 11:00 - Spacer lub zabawy w ogrodzie",
    "11:00 - 11:30 - Obiad (drugie danie)",
    "11:50 - 13:30 - Drzemka",
    "13:30 - 14:00 - Obiad (zupa)",
    "14:00 - 15:00 - Zabawy swobodne",
    "15:00 - 15:15 - Podwieczorek",
    "15:15 - 17:00 - Zabawy edukacyjne, motoryczne, rozwojowe oraz zakończenie dnia.",
  ];

  const extraItems = [
    {
      day: "Poniedziałek",
      activity: "Język angielski – nauka przez zabawę, śpiew i ruch.",
    },
    { day: "Wtorek", activity: "Logopedia" },
    { day: "Środa", activity: "Rytmika dla smyka" },
    {
      day: "Czwartek",
      activity:
        "Zajęcia tematyczne: kulinarne, sportowe, plastyczne i ogólnorozwojowe.",
    },
    {
      day: "Piątek",
      activity:
        "Dogoterapia lub Gordonki – kontakt z psem terapeutycznym lub muzyka wg Gordona.",
    },
  ];

  return (
    <div className="min-h-screen px-6 sm:px-12 py-16 flex justify-center items-start">
      <div className="w-full max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-medium mb-12">{header}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-4">
            Żłobek jest czynny w godzinach{" "}
            <span className="font-semibold">7:00 do 17:00</span>. Bardzo proszę,
            aby przyprowadzać dziecko do godziny{" "}
            <span className="font-semibold">08:30</span>.
          </p>
          <p className="text-xl max-w-3xl mx-auto">
            Jeśli dziecko nie zostaje na leżakowanie (wychodzi po obiedzie),
            proszę odebrać je do godziny{" "}
            <span className="font-semibold">11:30</span>.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 sm:gap-8 mt-8 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("day")}
            className={`${
              activeTab === "day"
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-bold cursor-pointer py-2 px-4 rounded-md shadow-md transition`}
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

        {/* Animated height wrapper */}
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
                  Dziecko otrzymuje{" "}
                  <span className="font-semibold">moc atrakcji.</span>{" "}
                  Codziennie od 9:15 do 9:45 odbywają się różne{" "}
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
