"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";

export default function DaySchedule(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2>{props.header}</h2>
          <p>
            Żłobek jest czynny jest czynny w godzinach{" "}
            <span> 7:00 do {props.time} </span>
            Bardzo proszę aby przyprowadzać dziecko do godziny
            <span> 08:30 </span>
          </p>
          <p>
            Jeśli dziecko nie zostaje na leżakowanie (wychodzi po obiedzie) to
            proszę odebrać dziecko do godziny <span>11:30</span>
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <div
            onClick={() => {
              setIsDayScheduleOpen(!isDayScheduleOpen);
              setIsExtraOpen(false);
            }}
            className={classes.header}
          >
            <div className={classes.header2}>
              <h3>Codzienny plan zajęć dla dzieci</h3>
            </div>
          </div>

          <div
            onClick={() => {
              setIsExtraOpen(!isExtraOpen);
              setIsDayScheduleOpen(false);
            }}
            className={classes.header}
          >
            <div className={classes.header2}>
              <h3>Zajęcia Dodatkowe</h3>
            </div>
          </div>
        </div>
        {isDayScheduleOpen && (
          <div className={classes.daySchedule}>
            <ul>
              <li>7:00 - Powitanie dzieci</li>
              <li>8:30 - 9:00 - Śniadanie</li>
              <li>9:00 - 9:15 - Czas wolny, zabawy dowolne</li>
              <li>9:15 - 9:45 - Zajęcia dydaktyczne i edukacyjne</li>
              <li>9:45 - 10:00 - Przerwa na przekąskę</li>
              <li>
                10:00 - Zabawy na świeżym powietrzu (w zależności od pogody)
              </li>
              <li>11:00 - 11:30 - Obiad</li>
              <li>11:30 - 13:30 - Drzemka</li>
              <li>
                <em>
                  W przypadku gdy dziecko nie zostaje na drzemkę - prosimy o
                  odbiór do 11:30.
                </em>
              </li>
              <li>
                13:30 - 14:00 - Zajęcia popołudniowe (zabawy kreatywne,
                plastyczne)
              </li>
              <li>14:30 - 17:00 - Podwieczorek i czas wolny</li>
              <li>
                <em>Rozchodzenie się dzieci do domów.</em>
              </li>
              <li>17:30 - Zakończenie dnia</li>
            </ul>
          </div>
        )}
        {isExtraOpen && (
          <div className={classes.extra}>
            <p>
              Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
              Każdego dnia odbywają się inne <span> zajęcia dodatkowe.</span>
            </p>
            <p>Zajęcia logopedyczne</p>
            <p>Język Angielski</p>
            <p>Rytmika - prowadzona przez znakomitego muzyka Pana Patryka</p>
            <p>
              Temat tygodnia - w tym dniu dzieci rozmawiają oraz tworzą pracę
              plastyczną na temat wybrany przez opiekunów np. dzień kota, dzień
              pizzy czy powitanie wiosny.
            </p>
            <p>
              Dogoterapia prowadzona przez Panią Marzenę Hrykałło-Horowska
              zoofizjoterapeuta i dogoterapeuta <br></br> <br></br> Zajęcia
              umuzykalniające prowadzone według teorii Edwina Eliasa Gordona
              prowadzonę przez Melobobas
            </p>
            <h4>Dodatkowo</h4>
            <p>
              Bajkoterapia, zajęcia kulinarne, zajęcia teatralne, sensoplastyka
              oraz comiesięczne koncerty muzyki klasycznej
            </p>
            <h5>
              Wszystkie zajęcia odbywają się w godzinach{" "}
              <span> 09:00 – 10:00</span>
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}
