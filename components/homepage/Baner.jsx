"use client";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import { motion } from "framer-motion";

export default function Baner() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section>
      <div
        className="h-screen px-[9%] 2xl:px-[5%] py-12 2xl:py-20 bg-[#c7eeff] bg-[url('/others/baner2.webp')] md:bg-cover bg-no-repeat bg-bottom relative overflow-x-hidden"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="text-black w-[60%] flex justify-center max-[1350px]:w-[85%] max-[820px]:w-[95%] max-[712px]:w-full">
          <div>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl 2xl:text-5xl 2xl:leading-snug inline text-black font-bold"
            >
              Najlepszy Żłobek w Krakowie -{" "}
              <span className="font-semibold text-primary">
                {" "}
                Wesołe Wygibasy{" "}
              </span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg font-normal sm:text-xl 2xl:text-2xl w-[85%] max-[620px]:w-full"
            >
              Wesołe Wygibasy to placówka, która powstała z pasji, troski i
              miłości do dzieci. Znajdujemy się w dogodnych lokalizacjach,
              takich jak Prądnik Biały, Olsza, Krowodrza oraz Bronowice –
              idealne dla rodziców z różnych dzielnic Krakowa oraz okolicznych
              miejscowości.
            </motion.p>
            <motion.div
              className="mt-8 flex"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button text="Czytaj więcej" href="#czytaj-wiecej" />
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                transition={{ delay: 0.6 }}
                className="ml-4"
              >
                <Button2 text="Placówki" href="/zlobki" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
