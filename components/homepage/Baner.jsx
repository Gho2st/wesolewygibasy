"use client";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Baner.module.css";

export default function Baner() {
  return (
    <article>
      <div className={classes.banerContainer}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <div>
              <h1>Najlepszy Żłobek w Krakowie - Wesołe Wygibasy</h1>
              <p>
                Wesołe Wygibasy to żłobek w Krakowie, który powstał z pasji,
                troski i miłości do dzieci. Znajdujemy się w dogodnych
                lokalizacjach, takich jak Prądnik Biały, Olsza, Krowodrza oraz
                Bronowice – idealne dla rodziców z różnych dzielnic Krakowa oraz
                okolicznych miejscowości.
              </p>
              <div className={classes.buttonContainer}>
                <Link href="#czytaj-wiecej">
                  <Button text="Czytaj więcej" fontSize="1rem" />
                </Link>
                <Link href="#placowki">
                  <Button
                    text="Placówki"
                    background="#7C99E5"
                    fontSize="1rem"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
