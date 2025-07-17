import React, { useState } from "react";

export default function FoodItemTable() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "Bułeczka pszenna 40g z masłem, różowy twarożek z czarną porzeczką (twaróg, śmietana) 25g, herbatka z cytryną kcal 260",
      secondBreakfast: "Ananas",
      lunch:
        "Zupa jarzynowa z kluseczkami 200ml (seler, masło, śmietana, pszenica) kcal 130 Ragout z kurczaka z warzywami 100g, kasza pęczak 100g, kompot 200ml kcal 360",
      snack: "Krem bananowy ze szpinakiem 100g, wafle ryżowe kcal 210",
    },
    Wtorek: {
      breakfast:
        "Zupa mleczna z płatkami kukurydzianymi, chleb z masłem i szynką, ogórek kcal 270",
      secondBreakfast: "Śliwki",
      lunch:
        "Rosołek z makaronem, gołąbki bez zawijania, ziemniaki, kompot kcal 370",
      snack: "Ciasto czekoladowe z gruszką kcal 220",
    },
    Środa: {
      breakfast:
        "Bułka z masłem i szynką, pomidor, rukola, herbatka z cytryną kcal 260",
      secondBreakfast: "Pół banana, wafle kukurydziane",
      lunch:
        "Barszcz biały z jajkiem i ziemniakami, naleśniki z serkiem, mus owocowy, kompot kcal 340",
      snack: "Chleb z kiełbasą i ogórkiem kiszonym, lemoniada kcal 230",
    },
    Czwartek: {
      breakfast:
        "Zupa mleczna z płatkami, chleb z masłem i kiełbasą, ogórek kcal 270",
      secondBreakfast: "Gruszka",
      lunch: "Zupa ogórkowa, klopsiki z ryżem i warzywami, kompot kcal 390",
      snack: "Ciastka owsiane z koktajlem z brzoskwini kcal 250",
    },
    Piątek: {
      breakfast:
        "Kajzerka z pastą jajeczną, pomidor, herbatka z pigwą kcal 260",
      secondBreakfast: "Jabłko",
      lunch:
        "Krem z pomidorów z grzankami, kotleciki rybne z ziemniakami, surówka, kompot kcal 350",
      snack: "Budyń ryżowy z bananem kcal 200",
    },
  };

  const days = Object.keys(menu);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-[#fa7070] mb-4">
        Menu Standardowe
      </h3>

      <ul className="flex overflow-x-auto gap-6 text-lg text-[#2c7865] mb-6">
        {days.map((day) => (
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
          <strong className="block text-lg text-[#2c7865]">
            Drugie Śniadanie:
          </strong>
          {menu[currentDay].secondBreakfast}
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
