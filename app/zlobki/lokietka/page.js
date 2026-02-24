// import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Map from "@/components/UI/Map";
import DayScheduleLokietka from "@/components/Info/DayScheduleLokietka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/zlobki/header";
import ZlobkiBaner from "@/components/zlobki/Baner";
import SliderComponent from "@/components/UI/slider/slider";

export const metadata = {
  title: "Żłobek Kraków Krowodrza ul. Łokietka | Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/lokietka",
  },
  description:
    "Prywatny żłobek na Krowodrzy (ul. Łokietka 23, Kraków). Kameralna grupa, dotacje z UMK i programu Aktywnie w Żłobku. Codzienne spacery w Parku Łokietka. Zapisz malucha!",
};

const images = [
  {
    src: "/sliders/lokietka-slider/1.webp",
    alt: "Wejście do żłobka Wesołe Wygibasy przy ul. Łokietka 23 w Krakowie – widoczny szyld i godziny otwarcia.",
  },
  {
    src: "/sliders/lokietka-slider/2.webp",
    alt: "Kolorowe szafki w szatni żłobka Wesołe Wygibasy na Krowodrzy – estetyczne wnętrze dla maluchów.",
  },
  {
    src: "/sliders/lokietka-slider/3.webp",
    alt: "Sala zabaw w żłobku na Łokietka – krzesełko do karmienia Tulano na tle kolorowej wykładziny i szafek z grafikami.",
  },
  {
    src: "/sliders/lokietka-slider/4.webp",
    alt: "Nowoczesne szafki edukacyjne w żłobku Wesołe Wygibasy Kraków – kolorowe grafiki i kącik czytelniczy.",
  },
  {
    src: "/sliders/lokietka-slider/5.webp",
    alt: "Jasna i przeszklona sala zabaw w żłobku na Krowodrzy z widokiem na zieleń i kącikiem kuchennym dla dzieci.",
  },
  {
    src: "/sliders/lokietka-slider/6.webp",
    alt: "Przytulny kącik w żłobku przy ul. Łokietka z miękką ławeczką i dekoracją w kształcie chmurki na ścianie.",
  },
  {
    src: "/sliders/lokietka-slider/7.webp",
    alt: "Drewniany pociąg na placu zabaw w pobliżu żłobka Wesołe Wygibasy – ekologiczne miejsce zabaw dla dzieci.",
  },
  {
    src: "/sliders/lokietka-slider/8.webp",
    alt: "Park Łokietka w Krakowie tuż obok żłobka – idealne miejsce na codzienne spacery i rekreację maluchów.",
  },
];

const cardData = [
  {
    title: "Bliskość Parku Łokietka",
    description:
      "Nasza lokalizacja gwarantuje codzienne spacery i kontakt z naturą w pobliskim Parku Łokietka – idealne miejsce na zabawę i odpoczynek.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Adaptacja",
    description:
      "Rozpoczynamy proces adaptacyjny, aby Twoje dziecko mogło łagodnie i bez stresu rozpocząć przygodę z nami.",
    link: { href: "/adaptacja", text: "Adaptacja w Żłobku" },
  },
  {
    title: "Otwarty w październiku 2025",
    description:
      "Oficjalne otwarcie żłobka październik 2025 - zapraszamy do zapoznania się z naszą ofertą i zapisów!",
    link: { href: "/o-nas", text: "O Nas" },
  },
  {
    title: "Niskie Czesne!",
    description:
      "Jesteśmy placówką dotowaną, co oznacza przystępne ceny bez kompromisów w jakości opieki i programu edukacyjnego. Rodzice płacą tylko za wyżywienie.",
    link: { href: "/cennik", text: "Cennik" },
  },
  {
    title: "Zajęcia Rozwojowe",
    description:
      "Oferujemy różnorodne zajęcia, takie jak rytmika, dogoterapia, angielski, plastyka i zabawy sensoryczne, wspierające rozwój Twojego malucha.",
    link: { href: "/plan-dnia", text: "Plan Dnia w Żłobku" },
  },
  {
    title: "Mała Ilość Dzieci",
    description:
      "W placówce pod opieką docelowo będzie 25 dzieci. Dzięki kameralnym grupom zapewniamy indywidualną opiekę i rodzinną atmosferę, w której każde dziecko czuje się wyjątkowo.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
];

export default function Lokietka() {
  return (
    <main>
      <ZlobkiBaner
        title="Żłobek Kraków Krowodrza – ul. Łokietka"
        subtitle="ul. Łokietka 23, Kraków – Krowodrza"
        bgImage="/sliders/lokietka-slider/4.webp"
        description="Codzienne spacery i zabawa wśród zieleni. Znajdziesz nas tuż przy Parku Łokietka."
      />

      {/* Karty + Header */}
      <section className="xl:pt-16 px-[9%]">
        <div className=" mx-auto">
          <NurseryHeader
            text="Żłobek Wesołe Wygibasy przy ul. Łokietka to kameralna placówka w dzielnicy Krowodrza. 
  Zapewniamy profesjonalną opiekę blisko centrum Krakowa i Nowego Kleparza. 
  Naszym atutem jest domowa atmosfera i bezpośrednie sąsiedztwo Parku Łokietka."
          />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      <SliderComponent images={images} />

      {/* Plan Dnia */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto">
          <DayScheduleLokietka
            header="Plan Dnia i zajęcia dodatkowe"
            time="17:30"
          />
        </div>
      </section>

      {/* Galeria */}
      {/* <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="sliczna" />
        </div>
      </section> */}

      {/* Mapa */}
      <section className="">
        <Map
          description={
            "Żłobek Wesołe Wygibasy na Krowodrzy znajduje się przy ul. Łokietka 23, w bezpośrednim sąsiedztwie Parku Łokietka i blisko ulicy Wrocławskiej."
          }
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3950908862935!2d19.92613357625054!3d50.078889314047764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab3657246b%3A0x5be9f5ae07b4cb78!2zV8WCYWR5c8WCYXdhIMWBb2tpZXRrYSAyMywgMzAtMDEwIEtyYWvDs3c!5e0!3m2!1sen!2spl!4v1742315529506!5m2!1sen!2spl"
        />
      </section>
    </main>
  );
}
