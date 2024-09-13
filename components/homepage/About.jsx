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
    <article className={classes.wrapper} ref={skillRef}>
      <div className={classes.container} id="czytaj-wiecej">
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
            alt="logo"
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
              Poczytaj o Naszej Pracy i Zapisz Swoje Dziecko w Żłobku Wesołe
              Wygibasy w Krakowie
            </h2>
            <p className={classes.text}>
              W Żłobku Wesołe Wygibasy w Krakowie naszym priorytetem jest
              zapewnienie opieki nad dziećmi na najwyższym poziomie. Wiemy, że
              rodzice powierzają nam swój największy skarb, dlatego dokładamy
              wszelkich starań, aby dać im pełne poczucie bezpieczeństwa.
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
              <Link href="/o-nas">
                <Button text="O nas" fontSize="0.9rem" />
              </Link>
              <div className={classes.ownerContainer}>
                <Image
                  className={classes.aga}
                  src={"/others/aga3.png"}
                  width={55}
                  height={55}
                  alt="Agnieszka Ciołkowska - Właścicielka Wesołych Wygibasów"
                ></Image>
                <div className={classes.phoneContainer}>
                  <p className={classes.phone}>+48 697 560 022</p>
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
