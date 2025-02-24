"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";

export default function DayScheduleVetulaniego(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(true);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2>{props.header}</h2>
          <p>
            Żłobek jest czynny jest czynny w godzinach
            <span> 7:00 do 17:00 </span>
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
              <li>7:00 - 8:30 - Schodzenie się dzieci, zabawy na dywanie.</li>
              <li>8:30 - 9:00 - Czas na śniadanko</li>
              <li>
                9:00 - 9:15 - Witamy się śpiewając i grając na instrumentach
              </li>
              <li>9:15 - 9:45 - Zajęcia dodatkowe</li>
              <li>9:50 - 10:10 - Drugie śniadanie</li>
              <li>10:10 - 11:00 - Spacer lub zabawy w ogrodzie</li>
              <li>11:00 - 11:30 - Obiad (drugie danie)</li>
              <li>11:50 - 13:30 - Drzemka</li>
              <li>13:30 - 14:00 - Obiad (zupa)</li>
              <li>14:00 - 15:00 - Zabawy swobodne</li>
              <li>15:00 - 15:15 - Podwieczorek</li>
              <li>
                15:15 - 17:00 - Zabawy edukacyjne, wspierające motorykę małą i
                duża, zabawy ogólno rozwojowe oraz rozchodzenie się dzieci
                zakończenie dnia.
              </li>
            </ul>
          </div>
        )}
        {isExtraOpen && (
          <div className={classes.extra}>
            <p>
              Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
              Każdego dnia od 9:15 do 9:45 odbywają się inne
              <span> zajęcia dodatkowe.</span>
            </p>
            <ul>
              <li>
                <strong>Poniedziałek:</strong> Język angielski – nauka przez
                zabawę, śpiew i ruch.
              </li>
              <li>
                <strong>Wtorek:</strong> Logopedia
              </li>
              <li>
                <strong>Środa:</strong> Rytmika dla smyka
              </li>
              <li>
                <strong>Czwartek:</strong> Nasz dzień tematyczny, jak i również
                zajecia kulinarne, zajęcia sportowe, zajęcia plastyczne, zajęcia
                ogólno rozwojowe.
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
