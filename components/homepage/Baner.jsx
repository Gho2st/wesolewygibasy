"use client";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Baner.module.css";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";
import Image from "next/image";

export default function Baner() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef);
  return (
    <div className={classes.banerContainer}>
      <Link href="/" className={classes.logo__link}>
        <Image
          src={"/others/logo.png"}
          width={100}
          height={55}
          alt="logo firmy Wesołe Wygibasy"
          className={classes.logoImage}
        ></Image>
      </Link>
      <div className={classes.textContainer} ref={skillRef}>
        <motion.div
          initial={{ x: "-900px", opacity: 0, rotate: -10 }}
          animate={
            isSkillRefinView
              ? { x: 0, opacity: 1, rotate: 0 }
              : { x: "-900px", opacity: 0, rotate: -10 }
          }
          transition={{ delay: 0.11, duration: 0.7, ease: "easeOut" }}
          className={classes.left}
        >
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
              Dzieci zasługują by myśleć, że mogą zmienić świat!
            </p>
            <div className={classes.buttonContainer}>
              <Link href="#czytaj-wiecej">
                <Button text="Czytaj więcej" fontSize="1rem" />
              </Link>
              <Link href="#placowki">
                <Button text="Placówki" background="#7C99E5" fontSize="1rem" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
