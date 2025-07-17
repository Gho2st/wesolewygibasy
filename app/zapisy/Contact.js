"use client";
import Image from "next/image";
import Form from "./Form";
import Header from "@/components/UI/Header";
import { FaPhone, FaFacebook, FaCar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = () => {
    setIsSent(true);
  };

  return (
    <>
      {/* Nagłówek i wstęp */}
      <div className="text-center text-black w-[90%] md:w-[80%] mx-auto pt-8">
        <Header text="Rodzinny Żłobek w Krakowie - Zapisz Swoje Dziecko Już Dziś!" />
        <p className="mt-4 text-xl">
          Czy szukasz bezpiecznego i przyjaznego środowiska, w którym Twoje
          dziecko może rozwijać się każdego dnia? Krakowski żłobek Wesołe
          Wygibasy to idealne miejsce, gdzie maluchy odkrywają świat z radością
          i ciekawością. Oferujemy wysokiej jakości opiekę i wsparcie w
          rozwijaniu umiejętności dzieci w wieku do 3 lat.
        </p>
        <p className="mt-4 text-xl font-semibold">
          Przyjmujemy zapisy przez cały rok!
        </p>
        <p className="mt-4 text-xl">
          Nie czekaj – zapisz swoje dziecko już dziś i daj mu szansę na rozwój w
          najlepszym żłobku w Krakowie!
        </p>
      </div>

      {/* Kontakt i formularz */}
      <div className="w-[92%] md:w-[90%] mx-auto mt-16 mb-16 p-8 md:px-[7%] bg-white rounded-xl shadow-md flex flex-col lg:flex-row gap-12 justify-between">
        {/* Formularz */}
        <div className="w-full lg:w-[60%]">
          <Form onFormSubmit={handleFormSubmit} />
        </div>

        {/* Informacje kontaktowe */}
        <div className="w-full lg:w-[30%] flex flex-col items-center">
          {/* Obrazek */}
          <div className="w-[60%] md:w-[50%] lg:w-[80%] mb-6">
            <Image
              src="/monkeys/1.gif"
              width={300}
              height={300}
              layout="responsive"
              alt="Małpka wskazująca na formularz zapisów do Żłobka Wesołe Wygibasy"
            />
          </div>

          {/* Dane kontaktowe */}
          <div className="mt-6 grid gap-4 w-full">
            {[
              {
                href: "tel:+48697560022",
                icon: <FaPhone className="w-6 h-6 text-primary" />,
                text: "+48 697 560 022",
              },
              {
                href: "mailto:wesolewygibasy@onet.pl",
                icon: <MdEmail className="w-6 h-6 text-primary" />,
                text: "wesolewygibasy@onet.pl",
              },
              {
                href: "https://www.facebook.com/wesolewygibasy",
                icon: <FaFacebook className="w-6 h-6 text-blue-600" />,
                text: "Napisz na Facebooku!",
                newTab: true,
              },
              {
                href: null,
                icon: <FaCar className="w-6 h-6 text-primary" />,
                text: "Przyjedź & Zapytaj",
              },
            ].map(({ href, icon, text, newTab }, index) => {
              const Wrapper = href ? Link : "div";
              return (
                <Wrapper
                  key={index}
                  href={href || ""}
                  target={newTab ? "_blank" : undefined}
                  className="flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="flex-shrink-0">{icon}</div>
                  <div className="text-lg xl:text-2xl font-medium text-gray-800 group-hover:underline">
                    {text}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
