import Header from "@/components/UI/Header";
import Image from "next/image";
import CardContainer from "@/components/Cards/CardContainer";
import Link from "next/link";
import Adaptacja from "./adaptacja";
import { FaLongArrowAltRight } from "react-icons/fa";

export const metadata = {
  title: "Adaptacja w Żłobku - Wesołe Wygibasy",
  alternates: {
    canonical: "/adaptacja-w-zlobku",
  },
  keywords:
    "adaptacja w Żłobku, jak przebiega adaptacja, wprowadzenie dziecka, opieka",
  description:
    "Dowiedz się, jak przebiega adaptacja w żłobku Wesołe Wygibasy w Krakowie. Wspieramy dzieci i rodziców w procesie łagodnego wejścia do nowego środowiska.",
};

const cardData = [
  {
    title: "Zabawa jako narzędzie adaptacji",
    description:
      "Zabawa jest najważniejszym elementem dnia w żłobku. W ramach adaptacji wykorzystujemy gry i zabawy integracyjne, które pomagają dzieciom w nawiązywaniu kontaktów z rówieśnikami oraz poznawaniu opiekunów. Dzięki zabawie dzieci łatwiej przystosowują się do nowego środowiska, a także rozwijają swoje umiejętności społeczne i emocjonalne.",
    link: { href: "/galeria", text: "Zobacz Galerię" },
  },
  {
    title: "Wsparcie Emocjonalne Dla Rodziców",
    description:
      "Adaptacja to nie tylko ważny proces dla dziecka, ale również dla rodziców. Rozumiemy, że pozostawienie malucha w nowym miejscu może budzić wiele emocji i wątpliwości. Dlatego nasi opiekunowie są zawsze gotowi do rozmowy, oferując wsparcie i odpowiedzi na wszystkie pytania. Wspólnie budujemy zaufanie, które przekłada się na spokój i bezpieczeństwo Państwa dziecka.",
    link: { href: "/o-nas", text: "Poczytaj o Nas" },
  },
  {
    title: "Korzyści Z Procesu Adaptacji",
    description:
      "Maluchy uczą się samodzielności, zdobywają nowe umiejętności społeczne i poznawcze, a także rozwijają swoje zainteresowania. Udział w zajęciach grupowych oraz indywidualnych pozwala na harmonijny rozwój w bezpiecznym i wspierającym otoczeniu.",
    link: { href: "/zapisy", text: "Zapisy do żłobka" },
  },
];

export default function AdaptacjaPage() {
  return (
    <main>
      <section className="px-[9%] pb-0 pt-8">
        <Header text="Proces Adaptacji w Żłobku Wesołe Wygibasy w Krakowie" />
        <Adaptacja />
      </section>

      <section className="py-16 px-[9%]">
        <CardContainer cards={cardData} />
      </section>

      <section className="bg-[#ffe3e1] mask-cloud px-[9%] py-24">
        <div className="text-center">
          <h2 className="text-3xl xl:text-5xl font-bold mt-12">
            Szczęśliwe dzieciństwo zaczyna się tutaj
          </h2>
          <p className="max-w-2xl text-lg xl:text-xl mx-auto mt-6">
            Naszym celem jest zapewnienie spokojnego i bezstresowego przejścia
            do nowego środowiska, co pozwoli dziecku na naturalny rozwój w
            bezpiecznym i wspierającym miejscu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16">
          <div className="bg-[#fbf5ec] rounded-xl shadow-md relative">
            <Image
              src="https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/6.jpg"
              width={400}
              height={300}
              alt="Zdjęcie adaptacyjne"
              className="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div className="p-6 text-sm">
              <h3 className="text-2xl font-semibold mb-3">
                Zaangażowanie rodziców
              </h3>
              <p className="mb-3 text-lg">
                Zaangażowanie Rodziców: Adaptacja zaczyna się od Państwa. Jeśli
                decydujecie się Państwo zapisać dziecko do żłobka, ważne jest,
                aby być pewnym tej decyzji. <br />
                <br /> Proszę obdarzyć nas zaufaniem i pamiętać, że nasze ciocie
                i my jesteśmy tu, aby Państwa dziecko było szczęśliwe i dobrze
                zaopiekowane. Pozytywne nastawienie rodziców ma ogromny wpływ na
                samopoczucie dziecka.
              </p>
              <Link
                href="/galeria"
                className="absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-md bg-[#fa7070] text-white font-bold text-xl shadow-md hover:bg-[#da6262]"
              >
                Galeria
              </Link>
            </div>
          </div>

          <div className="bg-[#fbf5ec] rounded-xl shadow-md relative">
            <Image
              src="https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/16.jpg"
              width={400}
              height={300}
              alt="Zdjęcie adaptacyjne"
              className="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div className="p-6 text-sm">
              <h3 className="text-2xl font-semibold mb-3">
                Personalizacja procesu
              </h3>
              <p className="mb-3 text-lg">
                Adaptacja jest sprawą bardzo indywidualną. Dzieci reagują na
                różne sposoby — niektóre mogą nie potrzebować adaptacji, podczas
                gdy inne mogą wymagać dodatkowego czasu. <br />
                <br /> W przypadku, gdy dziecko potrzebuje więcej czasu, prosimy
                rodziców o stopniowe wydłużanie pobytu w żłobku, o 2 godziny
                dziennie w pierwszym tygodniu.
              </p>
              <Link
                href="/o-nas"
                className="absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-md bg-[#fa7070] text-white font-bold text-xl shadow-md hover:bg-[#da6262]"
              >
                O nas
              </Link>
            </div>
          </div>

          <div className="bg-[#fbf5ec] rounded-xl shadow-md relative">
            <Image
              src="https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/adaptacja.jpg"
              width={400}
              height={300}
              alt="Zdjęcie adaptacyjne"
              className="w-full h-[300px] object-cover rounded-t-xl"
            />
            <div className="p-6 text-sm">
              <h3 className="text-2xl font-semibold mb-3">Wsparcie rodziny</h3>
              <p className="mb-3 text-lg">
                Jeśli to możliwe, warto, aby w adaptacji brało udział dwóch
                rodziców lub inny członek rodziny. Pomaga to dziecku w
                łatwiejszym przejściu do żłobka i szybciej przystosować się do
                nowego środowiska. <br />
                <br /> Wesołe Wygibasy to kameralna przestrzeń dla najmłodszych
                by czuli się jak w domu.
              </p>
              <Link
                href="/zapisy"
                className="absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-md bg-[#fa7070] text-white font-bold text-xl shadow-md hover:bg-[#da6262]"
              >
                Zapisy
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl xl:text-5xl font-bold mt-12">
            Plan Adaptacji
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-lg xl:text-xl">
            Adaptację rozpoczynamy zazwyczaj miesiąc lub 2 tygodnie przed
            planowanym przyjęciem dziecka do żłobka. Spotkania adaptacyjne
            odbywają się w godzinach <strong>7:00-8:30 lub 14:30-16:00</strong>,
            kiedy w żłobku jest mniej dzieci, co ułatwia nowe dzieciakom
            wchodzenie w grupę.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pb-16">
          {[1, 2, 3, 4].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-[#ff9494] shadow-md relative"
            >
              <strong className="text-4xl block mb-4">
                {["1", "2-4", "5-6", "7-8"][index]}
              </strong>
              <h4 className="text-2xl font-medium mb-2">
                {
                  [
                    "Spotkanie 1",
                    "Spotkania 2-4",
                    "Spotkania 5-6",
                    "Spotkania 7-8",
                  ][index]
                }
              </h4>
              <p className="text-lg">
                {
                  [
                    "Rodzic przychodzi z dzieckiem i pozostaje obecny na sali, umożliwiając dziecku zapoznanie się z salą, zabawkami i obserwację innych dzieci. Ten dzień traktujemy jako czas obserwacji, bez nawiązywania jeszcze relacji z opiekunkami.",
                    "Rodzic nadal jest obecny, ale pozwala dziecku na większą samodzielność. Opiekunki stopniowo budują więź z dzieckiem, proponując wspólne zabawy i zachęcając do interakcji z innymi maluchami.",
                    "Rodzic zaczyna powoli wycofywać się z sali i czeka w sali obok lub na zewnątrz, będąc dostępnym telefonicznie w razie potrzeby.",
                    "Dziecko zostaje w żłobku samo na 1,5 godziny, a rodzic odbiera je po tym czasie.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
