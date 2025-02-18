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
              <h2>Jak dbamy o dzieci w naszym żłobku?</h2>

              <div className={classes.cardContainer}>
                <div className={`${classes.card} ${classes.card1}`}>
                  <FaHeart />
                  <h3>Miłość i troska</h3>
                  <p>
                    Wesołe Wygibasy to przestrzeń, w której każde dziecko jest
                    otoczone opieką, szacunkiem i wsparciem. Tworzymy
                    inspirujące środowisko, które sprzyja rozwojowi
                    umiejętności, kreatywności i osobowości maluchów.
                  </p>
                </div>
                <div className={`${classes.card} ${classes.card2}`}>
                  <FaLocationDot />
                  <h3>Dogodna lokalizacja w Krakowie</h3>
                  <p>
                    Nasze placówki są łatwo dostępne dla mieszkańców Prądnika
                    Białego, Bronowic, Krowodrzy i Zielonek. Oddział na ul.
                    Ślicznej w Olszy to doskonały wybór dla rodziców z osiedla
                    Oficerskiego, Grzegórzek i Avia.
                  </p>
                </div>
                <div className={`${classes.card} ${classes.card3}`}>
                  <GiTeacher />
                  <h3>Profesjonalna kadra opiekunów</h3>

                  <p>
                    Oferujemy opiekę dla dzieci do 3. roku życia. Nasz zespół
                    wykwalifikowanych opiekunów zapewnia indywidualne wsparcie
                    każdemu dziecku oraz spokój dla rodziców.
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
