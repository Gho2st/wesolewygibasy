"use client";
import Link from "next/link";
import classes from "./TextContainer.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";
export default function TextContainer() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef);
  return (
    <>
      <div className={classes.textContainer} ref={skillRef}>
        <motion.div
          initial={{ x: "-900px", opacity: 0, rotate: -10 }}
          animate={
            isSkillRefinView
              ? { x: 0, opacity: 1, rotate: 0 }
              : { x: "-900px", opacity: 0, rotate: -10 }
          }
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className={classes.left}
        >
          <div>
            <h3>
              Żłobki <span> Wesołe Wygibasy</span> na Mapie Krakowa!
            </h3>
            <p>
              Jesteśmy miejscem, gdzie każde dziecko jest traktowane z miłością,
              szacunkiem i troską. Nasza misja to stworzenie bezpiecznego i
              inspirującego środowiska, w którym maluchy mogą rozwijać swoje
              umiejętności, kreatywność i osobowość.
            </p>
            <p>
              Nasze żłobki zlokalizowane są na północy Krakowa, co sprawia, że
              jesteśmy łatwo dostępni dla rodziców z różnych części miasta
              (Prądnik Biały, Bronowice, Krowodrza) oraz okolic, takich jak
              Zielonki. Nasza dogodna lokalizacja oferuje liczne atrakcje i
              udogodnienia dla naszych małych podopiecznych, zapewniając im
              idealne warunki do rozwoju i zabawy.
            </p>
            <p>
              W Naszym Żłobku oferujemy opiekę dla dzieci w wieku do 3 lat. Nasz
              zespół wykwalifikowanych i doświadczonych opiekunów dba o to, aby
              każde dziecko otrzymało indywidualną uwagę i wsparcie w swoim
              rozwoju.
            </p>
            <p>
              Nasz program nauczania opiera się na holistycznym podejściu,
              uwzględniającym potrzeby rozwojowe każdego dziecka. Stawiamy na
              kreatywność, aktywność fizyczną oraz rozwijanie umiejętności
              społecznych i emocjonalnych.
            </p>
            <p>
              Jesteśmy dumni z pozytywnych opinii, jakie otrzymujemy od
              rodziców, którzy powierzają nam opiekę nad swoimi dziećmi. Ich
              zaufanie jest dla nas największą nagrodą i motywacją do ciągłego
              doskonalenia naszych usług.
              <Link href={"https://g.page/r/CVSRHQIb-HkkEBM/review"}>
                Zostaw nam Twoją opinię
              </Link>
            </p>
            <h4>
              Dołącz do naszej żłobkowej rodziny i daj swojemu dziecku najlepszy
              start w życiu!
            </h4>
          </div>
        </motion.div>
        <div className={classes.right}>
          <Image
            src={"/monkeys/2.gif"}
            width={100}
            height={100}
            layout="responsive"
            alt="logo"
          ></Image>
        </div>
      </div>
    </>
  );
}
