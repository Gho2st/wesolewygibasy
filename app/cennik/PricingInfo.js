import Link from "next/link";

export default function PricingInfo() {
  return (
    <div className="mt-10  mx-auto px-5 sm:px-6 lg:px-8 text-gray-700 text-[1.05rem] leading-7 space-y-5">
      <p className="">
        Znajdą Państwo tutaj szczegółowe informacje na temat pełnej kwoty
        abonamentu, liczby dni roboczych, miesięcznej dotacji.
      </p>

      <p className="">
        Nasz żłobek w Krakowie oferuje konkurencyjne ceny, które obejmują
        wszystko, czego potrzebują Państwa dzieci do bezpiecznej, kreatywnej
        nauki i radosnej zabawy.
      </p>

      <p className="font-medium text-gray-800">
        Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę na najwyższym
        poziomie – w przystępnych cenach.
      </p>
      <p className="text-gray-600 text-sm italic pt-2">
        * Wyżywienie jest płatne dodatkowo – dokładne zasady i stawki podajemy
        podczas rozmowy indywidualnej.
      </p>

      <div className="pt-2 pb-4">
        <Link
          href="/plan-dnia"
          className="inline-flex items-center gap-2 text-[#ea5252] font-semibold hover:text-[#d13f3f] transition-colors duration-200 underline underline-offset-4 decoration-2 hover:decoration-[#d13f3f]"
        >
          Zobacz, jak wygląda typowy plan dnia →
        </Link>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8 shadow-sm">
        <p className="text-justify mb-5 font-medium text-gray-800">
          W dniu zawarcia umowy Rodzic/Opiekun Prawny wnosi opłatę wpisową
          (administracyjną) w wysokości <strong>800 zł</strong>.
        </p>

        <p className="mb-4 text-gray-800">Opłata obejmuje:</p>

        <ul className="space-y-3 pl-6 list-disc marker:text-[#ea5252] text-gray-700">
          <li>
            zakup podstawowych pomocy dydaktycznych, edukacyjnych i plastycznych
          </li>
          <li>
            zakup niezbędnych przedmiotów osobistych (chusteczki nawilżane,
            ręczniki papierowe, nocnik itp.)
          </li>
          <li>
            prezenty okolicznościowe (Mikołajki, Dzień Dziecka, urodziny
            dziecka)
          </li>
          <li>komplet pościeli dla dziecka</li>
        </ul>
      </div>

      <p className="text-center sm:text-left pt-6 italic text-gray-600">
        W razie pytań lub wątpliwości zapraszamy do kontaktu – chętnie wszystko
        wyjaśnimy 😊
      </p>
    </div>
  );
}
