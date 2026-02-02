export default function Lokietka() {
  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="w-full mt-4 border text-center text-sm">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="p-2 border">Miesiąc</th>
            <th className="p-2 border">Czesne</th>
            <th className="p-2 border">Dotacja U.M</th>
            <th className="p-2 border">Dotacja Aktywnie w Żłobku</th>
            <th className="p-2 border bg-blue-600">Wpłata na konto</th>
            <th className="p-2 border">Ostateczne opłaty</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              month: "Styczeń 2026",
              tuition: "2200 zł",
              um: "580 zł",
              active: "1500 zł",
              pay: "1620 zł",
              final: "120 zł",
            },
            {
              month: "Luty 2026",
              tuition: "2200 zł",
              um: "580 zł",
              active: "1500 zł",
              pay: "1620 zł",
              final: "120 zł",
            },
            {
              month: "Marzec 2026",
              tuition: "2200 zł",
              um: "638 zł",
              active: "1500 zł",
              pay: "1562 zł",
              final: "62 zł",
            },
            {
              month: "Kwiecień 2026",
              tuition: "2200 zł",
              um: "609 zł",
              active: "1500 zł",
              pay: "1591 zł",
              final: "91 zł",
            },
            {
              month: "Maj 2026",
              tuition: "2200 zł",
              um: "580 zł",
              active: "1500 zł",
              pay: "1620 zł",
              final: "120 zł",
            },
            {
              month: "Czerwiec 2026",
              tuition: "2200 zł",
              um: "609 zł",
              active: "1500 zł",
              pay: "1591 zł",
              final: "91 zł",
            },
            {
              month: "Lipiec 2026",
              tuition: "2200 zł",
              um: "667 zł",
              active: "1500 zł",
              pay: "1533 zł",
              final: "33 zł",
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
              <td className="p-2 border">{row.active}</td>
              <td className="p-2 border">{row.pay}</td>
              <td className="p-2 border">{row.final}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-center mt-10 text-sm font-medium">
        <strong>
          * Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
          ok. 20 sierpnia)
        </strong>
      </p>

      <h3 className="text-center text-teal-500 text-base font-bold underline mt-6 mb-12">
        Czesne pokrywane z projektu Aktywny Maluch oraz dotacji urzędu miasta
        Kraków
      </h3>
    </div>
  );
}
