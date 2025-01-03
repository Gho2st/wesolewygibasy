import React, { useState } from "react";
import classes from "./FoodItemTable.module.css";

export default function FoodItemTable() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "Bułeczka pszenna 40g z masłem, różowy twarożek z czarną porzeczką (twaróg, śmietana) 25g, herbatka z cytryną kcal 260",
      secondBreakfast: "Ananas",
      lunch:
        "Zupa jarzynowa z kluseczkami 200ml (seler, masło, śmietana, pszenica) kcal 130 Ragout z kurczaka z kolorową papryką, cukinią, bakłażanem i pomidorami 100g( śmietanka), kasza pęczak (jęczmień)100g, kompot 200ml kcal 360",
      snack:
        "Krem bananowy ze świeżym szpinakiem 100g (banany, szpinak, jogurt, mielone siemię lniane, wanilia, cynamon, kakao), wafle ryżowe kcal 210",
    },
    Wtorek: {
      breakfast:
        "Zupa mleczna z płatkami kukurydzianymi 150ml/20g, chleb foremkowy z ziarnami 30g z masłem, szynką z piersią indyczą 20g i ogórkiem kcal 270",
      secondBreakfast: "Śliwki",
      lunch:
        "Rosołek z makaronem i natką 200ml (kurczak, indyk, seler, pszenica) kcal 130 Niezwykłe gołąbki bez zawijania (mięso z łopatki, młoda kapusta, ryż, jaja) 60g z duszonymi pomidorami z natką 80g, ziemniaczki 100g, kompot 200ml kcal 370",
      snack:
        "Ciasto czekoladowe z gruszką (mąka pszenna, mąka pełnoziarnista, jaja, czekolada gorzka-kakao) kcal 220",
    },
    Środa: {
      breakfast:
        "Bułeczka z ziarnami 40g z masłem, szynką z kurcząt20g, pomidor, rukola, herbatka z cytryną 200ml kcal 260",
      secondBreakfast: "Pół banana, wafle kukurydziane",
      lunch:
        "Barszcz biały z jajkiem i ziemniaczkami 200ml (seler, jaja, zakwas-żytni, śmietana) kcal 150 Naleśniki z serkiem waniliowym (mąka pszenna, mąka orkiszowa, mleko, jaja, twaróg, śmietana), mus ze śliwek i jabłka 30g, kompot 200ml kcal 340",
      snack:
        "Chleb foremkowy żytni 30g z masłem, kiełbasą podsuszaną krakowską20g z ogórkiem kiszonym, domowa lemoniada z pomarańczami100ml. Kcal 230",
    },
    Czwartek: {
      breakfast:
        "Zupa mleczna z płatkami wielozbożowymi 150ml/20g, chleb mieszany 30g z masłem, kiełbasą szynkową 20g i świeżym ogórkiem kcal 270",
      secondBreakfast: "Gruszka",
      lunch:
        "Zupa ogórkowa z ziemniaczkami 200ml(seler, masło, śmietana) kcal 120 Szwedzkie klopsiki z mięsa drobiowego 2 szt. (indyk, kurczak, jaja, kajzerka)w sosie koperkowym 40ml (śmietanka), ryż paraboliczny 100g, marchewka baby z groszkiem na parze 60g, kompot 200ml kcal 390",
      snack:
        "Domowe ciastka owsiane z żurawiną (płatki owsiane, mąka owsiana, jaja), koktajl na maślance z brzoskwinią 100ml. Kcal 250",
    },
    Piątek: {
      breakfast:
        "Kajzerka z makiem 30g z masłem, pastą jajeczną z żółtym serem 20g ze szczypiorkiem i pomidorem (jaja, ser, majonez), herbatka z pigwą 200ml kcal 260",
      secondBreakfast: "Jabłko",
      lunch:
        "Zupa krem z pomidorów i marchewki z grzankami, natka 200 ml (seler, masło, śmietana, pszenica) kcal 130 Kotleciki rybne z morszczuka w płatkach kukurydzianych 60 g (jaja, płatki, wiórki kokosowe), ziemniaczki 100g, surówka z kiszonej kapusty i marchewki 60g, kompot 200ml kcal 350",
      snack:
        "bananowy budyń z ryżu na mleku 120 ml (mleko, śmietanka) kcal 200",
    },
  };

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className={classes.container}>
      <h3>Menu Standardowe</h3>
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
            <strong>Drugie Śniadanie:</strong>
            {menu[currentDay].secondBreakfast}
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
