"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../UI/Button";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function PlaceItem(props) {
  return (
    <article className="h-full">
      <motion.div
        className="flex flex-col w-full h-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Zdjęcie z nakładką gradientową na dole */}
        <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden">
          <Image
            src={props.image}
            alt={props.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Treść karty */}
        <div className="flex flex-col flex-grow p-6 xl:p-8">
          <div className="text-center mb-6">
            <h3 className="text-slate-900 font-black text-2xl xl:text-3xl mb-3 leading-tight min-h-[3.5rem] flex items-center justify-center">
              {props.title}
            </h3>

            {/* Lokalizacja z ikonką pinezki */}
            <div className="flex flex-col items-center text-slate-500 gap-1">
              <div className="flex items-center gap-1 text-[#4a71ff] font-bold uppercase text-xs xl:text-lg tracking-widest mb-1">
                <HiOutlineMapPin size={16} />
                <span>Kraków</span>
              </div>
              {/* <p className="text-lg font-medium text-slate-700">
                {props.location}
              </p> */}
              <p className="text-base font-light italic">{props.street}</p>
            </div>
          </div>

          {/* Sekcja dolna - Zawsze na samym dole karty */}
          <div className="mt-auto">
            <div className="flex justify-center mb-6">
              <Button
                text="Zobacz placówkę"
                href={`/${props.link}`}
                className="w-full sm:w-auto" // Przycisk może być szerszy na mobile
              />
            </div>

            {/* Informacje o dotacjach / Bonusy */}
            <div
              className="text-center font-bold text-sm lg:text-base leading-relaxed p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200"
              style={{
                color: props.add ? "#08c6c3" : "transparent",
              }}
            >
              {props.add ? (
                props.add.split("\n").map((line, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#08c6c3]" />
                    {line.trim()}
                  </p>
                ))
              ) : (
                <p>&nbsp;</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
