"use client";
import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import Image from "next/image";
import { Heart, Stars, Baby, ShieldCheck, Sun } from "lucide-react";
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

const features = [
  {
    title: "Rodzinna atmosfera",
    desc: "Bezpieczne i inspirujące środowisko.",
    icon: Heart,
    color: "#0096da",
  },

  {
    title: "Czas na zabawę",
    desc: "Rytmika, muzyka i odkrywanie świata.",
    icon: Sun,
    color: "#ffca28",
  },
  {
    title: "Łagodna adaptacja",
    desc: "Spokojne wejście w nowy etap życia.",
    icon: Baby,
    color: "#04C9C8",
  },
  {
    title: "Bezpieczeństwo",
    desc: "Oficjalny rejestr i najwyższe standardy.",
    icon: ShieldCheck,
    color: "#7C9BE6",
  },
];

export default function About() {
  return (
    <motion.section
      id="czytaj-wiecej"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center  items-center overflow-x-hidden px-[6%] py-4 xl:py-24"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 2xl:gap-24 w-full max-w-8xl">
        <motion.div
          variants={fadeIn}
          className="w-full lg:w-[35%] 2xl:w-1/1 flex justify-center items-center"
        >
          <Image
            src="/grafiki/about.svg"
            alt="Uśmiechające się dzieci podczas zabawy"
            width={100}
            height={100}
            className="w-full h-auto"
            layout="responsive"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeIn}
          className="w-full lg:w-[60%] 2xl:w-1/1 mt-10 lg:mt-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl text-center md:text-left  sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl md:leading-snug font-bold mb-6"
          >
            Więcej niż żłobek – miejsce pełne uśmiechu i zabawy
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-base text-center md:text-left sm:text-lg md:text-xl xl:text-2xl font-normal text-gray-600 mb-6 xl:my-10"
          >
            W naszych placówkach tworzymy przestrzeń, w której każde dziecko
            czuje się ważne i kochane. Stawiamy na holistyczny rozwój – od zabaw
            sensorycznych po pierwsze relacje rówieśnicze.
          </motion.p>

          {/* List Items */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start p-4 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <div
                  className="flex shrink-0 justify-center items-center w-12 h-12 rounded-lg mr-4"
                  style={{ backgroundColor: `${item.color}15` }} // Delikatne tło w kolorze ikonki
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
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
                src="/grafiki/aga.png"
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
                <p className="text-primary font-bold text-base sm:text-lg md:text-xl">
                  Właściciel, Pedagog, Mama 3 dzieci
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
