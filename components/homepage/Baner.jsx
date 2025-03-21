"use client";
import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import classes from "./Baner.module.css";
import { motion } from "framer-motion";

export default function Baner() {
  // Warianty animacji dla tekstu
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Warianty animacji dla przycisków
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section>
      <div className={classes.banerContainer}>
        <div className={classes.textContainer}>
          <div className={classes.left}>
            <div>
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Najlepszy Żłobek w Krakowie - <span> Wesołe Wygibasy </span>
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Wesołe Wygibasy to placówka, która powstała z pasji, troski i
                miłości do dzieci. Znajdujemy się w dogodnych lokalizacjach,
                takich jak Prądnik Biały, Olsza, Krowodrza oraz Bronowice –
                idealne dla rodziców z różnych dzielnic Krakowa oraz okolicznych
                miejscowości.
              </motion.p>
              <motion.div
                className={classes.buttonContainer}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button text="Czytaj więcej" href="#czytaj-wiecej" />
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  transition={{ delay: 0.6 }}
                >
                  <Button2 text="Placówki" href="/zlobki" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
