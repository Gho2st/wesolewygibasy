import React, { useState } from "react";
import classes from "./FoodItemTable.module.css";

export default function TableWithoutMilk() {
  const [currentDay, setCurrentDay] = useState("Poniedziałek");

  const menu = {
    Poniedziałek: {
      breakfast:
        "bułeczka pszenna 40g z masłem roślinnym, szyneczką 20g i pomidorem, herbatka z cytryną",
      lunch:
        "Zupa jarzynowa z kluseczkami 250ml (seler, pszenica) Ragout z kurczaka z kolorową papryką, cukinią, bakłażanem i pomidorami 120g, kasza pęczak (jęczmień) 100 g, kompot 200 ml",
      snack:
        "krem bananowy ze świeżym szpinakiem 100g (banany, szpinak, mleko owsiane, mielone siemię lniane, wanilia, cynamon, kakao), wafle ryżowe",
    },
    Wtorek: {
      breakfast:
        "zupa mleczna – mleko owsiane/sojowe z płatkami kukurydzianymi 150ml/20g, chleb foremkowy z ziarnami30g z masłem roślinn, szynką z piersią indyczą20g i ogórkiem",
      lunch:
        "Rosołek z makaronem i natką 250ml (kurczak, indyk, seler, pszenica) Niezwykłe gołąbki bez zawijania (mięso z łopatki, młoda kapusta, ryż, jaja) 70g z duszonymi pomidorami z natką 80g, ziemniaczki 100g, kompot200ml",
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
        "zupa mleczna – mleko owsiane/ sojowe z płatkami wielozbożowymi 150ml/20g, chleb mieszany30g z masłem roślinnym, kiełbasą szynkową20g i świeżym ogórkiem",
      lunch:
        "Zupa ogórkowa z ziemniaczkami 250ml (seler, masło, śmietana) Wegańskie pulpeciki z kalafiora 2 szt. w sosie koperkowym 40ml (śmietanka), ryż paraboliczny 100g, marchewka baby z groszkiem na parze 60g, kompot 200ml",
      snack:
        "domowe ciastka owsiane z żurawiną (płatki owsiane, mąka owsiana, jaja), koktajl na mleku owsianym z brzoskwinią 100ml",
    },
    Piątek: {
      breakfast:
        "kajzerka z makiem30g z masłem roślinnym, pastą jajeczną 20g ze szczypiorkiem i pomidorem (jaja, majonez), herbatka z pigwą 200 ml",
      lunch:
        "Zupa krem z pomidorów i marchewki z grzankami, natka 250ml (seler, pszenica) Kotleciki rybne z morszczuka w płatkach kukurydzianych 70g (jaja, płatki, wiórki kokosowe), ziemniaczki100g, surówka z kiszonej kapusty i marchewki70g, kompot 200ml",
      snack:
        "bananowy budyń z ryżu na mleku 150ml(mleko- mleko owsiane)",
    },
  };

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className={classes.container}>
      <h4>Menu Bez Nabiału</h4>
      <div className={classes.weekDays}>
        {Object.keys(menu).map((day) => (
          <h5
            key={day}
            onClick={() => handleDayChange(day)}
            className={`${classes.weekDay} ${
              currentDay === day ? classes.activeDay : ""
            }`}
          >
            {day}
          </h5>
        ))}
      </div>
      <div className={classes.description}>
        <div className={classes.item}>
          <h6>Śniadanie</h6>
          <p>{menu[currentDay].breakfast}</p>
        </div>
        <div className={classes.item}>
          <h6>Obiad</h6>
          <p>{menu[currentDay].lunch}</p>
        </div>
        <div className={classes.item}>
          <h6>Podwieczorek</h6>
          <p>{menu[currentDay].snack}</p>
        </div>
      </div>
    </div>
  );
}
