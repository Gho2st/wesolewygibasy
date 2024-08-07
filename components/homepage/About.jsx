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
  const isSkillRefinView = useInView(skillRef);

  return (
    <div className={classes.container} id="czytaj-wiecej" ref={skillRef}>
      <div className={classes.imageContainer}>
        <Image
          src={"/monkeys/4.gif"}
          width={100}
          height={100}
          layout="responsive"
          className={classes.image}
          alt="logo"
        ></Image>
      </div>

      <motion.div
        initial={{ x: "900px", opacity: 0, rotate: 10 }}
        animate={
          isSkillRefinView
            ? { x: 0, opacity: 1, rotate: 0 }
            : { x: "900px", opacity: 0, rotate: 10 }
        }
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className={classes.textContainer}
      >
        <div>
          <h2>Poczytaj o Naszej Pracy i Zapisz Swoje Dziecko.</h2>
          <p className={classes.text}>
            Naszym założeniem pedagogicznym jest opieka nad dziećmi na
            najwyższym poziomie. Wiemy, że rodzice powierzają nam swój
            największy skarb i musimy dać im poczucie bezpieczeństwa.
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
                src={"/others/aga.png"}
                width={55}
                height={55}
                alt="zdjęcie profilowe Agnieszki Ciołkowskiej - właścicielki Wesołych Wygibasów"
              ></Image>
              <div className={classes.phoneContainer}>
                <p className={classes.phone}>697 560 022</p>
                <p className={classes.ownerDescription}>
                  Właścicielka Wesołych Wygibasów
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
