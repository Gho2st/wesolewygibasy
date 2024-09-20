"use client";
import Link from "next/link";
import classes from "./TextContainer.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Button from "../UI/Button";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

export default function TextContainer() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });

  return (
    <>
      <section className={classes.wrapper} ref={skillRef}>
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
                Nasze podejście do opieki nad dziećmi w{" "}
                <span>Wesołych Wygibasach</span>
              </h2>

              <div className={classes.cardContainer}>
                <div className={`${classes.card} ${classes.card1}`}>
                  <FaHeart />
                  <h3>Miłość i troska</h3>
                  <p>
                    Żłobek Wesołe Wygibasy w Krakowie to miejsce, gdzie każde
                    dziecko otoczone jest miłością, szacunkiem i troską. Nasza
                    misja to stworzenie bezpiecznego i inspirującego środowiska,
                    które wspiera rozwój umiejętności, kreatywności i osobowości
                    maluchów.
                  </p>
                </div>
                <div className={`${classes.card} ${classes.card2}`}>
                  <FaLocationDot />
                  <h3>Dogodna lokalizacja w Krakowie</h3>
                  <p>
                    Nasza lokalizacja na północy Krakowa zapewnia dogodny dojazd
                    dla rodziców z dzielnic takich jak Prądnik Biały, Bronowice,
                    Krowodrza oraz z pobliskich miejscowości, w tym Zielonek.
                    Żłobek na ulicy Ślicznej mieści się w dzielnicy Olsza, a
                    jego położenie sprzyja również mieszkańcom osiedla
                    Oficerskiego, Grzegórzek oraz osiedla Avia.
                  </p>
                </div>
                <div className={`${classes.card} ${classes.card3}`}>
                  <GiTeacher />
                  <h3>Profesjonalna kadra opiekunów</h3>

                  <p>
                    Oferujemy opiekę dla dzieci do 3. roku życia. Nasz zespół
                    wykwalifikowanych opiekunów zapewnia indywidualne wsparcie
                    każdemu dziecku.
                  </p>
                </div>
                <div className={`${classes.card} ${classes.card4}`}>
                  <FaBook />
                  <h3>Holistyczne podejście</h3>

                  <p>
                    Program nauczania bazuje na holistycznym podejściu, które
                    uwzględnia potrzeby rozwojowe dzieci. Skupiamy się na
                    kreatywności, aktywności fizycznej oraz rozwijaniu
                    umiejętności społecznych i emocjonalnych.
                  </p>
                </div>
              </div>
            </div>
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
      </section>
    </>
  );
}
