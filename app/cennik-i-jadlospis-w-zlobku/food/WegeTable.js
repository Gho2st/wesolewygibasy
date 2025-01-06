import React, { useState } from "react";
import classes from "./FoodItemTable.module.css";

export default function WegeTable() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "bułeczka pszenna 40g z masłem roślinnym,, różowy twarożek z czarną porzeczką (twaróg, śmietana) 25g, herbatka z cytryną",
      lunch:
        "Zupa jarzynowa z kluseczkami 250ml (seler, masło, śmietana, pszenica) Ragout warzywne z tofu-soja z kolorową papryką, cukinią, bakłażanem i pomidorami 120g (śmietanka), kasza pęczak (jęczmień) 100g, kompot 200ml",
      snack:
        "krem bananowy ze świeżym szpinakiem 100g (banany, szpinak, jogurt, mielone siemię lniane, wanilia, cynamon, kakao), wafle ryżowe",
    },
    Wtorek: {
      breakfast:
        "Zupa mleczna z płatkami kukurydzianymi 150ml/20g, chleb foremkowy z ziarnami 30g z masłem roślinnym, żółtym serem 20g i ogórkiem",
      lunch:
        "Zupa z cukinii z makaronem i natką 250ml (seler, pszenica) Gołąbki z soczewicy bez zawijania (soczewica, marchewka, młoda kapusta, ryż, jaja) 70g z duszonymi pomidorami z natką 80g, ziemniaczki 100g, kompot 200ml",
      snack:
        "ciasto czekoladowe z gruszką (mąka pszenna, mąka pełnoziarnista, jaja, czekolada gorzka-kakao)",
    },
    Środa: {
      breakfast:
        "bułeczka z ziarnami 40g z masłem roślinnym, szynką sojową 20g, pomidor, rukola, herbatka z cytryną 200ml",
      lunch:
        "Barszcz biały z jajkiem i ziemniaczkami 250ml (seler, jaja, zakwas-żytni, śmietana) Naleśniki z serkiem waniliowym 2szt (mąka pszenna, mąka orkiszowa, mleko, jaja, twaróg, śmietana), mus ze śliwek i jabłka 30g, kompot 200ml",
      snack:
        "chleb foremkowy żytni 30g z masłem roślinnym, pasztecikiem z fasolki 20g z ogórkiem kiszonym, domowa lemoniada z pomarańczami 100ml",
    },
    Czwartek: {
      breakfast:
        "Zupa mleczna z płatkami wielozbożowymi 150ml/20g, chleb mieszany 30g z masłem roślinnym, hummusem paprykowym 20g i świeżym ogórkiem",
      lunch:
        "Zupa ogórkowa z ziemniaczkami 250ml (seler, masło, śmietana) Wegańskie pulpeciki z kalafiora 2 szt. w sosie koperkowym 40ml (śmietanka), ryż paraboliczny 100g, marchewka baby z groszkiem na parze 60g, kompot 200ml",
      snack:
        "domowe ciastka owsiane z żurawiną (płatki owsiane, mąka owsiana, jaja), koktajl na maślance z brzoskwinią 100ml",
    },
    Piątek: {
      breakfast:
        "Kajzerka z makiem 30g z masłem roślinnym, pastą jajeczną z żółtym serem 20g ze szczypiorkiem i pomidorem (jaja, ser, majonez), herbatka z pigwą 200ml",
      lunch:
        "Zupa krem z pomidorów i marchewki z grzankami, natka 250ml(seler, masło, śmietana, pszenica) Kotleciki rybne z morszczuka w płatkach kukurydzianych 70g (jaja, płatki, wiórki kokosowe), ziemniaczki 100g, surówka z kiszonej kapusty i marchewki 70g, kompot 200ml vege- kotleciki z warzyw, pestek i kaszy gryczanej",
      snack: "bananowy budyń z ryżu na mleku 150ml (mleko, śmietanka)",
    },
  };

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className={classes.container}>
      <h3>Menu Wege</h3>
      <ul className={classes.weekDays}>
        {Object.keys(menu).map((day) => (
          <li
            key={day}
            onClick={() => handleDayChange(day)}
            className={`${classes.weekDay} ${
              currentDay === day ? classes.activeDay : ""
            }`}
          >
            {day}
          </li>
        ))}
      </ul>
      <div className={classes.description}>
        <ul>
          <li>
            <strong>Śniadanie:</strong> {menu[currentDay].breakfast}
          </li>
          <li>
            <strong>Obiad:</strong> {menu[currentDay].lunch}
          </li>
          <li>
            <strong>Podwieczorek:</strong> {menu[currentDay].snack}
          </li>
        </ul>
      </div>
    </div>
  );
}
