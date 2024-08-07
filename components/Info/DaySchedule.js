"use client";
import Link from "next/link";
import classes from "./DaySchedule.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DaySchedule(props) {
  const [isDayScheduleOpen, setIsDayScheduleOpen] = useState(false);
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return (
    <div className={classes.container}>
      <h2>{props.header}</h2>
      <p>
        Żłobek jest czynny jest czynny w godzinach <span> 7:00 do {props.time}</span>
        <br></br> Bardzo proszę aby przyprowadzać dziecko do godziny
        <span> 08:30</span>
        <br></br>Jeśli dziecko nie zostaje na leżakowanie (wychodzi po obiedzie)
        to proszę odebrać dziecko do godziny <span>11:30</span>
      </p>
      <div
        onClick={() => {
          setIsDayScheduleOpen(!isDayScheduleOpen);
        }}
        className={classes.header}
      >
        <div className={classes.header2}>
          <h3>Plan Dnia</h3>
        </div>
        <div className={classes.icon}>
          <IoIosArrowDown />
        </div>
      </div>
      {isDayScheduleOpen && (
        <div className={classes.daySchedule}>
          <h4>7:00</h4>
          <p>Otwarcie placówki</p>
          <h4>8:30 - 9:00</h4>
          <p>Śniadanie</p>
          <h4>9:00 - 9:15</h4>
          <p>Przywitanie</p>
          <h4>9:15 - 9:45</h4>
          <p>Zajęcia rozwojowo - edukacyjne</p>
          <h4>9:45 - 10:00</h4>
          <p>Drugie Śniadanie</p>
          <h4>10:00</h4>
          <p>Wyjście na spacer</p>
          <h4>11:00 - 11:30</h4>
          <p>Obiad</p>
          <h4>11:30 - 13:30</h4>
          <p>Drzemka</p>
          <h5>W przypadku gdy dziecko nie zostaje na drzemke - proszę odebrać do 11:30.</h5>
          <h4>13:30 - 14:00</h4>
          <p>Podwieczorek</p>
          <h4>14:30 - 17:00</h4>
          <p>
            Swobodne zabawy w żłobku i na zewnątrz, czas oczekiwania na
            przyjście rodziców.
          </p>
          <h5>Rozchodzenie się do domów.</h5>
          <h4>17:30</h4>
          <p>Zamknięcie placówki</p>
        </div>
      )}
      <div
        onClick={() => {
          setIsExtraOpen(!isExtraOpen);
        }}
        className={classes.header}
      >
        <div className={classes.header - 2}>
          <h3>Zajęcia Dodatkowe</h3>
        </div>
        <div className={classes.icon}>
          <IoIosArrowDown />
        </div>
      </div>
      {isExtraOpen && (
        <div className={classes.extra}>
          <p>
            Dziecko otrzymuje w naszym żłobku <span> moc atrakcji. </span>
            Każdego dnia odbywają się inne <span> zajęcia dodatkowe.</span>
          </p>
          {/* <h4>Poniedziałek</h4> */}
          <p>Zajęcia logopedyczne</p>
          {/* <h4>Wtorek</h4> */}
          <p>Język Angielski</p>
          {/* <h4>Środa</h4> */}
          <p>Rytmika - prowadzona przez znakomitego muzyka Pana Patryka</p>
          {/* <h4>Czwartek</h4> */}
          <p>
            Temat tygodnia - w tym dniu dzieci rozmawiają oraz tworzą pracę
            plastyczną na temat wybrany przez opiekunów np. dzień kota, dzień
            pizzy czy powitanie wiosny.
          </p>
          {/* <h4>Piątek</h4> */}
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
          <h5>Wszystkie zajęcia odbywają się w godzinach 09:00 – 10:00</h5>
        </div>
      )}
    </div>
  );
}
