import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import classes from "./About.module.css";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

// Wariant dla kontenera z sekwencją dzieci
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Każdy element pojawia się co 0.3s
    },
  },
};

// Prosty efekt pojawiania się od góry
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <motion.section
      className={classes.wrapper}
      id="czytaj-wiecej"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={classes.container}>
        <motion.div className={classes.imageContainer} variants={fadeIn}>
          <Image
            src={"/monkeys/4.gif"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
            alt="Skacząca maskotka małpka"
          />
        </motion.div>

        <motion.div className={classes.textContainer} variants={fadeIn}>
          <motion.h2 variants={fadeIn}>
            Dlaczego warto zapisać dziecko do <span> Wesołych Wygibasów?</span>
          </motion.h2>

          <motion.p variants={fadeIn} className={classes.text}>
            Nasz priorytet to profesjonalna i pełna troski opieka nad dziećmi.
            To żłobek, gdzie Twoje dziecko znajdzie nie tylko bezpieczeństwo,
            ale również wsparcie w rozwoju.
          </motion.p>

          <motion.div
            className={classes.itemContainer}
            variants={containerVariants}
          >
            {[
              "Wykwalifikowana Kadra",
              "Czas na zabawę",
              "Bezpieczeństwo",
              "Rodzinna atmosfera",
            ].map((item, index) => (
              <motion.div
                key={index}
                className={classes.item}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
              >
                <div className={classes.checkContainer}>
                  <FaCircleCheck
                    className={classes.icon}
                    style={{
                      color: ["#FDCB56", "#7C9BE6", "#04C9C8", "#FC7E05"][
                        index
                      ],
                    }}
                  />
                </div>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={classes.contactInfoContainer}
            variants={fadeIn}
          >
            <div className={classes.buttonContainer}>
              <Button text="O nas" href="/o-nas" />
              <Button2 text="Zapisy" href="/zapisy" />
            </div>
            <div className={classes.ownerContainer}>
              <Image
                className={classes.aga}
                src={"/others/aga3.png"}
                width={75}
                height={75}
                alt="Agnieszka Ciołkowska"
              />
              <div className={classes.phoneContainer}>
                <Link href={"tel:+48697560022"} className={classes.phone}>
                  <span>+48 697 560 022</span>
                </Link>
                <p className={classes.ownerDescription}>
                  Właścicielka Wesołych Wygibasów
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
