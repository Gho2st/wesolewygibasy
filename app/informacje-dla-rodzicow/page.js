import Header from "@/components/UI/Header";
import Image from "next/image";
import Dotation from "@/components/Info/dotation";

export const metadata = {
  title: "Informacje - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Znajdź ważne informacje dla rodziców i opiekunów dzieci w Żłobku Wesołe Wygibasy w Krakowie. Dowiedz się więcej o statucie, regulaminie, ochronie małoletnich oraz polityce prywatności.",
  alternates: {
    canonical: "/informacje-dla-rodzicow",
  },
  keywords:
    "informacje, rodo, ochrona małoletnich, zasady w Żłobku, polityka prywatności",
};

export default function informacje() {
  return (
    <>
      <div className="px-4 md:px-[9%] py-8">
        <div className="mb-16">
          <Header text="Informacje dla Rodziców i Opiekunów" />

          <div className="mt-12 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 lg:gap-0">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl xl:text-4xl font-bold mb-6">
                Drodzy Rodzice i Opiekunowie!
              </h2>
              <p className="text-xl mt-6">
                Witamy na stronie z ważnymi informacjami dotyczącymi
                funkcjonowania naszego żłobka Wesołe Wygibasy w Krakowie.
                Znajdziecie tutaj kluczowe dokumenty, zasady oraz procedury,
                które są istotne dla każdego rodzica i opiekuna. Naszym
                priorytetem jest zapewnienie bezpiecznej, wspierającej i
                rozwijającej opieki nad Waszymi dziećmi. Zachęcamy do zapoznania
                się z poniższymi dokumentami oraz informacjami dotyczącymi
                naszego żłobka.
              </p>
            </div>
            <div className="w-2/3 sm:w-1/2 lg:w-1/4">
              <Image
                src="/others/info.png"
                width={100}
                height={100}
                layout="responsive"
                alt="Grafika przedstawiająca zabawki"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 mt-24 pb-24">
          {/* Karta 1 */}
          <div className="bg-[#ffe6e1] text-[#ff583d] rounded-3xl shadow-lg p-6 flex flex-col justify-between">
            <div className="pb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Statut Żłobka Wesołe Wygibasy
              </h3>
              <p className="text-lg text-black">
                Statut żłobka określa zasady funkcjonowania naszej placówki, w
                tym prawa i obowiązki rodziców oraz personelu. Statut zawiera
                również informacje o zasadach rekrutacji, opłatach oraz
                organizacji dnia w naszym żłobku. Prosimy o pobranie i
                zapoznanie się z dokumentem:
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/STATUT-ZLOBEK.odt"
                download
                className="bg-[#fa7070] hover:bg-[#d86161] text-white font-bold py-2 px-4 rounded-md text-center w-1/2 transition-transform hover:scale-110"
              >
                Pobierz
              </a>
            </div>
          </div>

          {/* Karta 2 */}
          <div className="bg-[#ebe6fd] text-[#6d5ebc] rounded-3xl shadow-lg p-6 flex flex-col justify-between">
            <div className="pb-6">
              <h3 className="text-2xl font-semibold mb-4">Regulamin Żłobka</h3>
              <p className="text-lg text-black">
                Regulamin żłobka Wesołe Wygibasy zawiera szczegółowe informacje
                na temat codziennego funkcjonowania naszej placówki, w tym
                godzin otwarcia, zasad przyprowadzania i odbierania dzieci, a
                także norm dotyczących bezpieczeństwa i higieny. Zachęcamy do
                zapoznania się z regulaminem:
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="regulamin.odt"
                download
                className="bg-[#fa7070] hover:bg-[#d86161] text-white font-bold py-2 px-4 rounded-md text-center w-1/2 transition-transform hover:scale-110"
              >
                Pobierz
              </a>
            </div>
          </div>

          {/* Karta 3 */}
          <div className="bg-[#fff3d4] text-[#f8b03f] rounded-3xl shadow-lg p-6 flex flex-col justify-between">
            <div className="pb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Standardy Ochrony Małoletnich
              </h3>
              <p className="text-lg text-black">
                Ochrona małoletnich jest dla nas kluczowym priorytetem. W naszym
                żłobku obowiązują ściśle określone standardy ochrony dzieci
                przed krzywdzeniem. Dokument ten zawiera zasady postępowania w
                przypadku zagrożeń oraz procedury bezpieczeństwa.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/Standardy ochrony małoletnich przed krzywdzeniem w przedszkolu.pdf"
                className="bg-[#fa7070] hover:bg-[#d86161] text-white font-bold py-2 px-4 rounded-md text-center w-1/2 transition-transform hover:scale-110"
              >
                Otwórz
              </a>
            </div>
          </div>

          {/* Karta 4 */}
          <div className="bg-[#d6fcf9] text-[#35d4ae] rounded-3xl shadow-lg p-6 flex flex-col justify-between">
            <div className="pb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Polityka Prywatności i Ochrona Danych Osobowych
              </h3>
              <p className="text-lg text-black">
                Zgodnie z przepisami RODO, dokładamy wszelkich starań, aby
                chronić dane osobowe Państwa dzieci. Dokument zawiera
                szczegółowe informacje na temat przetwarzania danych osobowych w
                naszej placówce, w tym celów, na jakie są one zbierane, oraz
                praw przysługujących rodzicom i opiekunom.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/RODO-klauzula-informacyjna-copy.jpg"
                download
                className="bg-[#fa7070] hover:bg-[#d86161] text-white font-bold py-2 px-4 rounded-md text-center w-1/2 transition-transform hover:scale-110"
              >
                Pobierz
              </a>
            </div>
          </div>
        </div>
      </div>

      <Dotation />
    </>
  );
}
