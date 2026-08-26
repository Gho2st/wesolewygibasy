"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Od jakiego wieku przyjmujecie dzieci?",
    answer:
      "Przyjmujemy maluchy już od 8. miesiąca życia. Wyjątkiem jest Klub Malucha na Vetulaniego, gdzie opiekujemy się dziećmi od 1. roku życia.",
  },
  {
    question: "Jak wygląda adaptacja dziecka w żłobku?",
    answer: (
      <>
        Wiemy, że to duża zmiana — dlatego oferujemy 8 bezpłatnych spotkań
        adaptacyjnych, dzięki którym dziecko i rodzic oswajają się z nowym
        miejscem we własnym tempie.{" "}
        <Link href="/adaptacja" className="text-[#0096da] font-semibold underline underline-offset-2">
          Zobacz jak wygląda proces adaptacji
        </Link>
        .
      </>
    ),
  },
  {
    question: "Czy mogę skorzystać z dofinansowania do czesnego?",
    answer: (
      <>
        Tak. Dzieci zamieszkałe na terenie Krakowa mogą zostać objęte dotacją
        Gminy Miejskiej Kraków, która pomniejsza miesięczną opłatę za opiekę.
        Skontaktuj się z nami lub sprawdź{" "}
        <Link href="/cennik" className="text-[#0096da] font-semibold underline underline-offset-2">
          aktualny cennik
        </Link>{" "}
        — chętnie wyliczymy dokładną kwotę dla Twojego dziecka.
      </>
    ),
  },
  {
    question: "Jakie posiłki serwujecie dzieciom?",
    answer: (
      <>
        Zapewniamy pełne wyżywienie przygotowywane na miejscu, w tym warianty
        wegetariańskie i bez mleka. Pełny{" "}
        <Link href="/jadlospis" className="text-[#0096da] font-semibold underline underline-offset-2">
          jadłospis znajdziesz tutaj
        </Link>
        .
      </>
    ),
  },
  {
    question: "Jakie zajęcia dodatkowe są w placówkach?",
    answer:
      "W ramach codziennej opieki oferujemy m.in. rytmikę, zajęcia sensoryczne, język angielski, dogoterapię i dni tematyczne.",
  },
  {
    question: "Jakie są godziny otwarcia placówek?",
    answer: (
      <>
        Wszystkie żłobki czynne są od poniedziałku do piątku, w godzinach
        od 6:30 do 17:30 (dokładne godziny zależą od placówki). W weekendy
        jesteśmy nieczynni.{" "}
        <Link href="/zlobki" className="text-[#0096da] font-semibold underline underline-offset-2">
          Sprawdź godziny konkretnej lokalizacji
        </Link>
        .
      </>
    ),
  },
  {
    question: "Jak zapisać dziecko do żłobka?",
    answer: (
      <>
        Wystarczy zadzwonić pod numer{" "}
        <Link href="tel:+48697560022" className="text-[#0096da] font-semibold underline underline-offset-2">
          +48 697 560 022
        </Link>{" "}
        lub wypełnić krótki{" "}
        <Link href="/zapisy" className="text-[#0096da] font-semibold underline underline-offset-2">
          formularz zgłoszeniowy
        </Link>{" "}
        — oddzwonimy i umówimy termin wizyty w placówce.
      </>
    ),
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 lg:px-7 lg:py-5"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900 text-base lg:text-lg">
          {item.question}
        </span>
        <ChevronDown
          size={22}
          style={{ width: 22, height: 22 }}
          className={`shrink-0 text-[#0096da] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 lg:px-7 lg:pb-6 text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-bold tracking-widest text-[#0096da] uppercase bg-blue-50 rounded-full border border-blue-100">
            <HelpCircle size={16} style={{ width: 16, height: 16 }} className="shrink-0" />
            Najczęstsze pytania
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Rodzice pytają, my odpowiadamy
          </h2>
          <p className="mt-4 text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nie znalazłeś odpowiedzi na swoje pytanie?{" "}
            <Link href="/zapisy" className="text-[#0096da] font-semibold underline underline-offset-2">
              Napisz do nas
            </Link>{" "}
            — odpowiadamy szybko.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 lg:gap-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
