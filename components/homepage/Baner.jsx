"use client";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Baner.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Baner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={classes.banerContainer}>
        <div className={classes.textContainer}>
          <div>
            <h1>
              Najlepszy <span className={classes.span}>Żłobek</span> dla Twoich
              dzieci.
            </h1>
            <p>
              <span className={classes.wesole}>Wesołe Wygibasy</span> to
              miejsce, które powstało z pasji, wielkiej troski i miłości do
              dzieci.
              <br></br> <br></br>
              Dzieci zasługują by myśleć, ze mogą zmienić świat
            </p>
            <div className={classes.buttonContainer}>
              <Link href="#czytaj-wiecej">
                <Button text="Czytaj więcej" fontSize="1rem" />
              </Link>
              <Link href="#placowki">
                <Button
                  text="Nasze placówki"
                  background="#7C99E5"
                  fontSize="1rem"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
