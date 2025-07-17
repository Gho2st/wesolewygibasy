"use client";
import { useState } from "react";
import Second from "./Second";
import Others from "./Others";
import FoodContainer from "./food/FoodContainer";
import Header from "@/components/UI/Header";
import Link from "next/link";

export default function Pricing() {
  const [isSecondVisible, setIsSecondVisible] = useState(true);
  const [isOthersVisible, setIsOthersVisible] = useState(false);

  return (
    <main className="px-[9%] pt-10">
      <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />

      <div className="text-gray-700 mt-12 text-lg text-justify space-y-4">
        <p>
          Znajdą Państwo tutaj szczegółowe informacje na temat pełnej kwoty
          abonamentu, liczby dni roboczych, miesięcznej dotacji oraz jadłospisu.
          Nasz żłobek w Krakowie oferuje konkurencyjne ceny, które obejmują
          wszystko, czego potrzebują Państwa dzieci do bezpiecznej i kreatywnej
          nauki oraz zabawy.
        </p>
        <p>
          Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę na
          najwyższym poziomie w przystępnych cenach. Dbamy o to, aby każdy dzień
          w naszym żłobku był pełen radości, nauki i zdrowego rozwoju.
        </p>
        <Link
          href="/plan-dnia-w-zlobku"
          className="text-primary underline font-semibold"
        >
          Zobacz jak wygląda plan dnia w naszym żłobku
        </Link>
        <p>
          W dniu zawarcia umowy Rodzic/Opiekun Prawny zobowiązany jest do
          wniesienia opłaty wpisowej (administracyjnej) w wysokości 600,00 zł
          (słownie: sześćset złotych). Opłata ta obejmuje:
        </p>
        <ul className="list-none space-y-2 pl-4">
          <li>
            • koszt zakupu podstawowych pomocy dydaktycznych, edukacyjnych i
            plastycznych
          </li>
          <li>
            • koszt zakupu niezbędnych przedmiotów osobistych dla Dziecka (mokre
            chusteczki, ręcznik papierowy, nocnik itp.)
          </li>
          <li>
            • koszt zakupu prezentów okolicznościowych (Mikołajki, Dzień
            Dziecka, Urodziny Dziecka)
          </li>
          <li>• zakup pościeli dla dziecka</li>
        </ul>
        <p>
          W przypadku dodatkowych pytań lub wątpliwości zapraszamy do kontaktu z
          naszą placówką – chętnie udzielimy wszelkich informacji.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        <h2
          onClick={() => setIsSecondVisible(!isSecondVisible)}
          className="text-xl font-semibold text-[#fa7070] bg-white rounded-xl shadow-md px-6 py-4 hover:opacity-90 hover:scale-[1.01] cursor-pointer flex justify-between items-center transition"
        >
          Śliczna & Stańczyka - Czesne 0zł
        </h2>
        {isSecondVisible && <Second />}

        <h2
          onClick={() => setIsOthersVisible(!isOthersVisible)}
          className="text-xl font-semibold text-[#fa7070] bg-white rounded-xl shadow-md px-6 py-4 hover:opacity-90 hover:scale-[1.01] cursor-pointer flex justify-between items-center transition"
        >
          Vetulaniego & Glogera
        </h2>
        {isOthersVisible && <Others />}
      </div>

      <div className="mt-20">
        <FoodContainer />
      </div>
    </main>
  );
}
