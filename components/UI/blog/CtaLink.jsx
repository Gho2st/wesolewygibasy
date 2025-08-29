"use client";
import { motion } from "framer-motion";
import Button from "../Button";

export default function CtaLink({ header, text, button, link }) {
  return (
    <section className="mt-16 md:mt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-[#15e1bc] to-[#0bb5a4] text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          {header}
        </h2>
        <p className="mt-6 md:mt-8 mb-10 text-lg xl:text-xl text-white/90">
          {text}
        </p>
        <div className="flex justify-center">
          <Button text={button} href={link} />
        </div>
      </motion.div>
    </section>
  );
}
