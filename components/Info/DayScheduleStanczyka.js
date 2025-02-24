"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";

export default function DayScheduleStanczyka(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2>{props.header}</h2>
          <p>
            Żłobek jest czynny jest czynny w godzinach
            <span> 6:30 do 17:30 </span>
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
              <li>
                6:30 - 8:30 - Schodzenie się dzieci i wspólne zabawy na dywanie
              </li>
              <li>8:30 - 9:00 - Śniadanie</li>
              <li>9:00 - 9:15 - Czas wolny, zabawy dowolne</li>
              <li>9:00 - 10:00 - Przywitanie i zajęcia dodatkowe</li>
              <li>10:00 - 10:15 - Drugie śniadanie</li>
              <li>
                10:15 - 11:00 - Zajęcia edukacyjne, spacery, zajęcia z chustą,
                zajęcia kulinarne, tańcowanie na dywanie, zajęcia plastyczne,
                bajkoterapia, sensoryka itp. (w zależności od planu pracy na
                dany miesiąc i pogody)
              </li>
              <li>11:00 - 11:30 - Obiad</li>
              <li>11:30 - 13:15 - Drzemka</li>
              <li>13:15 - 13:30 - Podwieczorek</li>
              <li>
                13:30 - 15:30 - Wspólne zabawy na dywanie - ogólno rozwojowe
              </li>
              <li>15:30 - 15:45 - Drugi podwieczorek</li>
              <li>
                15:45 - 17:30 - Zabawy wspierające motorykę małą i dużą,
                rozchodzenie się do domów i zakończenie dnia
              </li>
            </ul>
          </div>
        )}
        {isExtraOpen && (
          <div className={classes.extra}>
            <p>
              Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
              Każdego dnia od 9:00 do 10:00 odbywają się inne
              <span> zajęcia dodatkowe.</span>
            </p>
            <ul>
              <li>
                <strong>Poniedziałek:</strong> Dzień tematyczny – zajęcia
                związane z danym tematem tygodnia.
              </li>
              <li>
                <strong>Wtorek:</strong> Rytmika – zajęcia muzyczno-ruchowe
                wspierające koordynację i poczucie rytmu.
              </li>
              <li>
                <strong>Środa:</strong> Język angielski – nauka przez zabawę,
                śpiew i ruch.
              </li>
              <li>
                <strong>Czwartek:</strong> Logopedia
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
