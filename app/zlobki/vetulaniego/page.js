import ImagesContainer from "@/components/Gallery/ImagesContainer";
import CardContainer from "@/components/Cards/CardContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Map from "@/components/UI/Map";
import DayScheduleVetulaniego from "@/components/Info/DayScheduleVetulaniego";
import NurseryHeader from "@/components/zlobki/header";
import ZlobkiBaner from "@/components/zlobki/Baner";

export const metadata = {
  title: "Żłobek Kraków Prądnik Biały ul. Vetulaniego | Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/vetulaniego",
  },
  description:
    "Prywatny żłobek na Prądniku Białym (ul. Vetulaniego 8). Profesjonalna opieka, własny plac zabaw i dotacje Aktywnie w Żłobku. Idealny dojazd od ul. Opolskiej. Sprawdź!",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Klub Malucha Wesołe Wygibasy - ul. Vetulaniego (Prądnik Biały)",
  image: "https://wesolewygibasy.pl/zlobki/vetulaniego.webp",
  description:
    "Nowoczesny Klub Malucha na krakowskim Prądniku Białym. Bezpieczna opieka, własny ogródek i doskonała lokalizacja blisko centrów biznesowych.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Adama Vetulaniego 8",
    addressLocality: "Kraków",
    addressRegion: "Małopolskie",
    postalCode: "31-227",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.0952",
    longitude: "19.9415",
  },
  url: "https://wesolewygibasy.pl/zlobki/vetulaniego",
  telephone: "+48697560022",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
};

const images = [
  {
    src: "/sliders/klub-malucha-slider/k1.jpg",
    alt: "Lekcja rytmiki i muzyki w żłobku Wesołe Wygibasy – dzieci bawiące się przy akompaniamencie pianina cyfrowego.",
  },
  {
    src: "/sliders/klub-malucha-slider/k2.jpg",
    alt: "Kreatywne zajęcia z dużymi piankowymi klockami w sali zabaw żłobka – wspieranie motoryki dużej.",
  },
  {
    src: "/sliders/klub-malucha-slider/k3.jpg",
    alt: "Dzieci bawiące się w piaskownicy w prywatnym ogrodzie żłobka Wesołe Wygibasy.",
  },
  {
    src: "/sliders/klub-malucha-slider/k4.jpg",
    alt: "Warsztaty ogrodnicze dla maluchów – dzieci sadzące rośliny do doniczek w ramach zajęć edukacyjnych.",
  },
];

const cardData = [
  {
    title: "Klub Malucha Wesołe Wygibasy",
    description:
      "Kameralny żłobek w domu jednorodzinnym z pięknym ogrodem, z dala od miejskiego zgiełku. Spokojna atmosfera, natura i indywidualna opieka.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Ogród i spacery na świeżym powietrzu",
    description:
      "Duży ogród z placem zabaw, otoczony drzewami. Dzieci codziennie wychodzą na spacery i kontakt z naturą.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Opieka nad dziećmi w wieku od 1 do 3 lat",
    description:
      "Grupa max. 20 dzieci, 3–4 opiekunki. Indywidualna troska, ciepło i bezpieczeństwo. Dzieci szczęśliwe, najedzone i zadbane.",
    link: { href: "/adaptacja", text: "Adaptacja w Żłobku" },
  },
];

export default function VetulaniegoPage() {
  return (
    <main>
      <ZlobkiBaner
        bgImage="/zlobki/vetulaniego.webp"
        title="Klub Malucha Kraków Prądnik Biały – ul. Vetulaniego"
        subtitle="ul. Vetulaniego 8, Kraków – Prądnik Biały"
        description="Przytulny, kameralny żłobek z własnym ogródkiem i placem zabaw – dzieciaki szaleją bezpiecznie wśród drzew, bez wychodzenia na ulicę"
      />

      {/* Karty i opis */}
      <section className="pt-20 px-[9%]">
        <div className="mx-auto">
          <NurseryHeader text="Jeśli szukasz bezpiecznego, kameralnego i inspirującego żłobka w Krakowie, zapraszamy do Klubu Malucha Wesołe Wygibasy na ulicy Vetulaniego 8. Nasza placówka oferuje profesjonalną opiekę nad dziećmi w wieku od 1 do 3 lat, zapewniając im rozwój w ciepłej i przyjaznej atmosferze, z dala od miejskiego zgiełku." />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="bg-white">
        <div className="">
          <SliderComponent images={images} />
        </div>
      </section>

      {/* Plan dnia */}
      <section className=" bg-gray-50">
        <DayScheduleVetulaniego header="Plan Dnia i zajęcia dodatkowe" />
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="vetulaniego" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <Map
          description={
            "Nasza placówka na Prądniku Białym znajduje się przy ul. Vetulaniego 8, z szybkim dojazdem od ul. Opolskiej i ul. Mackiewicza. Bliskość biurowców Vinci i Astris czyni nas idealnym wyborem dla pracujących rodziców."
          }
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.531008552978!2d19.922438176465064!3d50.09506707152642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a446e9d3211%3A0x2479f81b021d9154!2s%C5%BB%C5%82obek%20Klub%20Malucha%20-%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815573472!5m2!1spl!2spl"
        />
      </section>
    </main>
  );
}
