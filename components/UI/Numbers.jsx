"use client";
import { useState } from "react";
import classes from "./Numbers.module.css";

export default function Numbers() {
  const [isKlubMalucha, setIsKlubMalucha] = useState(true);
  const [isStanczyka, setIsStanczyka] = useState(false);
  const [isSliczna, setIsSliczna] = useState(false);
  const [isGlogera, setIsGlogera] = useState(false);

  return (
    <>
      <div className={classes.numbersContainer}>
        <div className={classes.numbers}>
          <span
            onClick={() => {
              setIsKlubMalucha(!isKlubMalucha);
              setIsGlogera(false);
              setIsStanczyka(false);
              setIsSliczna(false);
            }}
          >
            1
          </span>
          <span
            onClick={() => {
              setIsGlogera(!isGlogera);
              setIsKlubMalucha(false);
              setIsStanczyka(false);
              setIsSliczna(false);
            }}
          >
            2
          </span>
          <span
            onClick={() => {
              setIsStanczyka(!isStanczyka);
              setIsGlogera(false);
              setIsSliczna(false);
              setIsKlubMalucha(false);
            }}
          >
            3
          </span>
          <span
            onClick={() => {
              setIsSliczna(!isSliczna);
              setIsGlogera(false);
              setIsKlubMalucha(false);
              setIsStanczyka(false);
            }}
          >
            4
          </span>
        </div>
        {isKlubMalucha && (
          <div className={classes.itemContainer}>
            <h3 className="">Klub Malucha ul. Vetulaniego</h3>
            <p>Nasz numer to:</p>
            <p className={classes.number}>7330.2.16.2017</p>
          </div>
        )}
        {isGlogera && (
          <div className={classes.itemContainer}>
            <h3>Niepubliczny Żłobek ul. Glogera</h3>
            <p>Nasz numer to:</p>
            <p className={classes.number}>7330.2.16.2017</p>
          </div>
        )}
        {isStanczyka && (
          <div className={classes.itemContainer}>
            <h3>Niepubliczny Żłobek ul. Stańczyka</h3>
            <p>Nasz numer to:</p>
            <p className={classes.number}>7330.2.7.2023</p>
          </div>
        )}
        {isSliczna && (
          <div className={classes.itemContainer}>
            <h3>Niepubliczny Żłobek ul. Śliczna</h3>
            <p>Nasz numer to:</p>
            <p className={classes.number}>7330.1.15.2024</p>
          </div>
        )}
      </div>
    </>
  );
}
