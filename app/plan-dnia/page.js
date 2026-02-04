import Places from "@/components/homepage/Places";
import { Metadata } from "next";
import Header from "@/components/UI/Header";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Plan Dnia - Żłobek Wesołe Wygibasy Kraków | Zajęcia i Edukacja",
  alternates: {
    canonical: "/plan-dnia-w-zlobku",
  },
  keywords:
    "plan dnia w żłobku, Wesołe Wygibasy Kraków, harmonogram dnia, zajęcia dla dzieci, edukacja przedszkolna, rozrywka dla maluchów, zajęcia edukacyjne, artystyczne, ruchowe",
  description:
    "Plan dnia w żłobku Wesołe Wygibasy Kraków oferuje zajęcia edukacyjne, artystyczne i ruchowe. Sprawdź nasz harmonogram, który wspiera rozwój dzieci poprzez zabawę i naukę w bezpiecznym środowisku.",
};

export default function PlanDnia() {
  return (
    <main>
      {/* Sekcja baneru */}
      <section className="px-[9%] pt-8 pb-0">
        <Header text="Plan dnia w Żłobku Wesołe Wygibasy Kraków" />
        <div className="flex flex-col lg:flex-row justify-evenly gap-8 mt-12 mb-12">
          <div className="lg:w-1/2 mt-8">
            <p className="font-bold text-secondary  text-xl xl:text-2xl">
              Zobacz. I zapisz dziecko.
            </p>
            <h2 className="text-2xl xl:text-4xl font-semibold mt-4 mb-6">
              Zrównoważony Harmonogram Dnia w Żłobku Wesołe Wygibasy w Krakowie
            </h2>
            <p className="text-lg mb-4 xl:text-xl">
              Żłobek Wesołe Wygibasy w Krakowie to miejsce, gdzie edukacja,
              zabawa i rozwój dziecka idą w parze. Nasz plan dnia w żłobku jest
              tak zaprojektowany, aby maluchy mogły korzystać z różnorodnych
              zajęć dostosowanych do ich potrzeb, jednocześnie rozwijając
              umiejętności intelektualne, społeczne, emocjonalne i fizyczne.
              Rodzice mogą być pewni, że ich dzieci są w dobrych rękach, a nasza
              opieka skupia się na wszechstronnym rozwoju każdego malucha.
            </p>
            <div className="flex mt-6 gap-4">
              <Button text="Zapisy" href="/zapisy" />
              <Button2 text="Sprawdź plan" href="/zlobki" />
            </div>
          </div>
          <div className="lg:w-1/3 w-4/5 mx-auto flex justify-center items-center">
            <Image
              src="/plan-dnia/plan-dnia.webp"
              width={100}
              height={100}
              layout="responsive"
              alt="Plan dnia w Żłobku Wesołe Wygibasy Kraków - zajęcia dla dzieci"
            />
          </div>
        </div>
      </section>

      {/* Sekcja z kartami */}
      <section className="bg-[#ffe3e1] px-[9%] py-24 mask-cloud">
        <div className="text-center mb-12">
          <h2 className="text-2xl xl:text-4xl mt-10 font-bold mb-8 xl:mb-10">
            Zajęcia i Aktywności w Żłobku Wesołe Wygibasy - Kraków
          </h2>
          <p className="text-lg xl:text-xl">
            Nasz żłobek oferuje starannie opracowany, harmonijnie ułożony plan
            dnia, który zapewnia dzieciom idealne połączenie edukacji, zabawy
            oraz czasu na regenerację i odpoczynek. Każdego dnia dbamy o to, aby
            aktywności były dostosowane do indywidualnych potrzeb oraz rytmu
            rozwojowego maluchów. Dzięki temu dzieci mają możliwość rozwijania
            swoich umiejętności poznawczych, artystycznych i fizycznych, a
            jednocześnie zyskują czas na swobodną zabawę oraz chwilę
            wytchnienia. Nasz plan dnia został zaprojektowany tak, aby każdy
            jego element wspierał wszechstronny rozwój dziecka w bezpiecznym i
            stymulującym środowisku.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {cardData.map(({ title, text }, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#fa7070] rounded-3xl shadow-md p-6"
            >
              <h3 className="text-xl xl:text-2xl font-bold mb-4">
                {title}
              </h3>
              <p className="text-black text-lg font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Places background="true" />
    </main>
  );
}

const cardData = [
  {
    title: "Zajęcia Edukacyjne w Żłobku Wesołe Wygibasy",
    text: "W czasie zajęć edukacyjnych stawiamy na rozwój poznawczy i kształcenie umiejętności niezbędnych w dalszej edukacji. Nasze programy są dostosowane do wieku i możliwości dzieci, co pozwala na indywidualne podejście do każdego malucha. Edukacja przedszkolna w naszym żłobku to nie tylko zabawa, ale także nauka nowych pojęć, rozwijanie umiejętności logicznego myślenia oraz przygotowanie do przyszłej edukacji w przedszkolu.",
  },
  {
    title: "Zajęcia Artystyczne: Rozwój Kreatywności i Ekspresji",
    text: "Zajęcia artystyczne, takie jak malowanie, rysowanie czy prace manualne, są nieodłącznym elementem dnia w żłobku. Rozwijają one kreatywność, wyobraźnię oraz zdolności manualne dzieci. Dzięki temu maluchy mogą wyrażać swoje emocje i pomysły poprzez sztukę, co jest niezwykle ważne dla ich rozwoju emocjonalnego i społecznego.",
  },
  {
    title: "Ruch to zdrowie! Jak dbamy o aktywność dzieci?",
    text: "Aktywność fizyczna jest kluczowa dla prawidłowego rozwoju dziecka. W naszym żłobku oferujemy zajęcia ruchowe, które pomagają dzieciom rozwijać koordynację ruchową, zwinność i zdrowe nawyki. Dzieci uczestniczą w zabawach ruchowych, tańcu oraz grach zespołowych, co wspiera ich rozwój fizyczny i pozwala im wyładować nadmiar energii w sposób konstruktywny.",
  },
  {
    title: "Zajęcia Muzyczne i Taneczne",
    text: "W ramach zajęć dodatkowych organizujemy również zajęcia muzyczne i taneczne. Dzięki temu dzieci rozwijają wrażliwość muzyczną, uczą się rytmu i koordynacji. Muzyka stymuluje rozwój intelektualny oraz emocjonalny, wpływając korzystnie na samopoczucie maluchów. Dodatkowo, taniec pozwala dzieciom na spontaniczną ekspresję oraz poprawę zdolności motorycznych.",
  },
  {
    title: "Dodatkowe Aktywności w Żłobku: Odkrywanie Pasji",
    text: "Oprócz standardowych zajęć, oferujemy również dodatkowe aktywności, które wspierają odkrywanie indywidualnych pasji i zainteresowań dzieci. W ramach tych zajęć proponujemy naukę języków obcych, warsztaty kulinarne oraz zajęcia sportowe. To doskonała okazja, aby dzieci mogły rozwijać swoje talenty w przyjaznym i wspierającym środowisku, co z pewnością zaowocuje w ich dalszym rozwoju.",
  },
  {
    title: "Posiłki i odpoczynek w naszym żłobku",
    text: "Posiłki w naszym żłobku są starannie planowane i przygotowywane, aby dostarczać dzieciom wszystkich niezbędnych składników odżywczych, wspomagających ich prawidłowy rozwój. Każdy posiłek jest zbilansowany i dostosowany do potrzeb najmłodszych, z uwzględnieniem indywidualnych wymagań dietetycznych, alergii i preferencji.",
  },
];
