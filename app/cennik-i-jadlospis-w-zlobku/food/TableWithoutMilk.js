import React, { useState } from "react";

export default function TableWithoutMilk() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "Bułeczka pszenna z masłem roślinnym, szynką i pomidorem, herbatka z cytryną",
      lunch:
        "Zupa jarzynowa z kluseczkami, ragout z kurczaka z warzywami, kasza pęczak, kompot",
      snack: "Krem bananowy ze szpinakiem, mleko owsiane, wafle ryżowe",
    },
    Wtorek: {
      breakfast:
        "Zupa mleczna (mleko owsiane/sojowe), chleb z masłem roślinnym, szynka indycza i ogórek",
      lunch: "Rosołek z makaronem, gołąbki bez zawijania, ziemniaki, kompot",
      snack: "Ciasto czekoladowe z gruszką",
    },
    Środa: {
      breakfast:
        "Bułeczka z masłem roślinnym, szynka sojowa, pomidor, rukola, herbatka",
      lunch: "Barszcz biały z ziemniakami, naleśniki z musem owocowym, kompot",
      snack: "Chleb żytni z pasztetem z fasoli i ogórkiem kiszonym, lemoniada",
    },
    Czwartek: {
      breakfast:
        "Zupa mleczna (mleko owsiane/sojowe), chleb z masłem roślinnym i kiełbasą",
      lunch:
        "Zupa ogórkowa, wegańskie pulpeciki, ryż, warzywa na parze, kompot",
      snack: "Ciastka owsiane z żurawiną, koktajl owsiany z brzoskwinią",
    },
    Piątek: {
      breakfast:
        "Kajzerka z masłem roślinnym, pasta jajeczna, pomidor, herbatka z pigwą",
      lunch:
        "Krem z pomidorów i marchewki z grzankami, kotleciki rybne, ziemniaki, surówka, kompot",
      snack: "Bananowy budyń ryżowy na mleku owsianym",
    },
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-[#fa7070] mb-4">
        Menu Bez Nabiału
      </h3>

      <ul className="flex overflow-x-auto gap-6 text-lg text-[#2c7865] mb-6">
        {Object.keys(menu).map((day) => (
          <li
            key={day}
            onClick={() => setCurrentDay(day)}
            className={`cursor-pointer whitespace-nowrap transition-colors font-medium ${
              currentDay === day ? "text-[#fa7070]" : "hover:text-[#43b79a]"
            }`}
          >
            {day}
          </li>
        ))}
      </ul>

      <div className="space-y-4 text-gray-800 text-base leading-relaxed">
        <p>
          <strong className="block text-lg text-[#2c7865]">Śniadanie:</strong>
          {menu[currentDay].breakfast}
        </p>
        <p>
          <strong className="block text-lg text-[#2c7865]">Obiad:</strong>
          {menu[currentDay].lunch}
        </p>
        <p>
          <strong className="block text-lg text-[#2c7865]">
            Podwieczorek:
          </strong>
          {menu[currentDay].snack}
        </p>
      </div>
    </div>
  );
}
