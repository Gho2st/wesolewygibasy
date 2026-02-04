"use client";
import Image from "next/image";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import { motion } from "framer-motion";

export default function Baner() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-secondary md:min-h-screen flex flex-col">
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/grafiki/baner.svg"
          alt="Tło baneru"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="relative z-10 w-full lg:w-[60%] px-[6%] py-10 xl:py-16 2xl:py-20 2xl:px-[10%] text-center md:text-left">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl 2xl:text-7xl "
        >
          Najlepszy Żłobek w Krakowie <br className="hidden md:block" />
          <span className="text-primary">—</span> Wesołe Wygibasy
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-6 text-base text-white font-light sm:text-xl 2xl:text-2xl max-w-2xl leading-relaxed"
        >
          Wesołe Wygibasy to sieć przytulnych żłobków w Krakowie, stworzona z
          pasji i miłości. Zapewniamy troskliwą opiekę już od 8. miesiąca życia.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Button text="Poznaj nas bliżej" href="#czytaj-wiecej" />
          <Button2 text="Placówki" href="/zlobki" />
        </motion.div>
      </div>

      <div className="block md:hidden w-full mt-auto">
        <Image
          src="/grafiki/baner-mobile.svg"
          alt="Tło baneru mobilne"
          width={100}
          height={100}
          layout="responsive"
          priority
          className="mb-[-1px]"
        />
      </div>
    </section>
  );
}
