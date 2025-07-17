import React, { useState } from "react";

export default function WegeTable() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "Bułeczka pszenna z masłem roślinnym, różowy twarożek z porzeczką, herbatka z cytryną",
      lunch: "Zupa jarzynowa, warzywne ragout z tofu, kasza pęczak, kompot",
      snack: "Krem bananowy ze szpinakiem, jogurt, wafle ryżowe",
    },
    Wtorek: {
      breakfast: "Zupa mleczna z płatkami, chleb z serem żółtym i ogórkiem",
      lunch: "Zupa z cukinii, gołąbki z soczewicy, ziemniaki, kompot",
      snack: "Ciasto czekoladowe z gruszką",
    },
    Środa: {
      breakfast:
        "Bułeczka z masłem roślinnym, szynka sojowa, pomidor, rukola, herbatka",
      lunch: "Barszcz biały, naleśniki z serkiem, mus owocowy, kompot",
      snack: "Chleb żytni z pasztetem fasolowym, ogórek kiszony, lemoniada",
    },
    Czwartek: {
      breakfast: "Zupa mleczna, chleb z hummusem i ogórkiem",
      lunch: "Zupa ogórkowa, wegańskie pulpeciki, ryż, warzywa, kompot",
      snack: "Ciastka owsiane z żurawiną, koktajl z maślanki i brzoskwini",
    },
    Piątek: {
      breakfast:
        "Kajzerka z masłem roślinnym, pasta jajeczna z serem, szczypiorek, pomidor, herbatka",
      lunch:
        "Zupa krem z pomidorów, kotleciki z warzyw i kaszy, ziemniaki, surówka, kompot",
      snack: "Bananowy budyń z ryżu na mleku",
    },
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-[#fa7070] mb-4">Menu Wege</h3>

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
