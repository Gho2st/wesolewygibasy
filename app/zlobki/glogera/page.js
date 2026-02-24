import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import CardContainer from "@/components/Cards/CardContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Map from "@/components/UI/Map";
import DayScheduleGlogera from "@/components/Info/DayScheduleGlogera";
import NurseryHeader from "@/components/zlobki/header";
import ZlobkiBaner from "@/components/zlobki/Baner";

export const metadata = {
  title: "Żłobek Kraków Prądnik Biały ul. Glogera | Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/glogera",
  },
  description:
    "Prywatny żłobek na Prądniku Białym (ul. Glogera 53). Nowoczesna placówka z własnym ogródkiem, blisko Zielonek. Dotacje UMK i program Aktywnie w Żłobku. Sprawdź!",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Żłobek Wesołe Wygibasy - ul. Glogera",
  image: "https://wesolewygibasy.pl/zlobki/glogera.jpg",
  description:
    "Prywatny żłobek na Prądniku Białym z własnym ogródkiem i bogatym programem zajęć.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Glogera 53/LU2",
    addressLocality: "Kraków",
    addressRegion: "Małopolskie",
    postalCode: "31-222",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.1034",
    longitude: "19.9389",
  },
  url: "https://wesolewygibasy.pl/zlobki/glogera",
  telephone: "+48697560022",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "17:00",
    },
  ],
};

const images = [
  {
    src: "/sliders/glogera-slider/g1.jpg",
    alt: "Przestronna sala zabaw w żłobku przy ul. Glogera w Krakowie z domkowymi regałami pełnymi zabawek edukacyjnych.",
  },
  {
    src: "/sliders/glogera-slider/g2.jpg",
    alt: "Jasne wnętrze żłobka na Prądniku Białym – widok na salę zabaw z dywanem do ćwiczeń i wyjściem na ogródek",
  },
  {
    src: "/sliders/glogera-slider/g3.jpg",
    alt: "Nowoczesna szatnia dla dzieci w żłobku na ul. Glogera – kolorowe szafki w pastelowych barwach.",
  },
  {
    src: "/sliders/glogera-slider/g4.jpg",
    alt: "Strefa jadalniana i miejsce do nauki w żłobku Wesołe Wygibasy przy ul. Glogera 53",
  },
  {
    src: "/sliders/glogera-slider/g6.jpg",
    alt: "Regał z zabawkami sensorycznymi i kącik muzyczny w żłobku na Prądniku Białym",
  },
  {
    src: "/sliders/glogera-slider/g7.jpg",
    alt: "Własny zielony ogródek żłobka przy ul. Glogera – bezpieczna przestrzeń do zabawy na trawie dla maluchów",
  },
];

const cardData = [
  {
    title: "Ogródek i plac zabaw",
    description:
      "Żłobek Wesołe Wygibasy przy ul. Glogera posiada również własny ogródek, gdzie dzieci mogą spędzać czas na świeżym powietrzu, bawiąc się na placu zabaw. Oferujemy także pełne zaplecze sanitarne, w tym łazienkę dostosowaną do potrzeb najmłodszych oraz wygodną szatnię.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Druga placówka",
    description:
      "Niepubliczny żłobek Wesołe Wygibasy przy ul. Glogera 53/LU2 w Krakowie to nasza druga placówka, oferująca wysokiej jakości opiekę nad dziećmi w bezpiecznym i przyjaznym otoczeniu.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Historia i lokalizacja",
    description:
      "Nasza placówka została wpisana do rejestru żłobków i klubów malucha 1 czerwca 2021 roku. Lokalizacja przy ul. Glogera w Krakowie była wcześniej znana okolicznym rodzinom jako sala zabaw Kamyczki Patyczki, która cieszyła się dużą popularnością do marca 2021 roku. Dzięki temu, mieszkańcy okolicy już od dawna mają zaufanie do tego miejsca, które teraz przekształciło się w nowoczesny i dobrze wyposażony żłobek.",
    link: { href: "/adaptacja", text: "Adaptacja w Żłobku" },
  },
];

export default function Glogera() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ZlobkiBaner
        bgImage="/zlobki/glogera.jpg"
        title="Żłobek Kraków Prądnik Biały – ul. Glogera"
        subtitle="ul. Glogera 53, Kraków – Prądnik Biały"
        description="Własny zielony ogródek i bezpieczna zabawa. Idealna lokalizacja dla rodzin z Prądnika Białego i Zielonek."
      />

      {/* Opis + karty */}
      <section className="pt-20 px-[9%]">
        <div className=" mx-auto">
          <NurseryHeader
            text="Szukasz bezpiecznego, nowoczesnego żłobka w Krakowie? Wesołe
            Wygibasy przy ul. Glogera 53/LU2 oferuje profesjonalną opiekę,
            rozwój oraz bogaty program zajęć w przyjaznej atmosferze.
            Sprawdź szczegóły i zapisz swoje dziecko już dziś!"
          />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="py-16">
        <div className=" mx-auto">
          <SliderComponent images={images} />
        </div>
      </section>

      {/* Plan dnia */}
      <section className="bg-gray-50 py-16">
        <div className=" mx-auto">
          <DayScheduleGlogera header="Plan Dnia i zajęcia dodatkowe" />
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="glogera" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <Map
          description={
            "Nasz żłobek na Prądniku Białym znajduje się przy ul. Glogera 53, w nowoczesnym budynku z wygodnym dojazdem od strony Zielonek oraz osiedla Łokietka."
          }
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0746082710157!2d19.92382417646559!3d50.103610471528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8cf00937ed%3A0x39479b7e727e42d3!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815664167!5m2!1spl!2spl"
        />
      </section>
    </main>
  );
}
