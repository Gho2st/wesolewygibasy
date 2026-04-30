import Link from "next/link";

export default function PricingInfo() {
  return (
    <div className="mt-10 max-w-5xl mx-auto space-y-6">
      {/* Wstęp w karcie z gradientem */}
      <div className="relative bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-8 md:p-10 border border-orange-100/60 shadow-sm overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fa7070]/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl" />

        <div className="relative space-y-5 text-gray-700 text-[1.05rem] leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">📋</span>
            <p>
              Znajdą Państwo tutaj szczegółowe informacje na temat pełnej kwoty
              abonamentu, liczby dni roboczych oraz miesięcznej dotacji.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏠</span>
            <p>
              Nasz żłobek w Krakowie oferuje{" "}
              <span className="font-semibold text-gray-800">
                konkurencyjne ceny
              </span>
              , które obejmują wszystko, czego potrzebują Państwa dzieci do
              bezpiecznej, kreatywnej nauki i radosnej zabawy.
            </p>
          </div>

          <div className="pt-2 border-t border-orange-100">
            <p className="font-semibold text-lg text-gray-800 leading-relaxed">
              Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę na
              najwyższym poziomie –{" "}
              <span className="text-[#ea5252]">w przystępnych cenach.</span>
            </p>
          </div>

          <div className="flex items-start gap-2 pt-2 text-sm text-gray-500 italic">
            <span>🍎</span>
            <p>
              Wyżywienie jest płatne dodatkowo – dokładne zasady i stawki
              podajemy podczas rozmowy indywidualnej.
            </p>
          </div>
        </div>
      </div>

      {/* Link do planu dnia */}
      <div className="flex justify-center">
        <Link
          href="/plan-dnia"
          className="group inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border-2 border-[#fa7070]/30 text-[#ea5252] font-semibold hover:bg-[#fa7070] hover:text-white hover:border-[#fa7070] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#fa7070]/30"
        >
          <span>Zobacz, jak wygląda typowy plan dnia</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Karta opłaty wpisowej */}
      <div className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100 shadow-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
              <span className="text-2xl">📝</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Opłata wpisowa
              </h3>
              <p className="text-teal-700 font-semibold text-2xl md:text-3xl mt-1">
                800 zł
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            W dniu zawarcia umowy Rodzic/Opiekun Prawny wnosi jednorazową opłatę
            administracyjną, która obejmuje pełne wyposażenie startowe Państwa
            dziecka w żłobku.
          </p>

          <p className="font-semibold text-gray-800 mb-4">Opłata obejmuje:</p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              {
                icon: "🎨",
                text: "Pomoce dydaktyczne, edukacyjne i plastyczne",
              },
              {
                icon: "🧴",
                text: "Przedmioty osobiste (chusteczki, ręczniki, nocnik)",
              },
              {
                icon: "🎁",
                text: "Prezenty okolicznościowe (Mikołajki, Dzień Dziecka, urodziny)",
              },
              {
                icon: "🛏️",
                text: "Komplet pościeli dla dziecka",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-teal-100/60 hover:border-teal-200 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-700 text-sm md:text-base leading-snug">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stopka z zaproszeniem do kontaktu */}
      <div className="text-center pt-4">
        <p className="inline-flex items-center gap-2 text-gray-600 italic bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 px-6 py-3 rounded-full border border-orange-100">
          <span>💬</span>W razie pytań lub wątpliwości zapraszamy do kontaktu –
          chętnie wszystko wyjaśnimy
          <span>😊</span>
        </p>
      </div>
    </div>
  );
}
