"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Dotation() {
  const skillRef = useRef(null);
  const isSkillRefinView = useInView(skillRef, { once: true });

  return (
    <section className="min-h-screen flex justify-center items-center overflow-x-hidden px-4 md:px-[9%] py-16">
      <div ref={skillRef} className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isSkillRefinView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-[2.3rem] font-bold">
                Kraków, Żłobek w Naszym Mieście
              </h2>
              <h3 className="text-2xl md:text-[1.6rem] font-medium mt-2 mb-6">
                Dofinansowanie
              </h3>
            </div>
            <div>
              <Image
                src="/krakow/krakow1.jpg"
                width={200}
                height={95}
                alt="Logo miasta Kraków"
                className="w-[150px] h-auto md:w-[200px]"
              />
            </div>
          </div>

          <p className="text-lg xl:text-xl text-justify leading-relaxed">
            W 2024 r. Gmina Miejska Kraków udziela dotacji na dzieci objęte
            opieką. Kwota udzielanej przez Gminę Miejską Kraków dotacji wynosi
            3,50 zł za godzinę opieki nad dzieckiem. <br />
            <br />
            Zgodnie z podpisaną z Gminą Miejską Kraków umową w tym zakresie, w
            okresie otrzymywania dotacji, pomniejszamy wysokość miesięcznych
            opłat za objęcie opieką dziecka o kwotę nie niższą niż kwota
            otrzymanej od Gminy Miejskiej Kraków dotacji na dane dziecko.
            Miesięczna kwota o jaką obniżane są opłaty za opiekę wyliczana jest
            wg wzoru: liczba godzin zapewniania opieki dziecku w danym miesiącu
            (liczona na podstawie zawartej z rodzicem umowy o zapewnianie
            opieki, jednakże nie więcej niż 10 godzin dziennie) x 3,50 zł.
            <br />
            <br />
            W przypadku objęcia opieką dziecka z orzeczeniem o
            niepełnosprawności Gmina Miejska Kraków udziela dodatkowej dotacji w
            wysokości 6,00 zł za każdą godzinę opieki nad dzieckiem. Dotacja ta
            nie ma wpływu na wysokość opłat ponoszonych przez rodzica.
            <br />
            <br />
            Jednocześnie informujemy, że dotacja i ww. postanowienia dotyczą
            wyłącznie dzieci zamieszkałych na terenie miasta Krakowa.
            <br />
            <br />
            Ewentualne uwagi dotyczące udzielanych dotacji należy kierować do
            Wydziału Polityki Społecznej i Zdrowia Urzędu Miasta Krakowa,
            <br />
            <br />
            ul. Dekerta 24, 30-703 Kraków tel. 12 616 97 97, pokój nr 34
            <br />
            <br />
            e-mail: sz.umk@um.krakow.pl
          </p>

          <div className="mt-6 flex justify-start">
            <a
              href="/krakow/krakow2.png"
              download
              className="inline-block bg-[#ff5353] text-white font-bold py-2 px-5 rounded-md transition-transform hover:-translate-y-1.5 hover:bg-[#e04b4b]"
            >
              Pobierz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
