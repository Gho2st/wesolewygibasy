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
      <article>
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
                Żłobek <span> Wesołe Wygibasy</span> w Krakowie - Najlepszy
                Wybór dla Twojego Dziecka!
              </h3>
              <p>
                Żłobki Wesołe Wygibasy w Krakowie to miejsca, gdzie każde
                dziecko jest otoczone miłością, szacunkiem i troską. Nasza misja
                to stworzenie bezpiecznego i inspirującego środowiska, w którym
                maluchy mogą rozwijać swoje umiejętności, kreatywność i
                osobowość.
              </p>
              <p>
                Nasze żłobki zlokalizowane są na północy Krakowa, co sprawia, że
                jesteśmy łatwo dostępni dla rodziców z różnych części miasta,
                takich jak Prądnik Biały, Bronowice, Krowodrza oraz okolicznych
                miejscowości, jak Zielonki. Dogodna lokalizacja w Krakowie
                oferuje liczne atrakcje i udogodnienia, zapewniając dzieciom
                idealne warunki do rozwoju i zabawy.
              </p>
              <p>
                W naszym żłobku w Krakowie oferujemy opiekę dla dzieci w wieku
                do 3 lat. Nasz zespół wykwalifikowanych i doświadczonych
                opiekunów dba o to, aby każde dziecko otrzymało indywidualną
                uwagę i wsparcie w swoim rozwoju.
              </p>
              <p>
                Program nauczania w naszym żłobku w Krakowie opiera się na
                holistycznym podejściu, które uwzględnia potrzeby rozwojowe
                każdego dziecka. Kładziemy nacisk na kreatywność, aktywność
                fizyczną oraz rozwijanie umiejętności społecznych i
                emocjonalnych.
              </p>
              <p>
                Jesteśmy dumni z pozytywnych opinii, jakie otrzymujemy od
                rodziców z Krakowa, którzy powierzają nam opiekę nad swoimi
                dziećmi. Ich zaufanie jest dla nas największą nagrodą i
                motywacją do ciągłego doskonalenia naszych usług.
                <Link href={"https://g.page/r/CVSRHQIb-HkkEBM/review"}>
                  Zostaw nam Twoją opinię
                </Link>
              </p>
              <h4>
                Dołącz do naszej krakowskiej rodziny żłobkowej i daj swojemu
                dziecku najlepszy start w życiu!
              </h4>
            </div>
          </motion.div>
          <motion.div
            className={classes.right}
            initial={{ x: "-900px", opacity: 0, rotate: -10 }}
            animate={
              isSkillRefinView
                ? { x: 0, opacity: 1, rotate: 0 }
                : { x: "-900px", opacity: 0, rotate: -10 }
            }
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={"/monkeys/2.gif"}
              width={100}
              height={100}
              layout="responsive"
              alt="logo"
            ></Image>
          </motion.div>
        </div>
      </article>
    </>
  );
}
