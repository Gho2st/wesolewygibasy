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
                Żłobek <span>Wesołe Wygibasy</span> w Krakowie - Najlepszy Wybór
                dla Twojego Dziecka!
              </h2>
              <p>
                Żłobek Wesołe Wygibasy w Krakowie to miejsce, gdzie każde
                dziecko otoczone jest miłością, szacunkiem i troską. Nasza misja
                to stworzenie bezpiecznego i inspirującego środowiska, które
                wspiera rozwój umiejętności, kreatywności i osobowości maluchów.
              </p>
              <p>
                Nasza lokalizacja na północy Krakowa zapewnia dogodny dostęp dla
                rodziców z takich dzielnic jak Prądnik Biały, Bronowice i
                Krowodrza oraz z pobliskich miejscowości jak Zielonki. Oferujemy
                liczne udogodnienia i atrakcje dla dzieci.
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
                Otrzymujemy pozytywne opinie od rodziców z Krakowa, którzy
                zaufali nam w opiece nad swoimi dziećmi. To dla nas największa
                nagroda i motywacja do ciągłego doskonalenia.
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
