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
    <article>
      <div className={classes.banerContainer}>
        <div className={classes.textContainer} ref={skillRef}>
          <motion.div className={classes.left}>
            <div>
              <h1>Najlepszy Żłobek w Krakowie - Wesołe Wygibasy</h1>
              <p>
                <span className={classes.wesole}>Wesołe Wygibasy</span> to
                żłobek w Krakowie, który powstał z pasji, troski i miłości do
                dzieci. Nasze placówki oferują bezpieczne i inspirujące
                środowisko dla Twojego malucha.
              </p>
              <div className={classes.buttonContainer}>
                <Link href="#czytaj-wiecej">
                  <Button text="Czytaj więcej" fontSize="1rem" />
                </Link>
                <Link href="#placowki">
                  <Button
                    text="Placówki"
                    background="#7C99E5"
                    fontSize="1rem"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
