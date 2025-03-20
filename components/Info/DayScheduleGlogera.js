"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";

export default function DayScheduleGlogera(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2>{props.header}</h2>
          <p>
            Żłobek jest czynny jest czynny w godzinach
            <span> 6:30 do 17:00 </span>
            Bardzo proszę aby przyprowadzać dziecko do godziny
            <span> 08:30 </span>
          </p>
          <p>
            Jeśli dziecko nie zostaje na leżakowanie (wychodzi po obiedzie) to
            proszę odebrać dziecko do godziny <span>11:30</span>
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <button
            onClick={() => {
              setIsDayScheduleOpen(!isDayScheduleOpen);
              setIsExtraOpen(false);
            }}
            className={classes.button}
          >
            Plan Zajęć
          </button>
          <button
            onClick={() => {
              setIsExtraOpen(!isExtraOpen);
              setIsDayScheduleOpen(false);
            }}
            className={classes.button}
          >
            Zajęcia Dodatkowe
          </button>
        </div>
        {isDayScheduleOpen && (
          <div className={classes.daySchedule}>
            <ul>
              <li>6:30 - 8:15 - Schodzenie się dzieci do żlobka</li>
              <li>8:15 - 8:30 - Powitanie z instrumentami</li>
              <li>8:30 - 9:00 - Śniadanie</li>
              <li>9:00 - 10:00 - Zajęcia Dodatkowe</li>
              <li>10:15 - 11:00 - Zabawa swobodna / spacer</li>
              <li>11:00 - 11:30 - Obiad</li>
              <li>12:00 - 13:45 - Drzemka</li>
              <li>14:00 - 14:15 - Podwieczorek</li>
              <li>
                14:15 - 16:00 - Zabawy edukacyjne oraz wspierające motorykę małą
                i dużą
              </li>
              <li>16:00 - 16:15 - Drugi podwieczorek</li>
              <li>16:15 - 17:00 - Zabawy swobodne</li>
              <li>17:00 - Zakończenie dnia</li>
            </ul>
          </div>
        )}
        {isExtraOpen && (
          <div className={classes.extra}>
            <p>
              Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
              Każdego dnia od 9:00 do 10:00 odbywają się inne{" "}
              <span> zajęcia dodatkowe.</span>
            </p>
            <ul>
              <li>
                <strong>Poniedziałek:</strong> Język angielski – nauka przez
                zabawę, śpiew i ruch.
              </li>
              <li>
                <strong>Wtorek:</strong> Logorytmika – ćwiczenia łączące ruch,
                rytm i mowę, wspierające rozwój językowy.
              </li>
              <li>
                <strong>Środa:</strong> Rytmika – zajęcia muzyczno-ruchowe
                wspierające koordynację i poczucie rytmu.
              </li>
              <li>
                <strong>Czwartek:</strong> Dzień tematyczny – zajęcia związane z
                danym tematem tygodnia.
              </li>
              <li>
                <strong>Piątek:</strong> Dogoterapia lub Gordonki – kontakt z
                psem terapeutycznym lub zajęcia muzyczne inspirowane teorią
                Gordona.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
