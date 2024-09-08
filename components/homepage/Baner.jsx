"use client";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Baner.module.css";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";
import Image from "next/image";

export default function Baner() {
  const text = "Najlepszy Żłobek w Krakowie - Wesołe Wygibasy".split(" ");
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef);
  return (
    <article>
      <div className={classes.banerContainer}>
        <div className={classes.textContainer} ref={skillRef}>
          <div className={classes.left}>
            <div>
              <h1>
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </h1>
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
          </div>
        </div>
      </div>
    </article>
  );
}
