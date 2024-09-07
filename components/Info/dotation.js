"use client";
import Modal from "react-modal";
import classes from "./dotation.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";
export default function Dotation() {
  const [showModal, setShowModal] = useState(false);
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <article>
        <div className={classes.container} ref={skillRef}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isSkillRefinView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.85 }
            }
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <div className={classes.innerContainer}>
              <div>
                <h2>Kraków, Żłobek w Naszym Mieście</h2>
                <h3>Dofinansowanie</h3>
              </div>
              <div>
                <Image
                  src={"/krakow1.jpg"}
                  height={95}
                  width={200}
                  alt=""
                ></Image>
              </div>
            </div>

            <p>
              W 2024 r. Gmina Miejska Kraków udziela dotacji na dzieci objęte
              opieką. Kwota udzielanej przez Gminę Miejską Kraków dotacji wynosi
              3,50 zł za godzinę opieki nad dzieckiem. <br></br>
              <br></br> Zgodnie z podpisaną z Gminą Miejską Kraków umową w tym
              zakresie, w okresie otrzymywania dotacji, pomniejszamy wysokość
              miesięcznych opłat za objęcie opieką dziecka o kwotę nie niższą
              niż kwota otrzymanej od Gminy Miejskiej Kraków dotacji na dane
              dziecko. Miesięczna kwota o jaką obniżane są opłaty za opiekę
              wyliczana jest wg wzoru: liczba godzin zapewniania opieki dziecku
              w danym miesiącu (liczona na podstawie zawartej z rodzicem umowy o
              zapewnianie opieki, jednakże nie więcej niż 10 godzin dziennie) x
              3,50zł.
              <br></br>
              <br></br> W przypadku objęcia opieką dziecka z orzeczeniem o
              niepełnosprawności Gmina Miejska Kraków udziela dodatkowej dotacji
              w wysokości 6,00zł za każdą godzinę opieki nad dzieckiem. Dotacja
              ta nie ma wpływu na wysokość opłat ponoszonych przez rodzica.
              <br></br>
              <br></br> Jednocześnie informujemy, że dotacja i ww. postanowienia
              dotyczą wyłącznie dzieci zamieszkałych na terenie miasta Krakowa.{" "}
              <br></br> <br></br> Ewentualne uwagi dotyczące udzielanych dotacji
              należy kierować do Wydziału Polityki Społecznej i Zdrowia Urzędu
              Miasta Krakowa, <br></br>
              <br></br> ul. Dekerta 24, 30-703 Kraków tel. 12 616 97 97, pokój
              nr 34 <br></br>
              <br></br> e-mail: sz.umk@um.krakow.pl
            </p>
            <button
              onClick={handleOpenModal}
              className={classes.openModal__button}
            >
              Zapoznaj się z całą treścią
            </button>
            <Modal
              isOpen={showModal}
              onRequestClose={handleCloseModal}
              contentLabel="Pełna treść"
              className={classes.modal}
            >
              <div className={classes.modalContent}>
                <button
                  onClick={handleCloseModal}
                  className={classes.closeButton}
                >
                  &times;
                </button>
                <Image
                  src={"/krakow2.png"}
                  height={300}
                  width={300}
                  layout="responsive"
                  alt=""
                />
              </div>
            </Modal>
          </motion.div>
        </div>
      </article>
    </>
  );
}
