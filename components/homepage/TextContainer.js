"use client";
import Link from "next/link";
import classes from "./TextContainer.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Button from "../UI/Button";

export default function TextContainer() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });

  return (
    <>
      <article className={classes.wrapper} ref={skillRef}>
        <div className={classes.textContainer}>
          <motion.div
            initial={{ x: "-300px", opacity: 0 }}
            animate={
              isSkillRefinView
                ? { x: 0, opacity: 1 }
                : { x: "-300px", opacity: 0 }
            }
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className={classes.left}
          >
            <div>
              <h2>
                Najlepszy Żłobek w Krakowie – Dlaczego Warto Wybrać
                <span> Wesołe Wygibasy?</span>
              </h2>
              <p>
                Żłobek Wesołe Wygibasy w Krakowie to miejsce, gdzie każde
                dziecko otoczone jest miłością, szacunkiem i troską. Nasza misja
                to stworzenie bezpiecznego i inspirującego środowiska, które
                wspiera rozwój umiejętności, kreatywności i osobowości maluchów.
              </p>
              <p>
                Nasza lokalizacja na północy Krakowa zapewnia dogodny dojazd dla
                rodziców z dzielnic takich jak Prądnik Biały, Bronowice,
                Krowodrza oraz z pobliskich miejscowości, w tym Zielonek. Żłobek
                na ulicy Ślicznej mieści się w dzielnicy Olsza, a jego położenie
                sprzyja również mieszkańcom osiedla Oficerskiego, Grzegórzek
                oraz osiedla Avia. Oferujemy liczne udogodnienia i atrakcje dla
                dzieci, aby zapewnić im wszechstronny rozwój w bezpiecznym i
                przyjaznym otoczeniu.
              </p>
              <p>
                Oferujemy opiekę dla dzieci do 3. roku życia. Nasz zespół
                wykwalifikowanych opiekunów zapewnia indywidualne wsparcie
                każdemu dziecku.
              </p>
              <p>
                Program nauczania bazuje na holistycznym podejściu, które
                uwzględnia potrzeby rozwojowe dzieci. Skupiamy się na
                kreatywności, aktywności fizycznej oraz rozwijaniu umiejętności
                społecznych i emocjonalnych.
              </p>
              <p>
                Rodzice z Krakowa cenią sobie nasz żłobek za zaangażowanie i
                troskę, jaką okazujemy dzieciom. Otrzymaliśmy wiele pozytywnych
                opinii, które są dla nas najlepszą rekomendacją. Zaufanie, jakim
                obdarzają nas rodzice, motywuje nas do nieustannego doskonalenia
                naszych usług.
              </p>
            </div>
            <Link href="https://g.page/r/CVSRHQIb-HkkEBM/review">
              <Button text="Zostaw opinię!" fontSize="1rem" />
            </Link>
          </motion.div>
          <motion.div
            className={classes.right}
            initial={{ x: "300px", opacity: 0, rotate: -10 }}
            animate={
              isSkillRefinView
                ? { x: 0, opacity: 1, rotate: 0 }
                : { x: "300px", opacity: 0, rotate: -10 }
            }
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            <Image
              src={"/monkeys/5.gif"}
              width={100}
              height={100}
              layout="responsive"
              alt="Logo Wesołe Wygibasy"
            ></Image>
          </motion.div>
        </div>
      </article>
    </>
  );
}
