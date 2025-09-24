"use client";
import Image from "next/image";
import { FaHeart, FaBook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

export default function TextContainer() {
  const cards = [
    {
      title: "Miłość i troska",
      text: `Wesołe Wygibasy to przestrzeń, w której każde dziecko jest otoczone opieką, szacunkiem i wsparciem. Tworzymy inspirujące środowisko, które sprzyja rozwojowi umiejętności, kreatywności i osobowości maluchów.`,
      bg: "bg-[#f8e1e9]",
      icon: <FaHeart className="text-[#fd5a93] w-9 h-9" />,
    },
    {
      title: "Dogodna lokalizacja w Krakowie",
      text: `Nasze żłobki w Krakowie są łatwo dostępne dla mieszkańców Prądnika Białego, Bronowic, Krowodrzy, Olszy i Zielonek. Oddział na ul. Ślicznej to idealny wybór dla rodziców z osiedla Oficerskiego, Grzegórzek i Avia.`,
      bg: "bg-[#e8f0fe]",
      icon: <FaLocationDot className="text-[#5493fe] w-9 h-9" />,
    },
    {
      title: "Profesjonalna kadra opiekunów",
      text: `Oferujemy opiekę dla dzieci do 3. roku życia. Nasz zespół wykwalifikowanych opiekunów zapewnia indywidualne wsparcie każdemu dziecku oraz spokój dla rodziców.`,
      bg: "bg-[#fff1d6]",
      icon: <GiTeacher className="text-[#ffaa00] w-9 h-9" />,
    },
    {
      title: "Holistyczne podejście",
      text: `Program nauczania bazuje na holistycznym podejściu, które uwzględnia potrzeby rozwojowe dzieci. Skupiamy się na kreatywności, aktywności fizycznej oraz rozwijaniu umiejętności społecznych i emocjonalnych.`,
      bg: "bg-[#e0f7e9]",
      icon: <FaBook className="text-[#5efc9b] w-9 h-9" />,
    },
  ];

  return (
    <section className="py-16 2xl:py-24 px-[9%]">
      <div className="flex justify-between gap-12 flex-col lg:flex-row">
        {/* Left content */}
        <div className="w-full lg:w-[70%]">
          <h2 className="text-2xl sm:text-3xl 2xl:text-5xl font-bold mb-12 mt-4">
            Jak <span className="text-primary">dbamy</span> o dzieci w naszym
            żłobku?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-left shadow-lg ${card.bg}`}
              >
                <div className="inline-block">{card.icon}</div>
                <h3 className="mt-4 text-lg xl:text-2xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-base lg:text-lg">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-[27%] flex justify-center items-center mx-auto lg:mx-0">
          <Image
            src="/monkeys/5.gif"
            width={100}
            height={100}
            alt="Logo Wesołe Wygibasy"
            layout="responsive"
            className="transform scale-x-[-1]" // Lustrzane odbicie
          />
        </div>
      </div>
    </section>
  );
}
