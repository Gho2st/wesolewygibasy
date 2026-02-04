"use client";
import Image from "next/image";
import Form from "./Form";
import Header from "@/components/UI/Header";
import { FaPhone, FaFacebook, FaCar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = () => {
    setIsSent(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Nagłówek i wstęp */}
      <div className=" mx-auto text-center mb-12 lg:mb-20">
        <Header text="Rodzinny Żłobek w Krakowie - Zapisz Swoje Dziecko Już Dziś!" />
        <div className="mt-6 space-y-4 text-slate-700">
          <p className="text-lg lg:text-xl leading-relaxed">
            Czy szukasz bezpiecznego i przyjaznego środowiska, w którym Twoje
            dziecko może rozwijać się każdego dnia? Krakowski żłobek{" "}
            <span className="font-semibold text-primary">Wesołe Wygibasy</span>{" "}
            to idealne miejsce, gdzie maluchy odkrywają świat z radością i
            ciekawością.
          </p>
          <p className="text-xl lg:text-2xl font-bold text-slate-900">
            Przyjmujemy zapisy przez cały rok!
          </p>
          <p className="text-lg lg:text-xl">
            Nie czekaj – daj swojemu dziecku szansę na rozwój w najlepszym
            żłobku w Krakowie!
          </p>
        </div>
      </div>

      {/* Kontakt i formularz */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col-reverse lg:flex-row border border-slate-100">
        <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-16 order-2 lg:order-1">
          <Form onFormSubmit={handleFormSubmit} />
        </div>

        {/* Informacje kontaktowe - Panel boczny */}
        <div className="w-full lg:w-2/5 bg-slate-50 p-6 sm:p-10 lg:p-16 flex flex-col items-center order-1 lg:order-2">
          <div className="w-40 sm:w-48 lg:w-full max-w-[280px] mb-8 lg:mb-12">
            <Image
              src="/monkeys/1.gif"
              width={300}
              height={300}
              className="w-full h-auto drop-shadow-lg"
              alt="Małpka zapraszająca do kontaktu"
            />
          </div>

          {/* Dane kontaktowe - Lista */}
          <div className="grid gap-3 sm:gap-4 w-full">
            {[
              {
                href: "tel:+48697560022",
                icon: <FaPhone className="w-5 h-5 text-white" />,
                bg: "bg-blue-500",
                text: "+48 697 560 022",
              },
              {
                href: "mailto:wesolewygibasy@onet.pl",
                icon: <MdEmail className="w-5 h-5 text-white" />,
                bg: "bg-emerald-500",
                text: "wesolewygibasy@onet.pl",
              },
              {
                href: "https://www.facebook.com/wesolewygibasy",
                icon: <FaFacebook className="w-5 h-5 text-white" />,
                bg: "bg-[#1877F2]",
                text: "Napisz na Facebooku",
                newTab: true,
              },
              {
                href: "https://www.instagram.com/wesolewygibasy/",
                icon: <FaInstagram className="w-5 h-5 text-white" />,
                bg: "bg-[#E1306C]",
                text: "Napisz na Instagramie",
                newTab: true,
              },
            ].map(({ href, icon, text, newTab, bg }, index) => {
              const Wrapper = href ? Link : "div";
              return (
                <Wrapper
                  key={index}
                  href={href || ""}
                  target={newTab ? "_blank" : undefined}
                  className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md group"
                >
                  <div
                    className={`${bg} p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {icon}
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-slate-800 break-all lg:break-normal">
                    {text}
                  </span>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
