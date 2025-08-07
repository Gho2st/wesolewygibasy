export default function Second() {
  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="w-full mt-4 border text-center text-sm">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="p-2 border">Miesiąc</th>
            <th className="p-2 border">Czesne</th>
            <th className="p-2 border">Dotacja U.M</th>
            <th className="p-2 border">Dotacja Maluch</th>
            <th className="p-2 border">Aktywnie w Żłobku</th>
            <th className="p-2 border bg-blue-600">Wpłata na konto</th>
            <th className="p-2 border">Ostateczne opłaty</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              month: "Lipiec 2025",
              tuition: "2250 zł",
              um: "805 zł",
              maluch: "836 zł",
              active: "609 zł",
              pay: "609 zł",
              final: "0 zł",
            },
            {
              month: "Sierpień 2025",
              tuition: "2250 zł",
              um: "700 zł",
              maluch: "836 zł",
              active: "714 zł",
              pay: "714 zł",
              final: "0 zł",
            },
            {
              month: "Wrzesień 2025",
              tuition: "2250 zł",
              um: "770 zł",
              maluch: "836 zł",
              active: "644 zł",
              pay: "644 zł",
              final: "0 zł",
            },
            {
              month: "Październik 2025",
              tuition: "2250 zł",
              um: "805 zł",
              maluch: "836 zł",
              active: "609 zł",
              pay: "609 zł",
              final: "0 zł",
            },
            {
              month: "Listopad 2025",
              tuition: "2250 zł",
              um: "665 zł",
              maluch: "836 zł",
              active: "749 zł",
              pay: "749 zł",
              final: "0 zł",
            },
            {
              month: "Grudzień 2025",
              tuition: "2250 zł",
              um: "700 zł",
              maluch: "836 zł",
              active: "714 zł",
              pay: "714 zł",
              final: "0 zł",
            },
          ].map((row, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "hover:bg-gray-200"
              }
            >
              <td className="p-2 border">{row.month}</td>
              <td className="p-2 border">{row.tuition}</td>
              <td className="p-2 border">{row.um}</td>
              <td className="p-2 border">{row.maluch}</td>
              <td className="p-2 border">{row.active}</td>
              <td className="p-2 border">{row.pay}</td>
              <td className="p-2 border">{row.final}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-6 mb-4 text-blue-600 font-bold text-center text-base">
        Zajęcia dodatkowe płatne 300 zł / miesiąc
      </p>

      <p className="text-center text-sm font-medium">
        <strong>
          * Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
          ok. 20 sierpnia)
        </strong>
      </p>

      <h3 className="text-center text-teal-500 text-base font-bold underline mt-6 mb-12">
        Czesne w całości pokrywane z projektu maluch + 2022–2029 oraz dotacji
        urzędu miasta Kraków
      </h3>
    </div>
  );
}
