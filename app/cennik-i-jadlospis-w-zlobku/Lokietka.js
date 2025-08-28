export default function Lokietka() {
  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="w-full mt-4 border text-center text-sm">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="p-2 border">Miesiąc</th>
            <th className="p-2 border">Czesne</th>
            <th className="p-2 border">Dotacja U.M</th>
            <th className="p-2 border">Dotacja Aktywnie w Żłobku*</th>
            <th className="p-2 border bg-blue-600">Wpłata na konto</th>
            <th className="p-2 border">Ostateczne opłaty</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              month: "Październik 2025",
              tuition: "2200 zł",
              um: "805 zł",
              active: "1395 zł",
              pay: "1395 zł",
              final: "0 zł",
            },
            {
              month: "Listopad 2025",
              tuition: "2200 zł",
              um: "665 zł",
              active: "1500 zł",
              pay: "1535 zł",
              final: "35 zł",
            },
            {
              month: "Grudzień 2025",
              tuition: "2200 zł",
              um: "700 zł",
              active: "1500 zł",
              pay: "1500 zł",
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
        Czesne w całości pokrywane z projektu Aktywny Maluch oraz dotacji urzędu
        miasta Kraków
      </h3>
    </div>
  );
}
