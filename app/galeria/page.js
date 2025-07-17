import Header from "@/components/UI/Header";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import CardContainer from "@/components/Cards/CardContainer";
import GallerySection from "./GallerySection";

export const metadata = {
  title: "Galeria - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Przeglądaj naszą galerię zdjęć i zobacz, jak wygląda codzienne życie oraz wyjątkowe wydarzenia w żłobku Wesołe Wygibasy w Krakowie.",
  alternates: {
    canonical: "/galeria",
  },
  keywords:
    "żłobek, Wesołe Wygibasy, Kraków, galeria zdjęć, codzienne życie żłobka, wydarzenia dziecięce, opieka nad dziećmi, rozwój dziecka przez zabawę",
};

const cardData = [
  {
    title: "Codzienne życie",
    description:
      "Nasze zdjęcia dokumentują codzienne aktywności dzieci, które biorą udział w różnorodnych zajęciach, rozwijających ich zdolności twórcze, intelektualne i społeczne. Każde zajęcia są dostosowane do ich potrzeb rozwojowych. Zobacz, jak dbamy o szczęście i harmonijny rozwój najmłodszych w Krakowie.",
  },
  {
    title: "Wyjątkowe wydarzenia i uroczystości",
    description:
      "Nasz żłobek regularnie organizuje specjalne wydarzenia, takie jak urodziny, bale przebierańców, teatrzyki i przedstawienia, które dostarczają dzieciom wielu pozytywnych emocji. Galeria zdjęć ukazuje te magiczne chwile pełne uśmiechu i radości, w których każde dziecko ma okazję do integracji i wspólnej zabawy z rówieśnikami.",
  },
  {
    title: "Rozwój dziecka przez zabawę",
    description:
      "Wierzymy, że nauka przez zabawę jest kluczem do wszechstronnego rozwoju dziecka. Codzienne aktywności są dostosowane do indywidualnych potrzeb maluchów, tak aby rozwijały ich zdolności poznawcze, motoryczne i emocjonalne. Zobacz w galerii, jak kreatywne i angażujące zajęcia wspierają rozwój Twojego dziecka w bezpiecznej i pełnej miłości atmosferze.",
  },
  {
    title: "Przygotowanie do przedszkola",
    description:
      "Żłobek nie tylko dba o bieżący rozwój dzieci, ale również przygotowuje je do przyszłej edukacji przedszkolnej. Nasze zajęcia rozwijają samodzielność, zdolności interpersonalne oraz umiejętność pracy w grupie, co ułatwia adaptację w późniejszych etapach edukacji. W galerii możesz zobaczyć, jak poprzez zabawę uczymy dzieci ważnych umiejętności, które pomogą im w dalszym życiu.",
  },
  {
    title: "Współpraca z rodzicami",
    description:
      "Aktywnie współpracujemy z rodzicami, aby zapewnić dzieciom najlepszą opiekę i wsparcie w rozwoju. Regularnie organizujemy spotkania, podczas których rodzice mogą dowiedzieć się więcej o postępach swoich dzieci oraz wziąć udział w warsztatach i zajęciach integracyjnych. Nasza galeria dokumentuje takie spotkania, pokazując, jak ważna jest dla nas współpraca na linii żłobek-rodzice.",
  },
  {
    title: "Zajęcia z języka angielskiego",
    description:
      "Od najmłodszych lat wprowadzamy dzieci w świat języka angielskiego. Poprzez zabawę i piosenki uczymy podstawowych słów i zwrotów, które wspierają rozwój lingwistyczny maluchów. Nasze zajęcia są dostosowane do wieku i poziomu rozwoju dzieci, a efekty możesz zobaczyć w naszej galerii, gdzie uchwyciliśmy, jak dzieci bawią się i uczą w trakcie zajęć z języka angielskiego.",
  },
];

export default function Galeria() {
  return (
    <main className="py-10">
      <div className="px-[9%]">
        <Header text="Galeria z życia codziennego i wydarzeń w Żłobku Wesołe Wygibasy Kraków" />

        {/* Baner */}
        <div className="flex flex-col lg:flex-row justify-evenly gap-12 my-12 xl:my-24 2xl:my-32">
          {/* Obrazek */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <Image
              src="/monkeys/7.gif"
              width={100}
              height={100}
              alt="Wyskakująca małpka z patykiem w łapce"
              layout="responsive"
              className="rounded-[6rem] max-w-[300px]"
            />
          </div>

          {/* Tekst */}
          <div className="w-full lg:w-[50%] mx-auto flex flex-col justify-center">
            <p className="text-[#08c6c3] font-bold text-xl xl:text-2xl">
              Zobacz. Oceń. Zapisz.
            </p>
            <h2 className="text-3xl xl:text-4xl font-semibold my-4">
              Zobacz jak spędzamy czas!
            </h2>
            <p className="text-lg xl:text-xl font-normal mb-4">
              Nasza galeria zdjęć pozwala uchwycić najpiękniejsze momenty z
              życia dzieci w żłobku
              <span className="font-semibold text-primary">
                {" "}
                Wesołe Wygibasy
              </span>{" "}
              w Krakowie. Dzięki niej, każdy rodzic może zobaczyć, jak wygląda
              nasza codzienna praca: od zabaw i nauki po wyjątkowe wydarzenia i
              uroczystości. Oferujemy szeroki wachlarz zajęć wspierających
              rozwój emocjonalny, społeczny i intelektualny dzieci. Regularnie
              organizujemy atrakcje, takie jak teatrzyki, bale przebierańców czy
              urodziny, które na długo pozostają w pamięci najmłodszych.
            </p>
            <p className="text-lg xl:text-xl font-normal mb-4">
              Zapraszamy do obejrzenia zdjęć, które ukazują codzienność
              maluszków w naszej placówce. Odkryj, jak twórczo i radośnie
              spędzają czas.
            </p>
            <div className="flex mt-6 gap-4">
              <Button text="Zapisy" href="/zapisy" />
              <Button2 text="Galeria" href="#placówki" />
            </div>
          </div>
        </div>

        {/* Sekcja z nagłówkiem i opisem */}
        <section className="pt-12 text-center mb-12" id="placówki">
          <h2 className="text-3xl xl:text-4xl font-semibold mb-6">
            Odkryj, co czyni nas wyjątkowym miejscem!
          </h2>
          <p className="text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto">
            W żłobku Wesołe Wygibasy w Krakowie dbamy o wszechstronny rozwój
            każdego dziecka, oferując bogaty program zajęć i wydarzeń. Nasza
            galeria zdjęć przedstawia codzienne aktywności maluszków oraz
            wyjątkowe momenty, takie jak urodziny, teatrzyki, przedstawienia i
            bale przebierańców. Zobacz, jak wiele radości przynoszą te chwile
            najmłodszym w naszym żłobku.
          </p>
        </section>

        {/* Karty */}
        <CardContainer cards={cardData} />
      </div>

      {/* Galeria */}
      <div className="mt-16">
        <GallerySection />
      </div>
    </main>
  );
}
