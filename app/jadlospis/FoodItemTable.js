import React, { useState } from "react";

export default function FoodItemTable() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "Chleb z ziarnami 30g z masłem, żółtym serem 20g, pomidor malinowy, jogurcik naturalny z owocami 100g, herbatka z owoców leśnych 200ml kcal 240",
      secondBreakfast: "Mandarynka kcal 30",
      lunch:
        "Zupa ogórkowa z ryżem 200ml (seler, masło, śmietana) kcal 115 Klopsiki z łopatki i kaszy gryczanej 2szt(z łopatki wieprz., jaja, zioła, czosnek, kasza), makaron świderki tricolore100g(pszenica, szpinak w proszku, pomidor w proszku), sos warzywny 70g (cukinia, pomidory, papryka, pieczarki, marchew), kompot 200ml kcal 300",
      snack:
        "Mus z kaszki manny na mleku z jabłkami i brzoskwinią 120g (kaszka manna, mleko), wafle ryżowe pełne ziarno kcal 190",
    },
    Wtorek: {
      breakfast:
        "Płatki jaglane na mleku z morelami suszonymi150ml (mleko), chleb mieszany30g (pszenica, żyto) z masłem, pastą z jaj i serka śmietankowego20g (twaróg, śmietana), ogórek, herbatka kcal 240",
      secondBreakfast: "Jabłko kcal 30",
      lunch:
        "Rosołek z makaronem i natką 200ml (kurczak, indyk,seler, pszenica) kcal 115 Bitki schabowe 60g w sosie własnym, ziemniaczki z koperkiem100g, duszona kapusta z marchewką (kapusta kiszona , włoska) 60g, kompot200ml kcal 310",
      snack:
        "Risotto na mleku z bananami 120g (mleko, wanilia, ryż arborio, banany) kcal 180",
    },
    Środa: {
      breakfast:
        "bułka owsiana 40g (płatki owsiane, pszenica) z masłem, żółtym serem10g, szynką z gotowanego indyka20g, roszponką i ogórkiem kiszonym, herbatka rooibos 200ml kcal 250",
      secondBreakfast: "banan kcal 30",
      lunch:
        "Żurek z jajkiem i ziemniaczkami 200ml (seler, zakwas żytni, śmietana) kcal 120 Racuszki z dyni, twarogu i jabłek 2szt (mąka pszenna, mąka orkiszowa, twaróg, jaja, cynamon), mus z pieczonego jabłka 30g, kompot 200ml kcal 300",
      snack:
        "chleb żytni 30g (gluten) z masłem, domowym hummusem z cieciorki, pomidorów suszonych i ajvaru20g, pomidor malinowy, sok z przetartych owoców i warzyw 100ml kcal 200",
    },
    Czwartek: {
      breakfast:
        "Zupa mleczna z płatkami kukurydzianymi pełne ziarno150ml/20g, chleb graham 30g(pszenica, żyto) z masłem, szynką z kurcząt20g i ogórkiem kcal 240",
      secondBreakfast: "Gruszka kcal 30",
      lunch:
        "Zupa jarzynowa z ziemniaczkami i koperkiem 200ml (seler, masło, śmietana) kcal 115 Pieczeń z indyka w sosie własnym z marchewką i kolendrą60g/50ml, kasza bulgur (pszenica)100g, pieczone buraczki duszone60g (śmietana), kompot 200ml kcal 300",
      snack:
        "jogurt grecki z frużeliną wiśniową 120g/15g, pieczywo chrupkie żytnie kcal 190",
    },
    Piątek: {
      breakfast:
        "kajzerka30g (pszenica) z masłem, serkiem śmietankowym Wieluń 20g, pomidor malinowy, jajecznica na parze 40g (jaja), herbatka z cytryną200ml kcal 240",
      secondBreakfast: "Jabłko kcal 30",
      lunch:
        "Zupa krem z białych warzyw z grzankami pełnoziarnistymi 200ml(seler, masło, śmietana, pszenica, żyto) kcal 120 Paluszki z filetów rybnych60g(dorsz, mintaj, bułka tarta) ziemniaczki100g, marchewka baby z zielonym groszkiem na parze60g, kompot200ml kcal 300",
      snack:
        "domowe ciastka owsiane z żurawiną i rodzynkami (płatki owsiane, jaja), maślanka naturalna 100ml kcal 200",
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
