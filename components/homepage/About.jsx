"use client";
import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <motion.section
      id="czytaj-wiecej"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex justify-center items-center overflow-x-hidden px-[9%] py-16"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 w-full max-w-[1400px]">
        {/* Image */}
        <motion.div
          variants={fadeIn}
          className="w-full lg:w-[35%] 2xl:w-1/2 flex justify-center items-center"
        >
          <Image
            src="/monkeys/4.gif"
            alt="Skacząca maskotka małpka"
            width={100}
            height={100}
            className="w-full h-auto"
            layout="responsive"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeIn}
          className="w-full lg:w-[60%] mt-10 lg:mt-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-4xl md:leading-snug font-bold mb-6"
          >
            Żłobki Kraków – 5 Placówek w Prądniku Białym, Bronowicach, Krowodrzy
            i Olszy
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl xl:text-2xl font-normal mb-6 xl:my-10"
          >
            Znajdź idealny żłobek w Krakowie dla Twojego dziecka! Nasze placówki
            oferują profesjonalną opiekę, wspierającą rozwój maluchów w
            przyjaznym i bezpiecznym środowisku.
          </motion.p>

          {/* List Items */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-4"
          >
            {[
              "Wykwalifikowana Kadra",
              "Czas na zabawę",
              "Bezpieczeństwo",
              "Rodzinna atmosfera",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center w-[45%] p-4 rounded-md shadow-md bg-white max-sm:w-full"
              >
                <div className="flex justify-center items-center mr-3 text-2xl">
                  <FaCircleCheck
                    style={{
                      color: ["#FDCB56", "#7C9BE6", "#04C9C8", "#FC7E05"][
                        index
                      ],
                    }}
                  />
                </div>
                <p className="font-medium text-base sm:text-lg md:text-xl">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons and Contact */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-start sm:items-center mt-8 gap-6"
          >
            <div className="flex space-x-4">
              <Button text="O nas" href="/o-nas" />
              <Button2 text="Zapisy" href="/zapisy" />
            </div>

            <div className="flex items-center">
              <Image
                src="/others/aga3.png"
                width={75}
                height={75}
                alt="Agnieszka Ciołkowska"
                className="rounded-full"
              />
              <div className="ml-4 flex flex-col">
                <Link
                  href="tel:+48697560022"
                  className="text-lg md:text-xl 2xl:text-2xl font-bold hover:text-[#fa7070] transition-colors"
                >
                  +48 697 560 022
                </Link>
                <p className="text-[#08c6c3] font-bold text-base sm:text-lg md:text-xl">
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
