"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";

export default function DayScheduleSliczna(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2>{props.header}</h2>
          <p>
            Żłobek jest czynny jest czynny w godzinach
            <span> 7:00 do 17:30 </span>
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
              <li>
                <span>7:00 - 8:30</span> - Schodzenie się dzieci. Przychodzą do
                żłobka, witają się z opiekunami i kolegami. To czas na swobodną
                zabawę,
              </li>
              <li>
                <span>8:30 - 9:00</span> - Śniadanie
              </li>
              <li>
                <span>9:00</span> - Przywitanie na dywanie. Po śniadaniu dzieci
                zbierają się w kręgu na dywanie. Wspólnie śpiewają piosenki,
                używając instrumentów, bawią się w pokazywanki i aktywizujące
                zabawy ruchowe.
              </li>
              <li>
                <span>9:00 - 11:00</span> - Zajęcia Dodatkowe
              </li>

              <li>
                <span>10:00 - 10:15</span> - Drugie Śniadanie
              </li>
              <li>
                <span>11:00</span> - Obiad
              </li>
              <li>
                <span>11:45 - 13:30</span> - Drzemka Czas na odpoczynek i
                regenerację sił.
              </li>
              <li>
                <span>13:30</span> - Podwieczorek
              </li>
              <li>
                <span>14:00 - 15:30</span> - Zabawy swobodne i zorganizowane
                Dzieci bawią się w kącikach tematycznych, uczestniczą w zabawach
                plastycznych, konstrukcyjnych lub ruchowych.
              </li>
              <li>
                <span>15:30</span> - Drugi podwieczorek
              </li>
              <li>
                <span>16:00 - 17:30</span> - Zabawy i odbiór dzieci. Czas na
                ostatnie zabawy, czytanie książeczek i stopniowe odbieranie
                dzieci przez rodziców.
              </li>
            </ul>
          </div>
        )}
        {isExtraOpen && (
          <div className={classes.extra}>
            <p>
              Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
              Każdego dnia od 9:00 do 11:00 odbywają się inne{" "}
              <span> zajęcia dodatkowe.</span>
            </p>
            <ul>
              <li>
                <strong>Poniedziałek:</strong> Dzień tematyczny – zajęcia
                związane z danym tematem tygodnia.
              </li>
              <li>
                <strong>Wtorek:</strong> Logorytmika – ćwiczenia łączące ruch,
                rytm i mowę, wspierające rozwój językowy.
              </li>
              <li>
                <strong>Środa:</strong> Język angielski – nauka przez zabawę,
                śpiew i ruch.
              </li>
              <li>
                <strong>Czwartek:</strong> Rytmika – zajęcia muzyczno-ruchowe
                wspierające koordynację i poczucie rytmu.
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
