"use client";
import { useState } from "react";
import Second from "./Second";
import Others from "./Others";
import FoodContainer from "./food/FoodContainer";
import Header from "@/components/UI/Header";
import Link from "next/link";
import Lokietka from "./Lokietka";

export default function Pricing() {
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isLokietkaVisible, setIsLokietkaVisible] = useState(true);
  const [isOthersVisible, setIsOthersVisible] = useState(false);

  return (
    <main className="px-4 sm:px-6 lg:px-[10%] 2xl:px-[16%] py-12 min-h-screen">
      <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />

      <div className="mt-10  mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
        <p className="text-justify">
          Znajdą Państwo tutaj szczegółowe informacje na temat pełnej kwoty
          abonamentu, liczby dni roboczych, miesięcznej dotacji oraz jadłospisu.
          Nasz żłobek w Krakowie oferuje konkurencyjne ceny, które obejmują
          wszystko, czego potrzebują Państwa dzieci do bezpiecznej i kreatywnej
          nauki oraz zabawy.
        </p>
        <p className="text-justify">
          Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę na
          najwyższym poziomie w przystępnych cenach. Dbamy o to, aby każdy dzień
          w naszym żłobku był pełen radości, nauki i zdrowego rozwoju.
        </p>
        <Link
          href="/plan-dnia-w-zlobku"
          className="text-[#fa7070] font-semibold hover:text-[#e55e5e] transition-colors duration-200 underline"
        >
          Zobacz jak wygląda plan dnia w naszym żłobku
        </Link>
        <p className="text-justify">
          W dniu zawarcia umowy Rodzic/Opiekun Prawny zobowiązany jest do
          wniesienia opłaty wpisowej (administracyjnej) w wysokości 600,00 zł
          (słownie: sześćset złotych). Opłata ta obejmuje:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            koszt zakupu podstawowych pomocy dydaktycznych, edukacyjnych i
            plastycznych
          </li>
          <li>
            koszt zakupu niezbędnych przedmiotów osobistych dla Dziecka (mokre
            chusteczki, ręcznik papierowy, nocnik itp.)
          </li>
          <li>
            koszt zakupu prezentów okolicznościowych (Mikołajki, Dzień Dziecka,
            Urodziny Dziecka)
          </li>
          <li>zakup pościeli dla dziecka</li>
        </ul>
        <p className="text-justify">
          W przypadku dodatkowych pytań lub wątpliwości zapraszamy do kontaktu z
          naszą placówką – chętnie udzielimy wszelkich informacji.
        </p>
      </div>

      <div className="mt-16  mx-auto space-y-6">
        <h2
          onClick={() => setIsLokietkaVisible(!isLokietkaVisible)}
          className="text-xl font-semibold text-white bg-[#fa7070] rounded-lg shadow-lg px-6 py-4 hover:bg-[#e55e5e] hover:scale-[1.02] cursor-pointer flex justify-between items-center transition-transform duration-200 ease-in-out"
        >
          Łokietka
          <span className="text-sm">{isLokietkaVisible ? "▲" : "▼"}</span>
        </h2>
        {isLokietkaVisible && <Lokietka />}
        <h2
          onClick={() => setIsSecondVisible(!isSecondVisible)}
          className="text-xl font-semibold text-white bg-[#fa7070] rounded-lg shadow-lg px-6 py-4 hover:bg-[#e55e5e] hover:scale-[1.02] cursor-pointer flex justify-between items-center transition-transform duration-200 ease-in-out"
        >
          Śliczna & Stańczyka - Czesne 0zł
          <span className="text-sm">{isSecondVisible ? "▲" : "▼"}</span>
        </h2>
        {isSecondVisible && <Second />}
        <h2
          onClick={() => setIsOthersVisible(!isOthersVisible)}
          className="text-xl font-semibold text-white bg-[#fa7070] rounded-lg shadow-lg px-6 py-4 hover:bg-[#e55e5e] hover:scale-[1.02] cursor-pointer flex justify-between items-center transition-transform duration-200 ease-in-out"
        >
          Vetulaniego & Glogera
          <span className="text-sm">{isOthersVisible ? "▲" : "▼"}</span>
        </h2>
        {isOthersVisible && <Others />}
      </div>

      <div className="mt-20  mx-auto">
        <FoodContainer />
      </div>
    </main>
  );
}
