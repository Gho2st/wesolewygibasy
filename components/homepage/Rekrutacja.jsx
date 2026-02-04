"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ClipboardEdit, PartyPopper } from "lucide-react";
import Button from "../UI/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Rekrutacja() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-10  px-[6%] bg-gradient-to-b from-white to-blue-50/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Nagłówek sekcji */}
        <motion.div variants={fadeIn} className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-bold tracking-widest text-[#0096da] uppercase bg-blue-50 rounded-full border border-blue-100">
            Nabór 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
            Dołącz do naszej <span className="text-[#0096da]">wesołej</span>{" "}
            gromadki!
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trwa rekrutacja! Zapewnij swojemu maluszkowi profesjonalną opiekę.
            Oferujemy pokrycie czesnego dzięki dotacjom oraz rozwój przez
            radosną zabawę.
          </p>
        </motion.div>

        {/* Karty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Karta: Dlaczego my */}
          <motion.div
            variants={fadeIn}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <PartyPopper size={120} />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0096da]">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Dlaczego my?</h3>
            </div>

            <ul className="space-y-5">
              {[
                {
                  title: "Darmowe czesne",
                  desc: "w wybranych placówkach dzięki dofinansowaniu miejskiemu.",
                },
                {
                  title: "Zajęcia dodatkowe",
                  desc: "sensoryka, rytmika i masa uśmiechu każdego dnia.",
                },
                {
                  title: "Zaufanie rodziców",
                  desc: "potwierdzone wysoką oceną 4.9/5 w Google.",
                },
                {
                  title: "Przyjmujemy maluchy",
                  desc: "od 8 miesiąca do 3 roku życia! *W placówce na Vetulaniego od 1 roku życia",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gray-600 text-lg">
                    <div className="inline-block mr-2 bg-[#0096da] rounded-full p-1"></div>
                    <strong className="text-gray-800">{item.title}</strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Karta: Jak zapisać */}
          <motion.div
            variants={fadeIn}
            className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-gray-100 flex flex-col relative overflow-hidden"
          >
            {/* Ikona w tle - zwiększony kontrast do 10% dla lepszej widoczności */}
            <div className="absolute -top-4 -right-4 p-6 opacity-10 pointer-events-none">
              <ClipboardEdit size={140} />
            </div>

            <div className="flex-1 flex flex-col">
              {/* Nagłówek karty */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#ff8f00] shrink-0">
                  <ClipboardEdit size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">
                  Jak zapisać dziecko?
                </h3>
              </div>

              {/* Opis */}
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Proces jest prosty jak budowanie z klocków! Zadzwoń bezpośrednio
                do nas lub wyślij zgłoszenie przez formularz.
              </p>

              <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <Link
                  href="tel:+48697560022"
                  className={`
      group
      flex items-center justify-center gap-4
      px-5 py-4 sm:px-7 sm:py-4.5
      bg-white
      border-2 border-orange-300 hover:border-orange-500 active:border-orange-600
      text-orange-700 hover:text-orange-800 active:text-orange-900
      font-bold text-[17px] sm:text-lg
      rounded-2xl
      shadow-sm hover:shadow-md active:shadow-sm
      transition-all duration-300 ease-out
      active:scale-[0.98]
      w-full sm:w-auto
      min-h-[56px]
    `}
                >
                  <div
                    className={`
      flex-shrink-0
      w-11 h-11 sm:w-12 sm:h-12
      bg-orange-100 text-orange-600
      rounded-full
      flex items-center justify-center
      group-hover:scale-110 group-active:scale-95
      transition-transform duration-250
    `}
                  >
                    <Phone size={22} strokeWidth={2.4} className="sm:size-6" />
                  </div>

                  <span className="whitespace-nowrap">+48 697 560 022</span>
                </Link>

                <Link
                  href="/zapisy"
                  className={`
      flex items-center justify-center
      px-6 py-4 sm:px-9 sm:py-4.5
      bg-gradient-to-r from-orange-600 to-orange-500
      hover:from-orange-700 hover:to-orange-600
      active:from-orange-800 active:to-orange-700
      text-white
      font-bold text-[17px] sm:text-lg
      rounded-2xl
      shadow-lg hover:shadow-xl active:shadow-md
      transition-all duration-300 ease-out
      active:scale-[0.98]
      w-full sm:w-auto
      min-h-[56px]
    `}
                >
                  Wypełnij zgłoszenie →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
