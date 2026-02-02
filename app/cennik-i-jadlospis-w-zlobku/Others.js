export default function Others() {
  return (
    <div className="overflow-x-auto px-4 py-8">
      <table className="w-full mt-6 border border-gray-300 text-center text-sm md:text-base">
        <thead>
          <tr className="bg-emerald-700 text-white">
            <th className="px-4 py-2">Miesiąc</th>
            <th className="px-4 py-2">Czesne</th>
            <th className="px-4 py-2">Dotacja U.M.</th>
            <th className="px-4 py-2">Dotacja Aktywnie w Żłobku</th>
            <th className="px-4 py-2 bg-blue-600">Wpłata na konto</th>
            <th className="px-4 py-2">Ostateczne opłaty</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Styczeń 2026",
              "2400 zł",
              "580 zł",
              "1500 zł",
              "1820 zł",
              "320 zł",
            ],
            ["Luty 2026", "2400 zł", "580 zł", "1500 zł", "1820 zł", "320 zł"],
            [
              "Marzec 2026",
              "2400 zł",
              "638 zł",
              "1500 zł",
              "1762 zł",
              "262 zł",
            ],
            [
              "Kwiecień 2026",
              "2400 zł",
              "609 zł",
              "1500 zł",
              "1791 zł",
              "291 zł",
            ],
            ["Maj 2026", "2400 zł", "580 zł", "1500 zł", "1820 zł", "320 zł"],
            [
              "Czerwiec 2026",
              "2400 zł",
              "609 zł",
              "1500 zł",
              "1791 zł",
              "291 zł",
            ],
            [
              "Lipiec 2026",
              "2400 zł",
              "667 zł",
              "1500 zł",
              "1733 zł",
              "233 zł",
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
      <p className="mt-6 mb-4 text-blue-600 font-bold text-center text-base">
        Zajęcia dodatkowe płatne 150 zł / miesiąc
      </p>

      <div className="mt-6 text-base text-black max-w-3xl mx-auto text-center">
        <p className="font-semibold">
          Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
          ok. 20 sierpnia)
        </p>
      </div>
    </div>
  );
}
