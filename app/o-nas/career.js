import Link from "next/link";
import { FaNetworkWired } from "react-icons/fa";

export default function Career() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl xl:text-5xl font-extrabold text-[#fa7070]">
          Dołącz do naszego zespołu!
        </h2>

        <div className="mt-4 mb-12 flex justify-center text-5xl text-[#fa7070]">
          <FaNetworkWired />
        </div>

        <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
          Jeśli kochasz pracę z dziećmi, masz w sobie dużo cierpliwości, ciepła
          i kreatywności – być może czekamy właśnie na Ciebie! Nasz żłobek to
          miejsce, gdzie troska o najmłodszych łączy się z atmosferą współpracy
          i rozwoju. Poszukujemy zaangażowanych osób na stanowisko
          <strong> opiekuna/opiekunki żłobkowej</strong>, które pomogą nam
          tworzyć bezpieczne i pełne radości środowisko dla dzieci.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {[
            "Stabilne zatrudnienie i wsparcie zespołu.",
            "Możliwość rozwoju zawodowego (np. kursy, szkolenia).",
            "Praca w małych grupach dzieci.",
            "Przyjazna atmosfera i nowoczesne zaplecze.",
          ].map((item, index) => (
            <li
              key={index}
              className="bg-[#ffe3e3] text-xl font-semibold p-5 rounded-xl hover:bg-[#ffd6d6] transition-colors duration-200 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold mt-20">
          Jak aplikować
        </h3>

        <p className="mt-6 text-lg xl:text-xl text-gray-700 leading-relaxed">
          Jeśli chcesz dołączyć do naszego zespołu, wyślij swoje CV na adres:
        </p>

        <Link
          href="mailto:wesolewygibasy@onet.pl"
          className="mt-4 not-italic text-xl xl:text-2xl text-primary font-semibold block"
        >
          wesolewygibasy@onet.pl
        </Link>

        <p className="mt-4 text-xl text-gray-700">
          Chętnie się z Tobą spotkamy!
        </p>
      </div>
    </section>
  );
}
