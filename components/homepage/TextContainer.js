"use client";
import { motion } from "framer-motion";
import classes from "./TextContainer.module.css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

export default function TextContainer() {
  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <h2>
              Jak <span> dbamy </span> o dzieci w naszym żłobku?
            </h2>

            <div className={classes.cardContainer}>
              <div className={`${classes.card} ${classes.card1}`}>
                <div className={classes.iconContainer}>
                  <FaHeart />
                </div>
                <h3>Miłość i troska</h3>
                <p>
                  Wesołe Wygibasy to przestrzeń, w której każde dziecko jest
                  otoczone opieką, szacunkiem i wsparciem. Tworzymy inspirujące
                  środowisko, które sprzyja rozwojowi umiejętności, kreatywności
                  i osobowości maluchów.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card2}`}>
                <div className={classes.iconContainer}>
                  <FaLocationDot />
                </div>
                <h3>Dogodna lokalizacja w Krakowie</h3>
                <p>
                  Nasze placówki są łatwo dostępne dla mieszkańców Prądnika
                  Białego, Bronowic, Krowodrzy i Zielonek. Oddział na ul.
                  Ślicznej w Olszy to doskonały wybór dla rodziców z osiedla
                  Oficerskiego, Grzegórzek i Avia.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card3}`}>
                <div className={classes.iconContainer}>
                  <GiTeacher />
                </div>
                <h3>Profesjonalna kadra opiekunów</h3>
                <p>
                  Oferujemy opiekę dla dzieci do 3. roku życia. Nasz zespół
                  wykwalifikowanych opiekunów zapewnia indywidualne wsparcie
                  każdemu dziecku oraz spokój dla rodziców.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card4}`}>
                <div className={classes.iconContainer}>
                  <FaBook />
                </div>
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

          <div className={classes.right}>
            <Image
              src={"/monkeys/5.gif"}
              width={100}
              height={100}
              layout="responsive"
              alt="Logo Wesołe Wygibasy"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
