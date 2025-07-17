export default function Others() {
  return (
    <div className="overflow-x-auto px-4 py-8">
      <table className="w-full mt-6 border border-gray-300 text-center text-sm md:text-base">
        <thead>
          <tr className="bg-emerald-700 text-white">
            <th className="px-4 py-2">Miesiąc</th>
            <th className="px-4 py-2">Czesne</th>
            <th className="px-4 py-2">Dotacja U.M.</th>
            <th className="px-4 py-2">Aktywnie w Żłobku</th>
            <th className="px-4 py-2 bg-blue-600">Wpłata na konto</th>
            <th className="px-4 py-2">Ostateczne opłaty</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Kwiecień 2025",
              "2400 zł",
              "735 zł",
              "1500 zł",
              "1665 zł",
              "165 zł",
            ],
            ["Maj 2025", "2400 zł", "735 zł", "1500 zł", "1665 zł", "165 zł"],
            [
              "Czerwiec 2025",
              "2400 zł",
              "700 zł",
              "1500 zł",
              "1700 zł",
              "200 zł",
            ],
            ["Lipiec 2025", "2400 zł", "805 zł", "1500 zł", "1595 zł", "95 zł"],
            [
              "Sierpień 2025",
              "2400 zł",
              "700 zł",
              "1500 zł",
              "1700 zł",
              "200 zł",
            ],
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 1 ? "bg-gray-100" : ""
              } hover:bg-gray-200 transition`}
            >
              {row.map((cell, i) => (
                <td key={i} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-8 text-center text-lg font-semibold underline">
        Placówka realizuje również świadczenia ZUS z programu 400+
      </h3>

      <div className="mt-6 text-base text-black max-w-3xl mx-auto text-center">
        <p className="font-semibold">
          Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
          ok. 20 sierpnia)
        </p>

        <p className="mt-4">
          Od kwoty z rubryki „wpłata na konto” rodzicom posiadającym w placówce
          „pierwsze dziecko” przysługuje świadczenie ZUS w wysokości 400 zł,
          zwracane na konto z miesięcznym opóźnieniem (np. za wrzesień zwrot ok.
          20 października).
        </p>
      </div>
    </div>
  );
}
