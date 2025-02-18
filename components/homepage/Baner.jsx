"use client";
import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import classes from "./Baner.module.css";

export default function Baner() {
  return (
    <section>
      <div className={classes.banerContainer}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <div>
              <h1>
                Najlepszy Żłobek w Krakowie - <span> Wesołe Wygibasy </span>
              </h1>
              <p>
                Wesołe Wygibasy to placówka, która powstała z pasji,
                troski i miłości do dzieci. Znajdujemy się w dogodnych
                lokalizacjach, takich jak Prądnik Biały, Olsza, Krowodrza oraz
                Bronowice – idealne dla rodziców z różnych dzielnic Krakowa oraz
                okolicznych miejscowości.
              </p>
              <div className={classes.buttonContainer}>
                <Button
                  text="Czytaj więcej"
                  href="#czytaj-wiecej"
                />
                <Button2
                  text="Placówki"
                  href="#placówki"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
