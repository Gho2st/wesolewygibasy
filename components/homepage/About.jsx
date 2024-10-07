"use client";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./About.module.css";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";

export default function About() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });

  return (
    <article className={classes.wrapper} ref={skillRef} id="czytaj-wiecej">
      <div className={classes.container}>
        <motion.div
          className={classes.imageContainer}
          initial={{ x: "-350px", opacity: 0 }}
          animate={
            isSkillRefinView
              ? { x: 0, opacity: 1 }
              : { x: "-350px", opacity: 0 }
          }
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <Image
            src={"/monkeys/4.gif"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
            alt="Skacząca maskotka małpka Żłobka Wesołe Wygibasy w Krakowie"
          ></Image>
        </motion.div>
        <motion.div
          initial={{ x: "350px", opacity: 0 }}
          animate={
            isSkillRefinView ? { x: 0, opacity: 1 } : { x: "350px", opacity: 0 }
          }
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className={classes.textContainer}
        >
          <div>
            <h2>
              Dlaczego warto zapisać dziecko do żłobka{" "}
              <span> Wesołe Wygibasy</span> w Krakowie?
            </h2>
            <p className={classes.text}>
              Nasz priorytet to profesjonalna i pełna troski opieka nad dziećmi.
              Wesołe Wygibasy to żłobek, gdzie Twoje dziecko znajdzie nie tylko
              bezpieczeństwo, ale również wsparcie w rozwoju umiejętności
              społecznych, emocjonalnych i fizycznych.
            </p>
            <div className={classes.itemContainer}>
              <div className={classes.item}>
                <div className={classes.checkContainer}>
                  <FaCircleCheck
                    className={classes.icon}
                    style={{ color: "#FDCB56" }}
                  />
                </div>
                <p>Wykwalifikowana Kadra</p>
              </div>
              <div className={classes.item}>
                <div className={classes.checkContainer}>
                  <FaCircleCheck
                    className={classes.icon}
                    style={{ color: "#7C9BE6" }}
                  />
                </div>
                <p>Czas na zabawę</p>
              </div>
              <div className={classes.item}>
                <div className={classes.checkContainer}>
                  <FaCircleCheck
                    className={classes.icon}
                    style={{ color: "#04C9C8" }}
                  />
                </div>
                <p>Bezpieczeństwo</p>
              </div>
              <div className={classes.item}>
                <div className={classes.checkContainer}>
                  <FaCircleCheck
                    className={classes.icon}
                    style={{ color: "#FC7E05" }}
                  />
                </div>
                <p>Rodzinna atmosfera</p>
              </div>
            </div>
            <div className={classes.contactInfoContainer}>
              <div>
                <Link href="/o-nas">
                  <Button text="O nas" fontSize="0.9rem" background="#B30505" />
                </Link>
                <Link href="/zapisy">
                  <Button
                    text="Zapisy"
                    fontSize="0.9rem"
                    background="#2348A9"
                  />
                </Link>
              </div>
              <div className={classes.ownerContainer}>
                <Image
                  className={classes.aga}
                  src={"/others/aga3.png"}
                  width={75}
                  height={75}
                  alt="Agnieszka Ciołkowska - Właścicielka Żłobka Wesołe Wygibasy"
                ></Image>
                <div className={classes.phoneContainer}>
                  <Link href={"tel:+48697560022"} className={classes.phone}>
                    <p>+48 697 560 022</p>
                  </Link>

                  <p className={classes.ownerDescription}>
                    Właścicielka Wesołych Wygibasów
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
