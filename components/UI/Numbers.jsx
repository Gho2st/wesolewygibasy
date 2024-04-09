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
      <div className={classes.numbers}>
        <p
          onClick={() => {
            setIsKlubMalucha(!isKlubMalucha);
            setIsGlogera(false);
            setIsStanczyka(false);
            setIsSliczna(false);
          }}
        >
          1
        </p>
        <p
          onClick={() => {
            setIsGlogera(!isGlogera);
            setIsKlubMalucha(false);
            setIsStanczyka(false);
            setIsSliczna(false);
          }}
        >
          2
        </p>
        <p
          onClick={() => {
            setIsStanczyka(!isStanczyka);
            setIsGlogera(false);
            setIsSliczna(false);
            setIsKlubMalucha(false);
          }}
        >
          3
        </p>
        <p
          onClick={() => {
            setIsSliczna(!isSliczna);
            setIsGlogera(false);
            setIsKlubMalucha(false);
            setIsStanczyka(false);
          }}
        >
          4
        </p>
      </div>
      {isKlubMalucha && (
        <div className={classes.itemContainer}>
          <h5>Klub Malucha</h5>
          <p>Nasz numer to:</p>
          <p className={classes.number}>7330.2.16.2017</p>
        </div>
      )}
      {isGlogera && (
        <div className={classes.itemContainer}>
          <h5>Niepubliczny Żłobek ul. Glogera</h5>
          <p>Nasz numer to:</p>
          <p className={classes.number}>7330.2.16.2017</p>
        </div>
      )}
      {isStanczyka && (
        <div className={classes.itemContainer}>
          <h5>Niepubliczny Żłobek ul. Stańczyka</h5>
          <p>Nasz numer to:</p>
          <p className={classes.number}>7330.2.7.2023</p>
        </div>
      )}
      {isSliczna && (
        <div className={classes.itemContainer}>
          <h5>Niepubliczny Żłobek ul. Śliczna</h5>
          <p>Nasz numer to:</p>
          <p className={classes.number}>Wkrótce</p>
        </div>
      )}
    </>
  );
}
