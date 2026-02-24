import ImagesContainer from "@/components/Gallery/ImagesContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import DayScheduleStanczyka from "@/components/Info/DayScheduleStanczyka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/zlobki/header";
import ZlobkiBaner from "@/components/zlobki/Baner";

export const metadata = {
  title: "Żłobek Kraków Bronowice ul. Stańczyka | Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/stanczyka",
  },
  description:
    "Prywatny żłobek na Bronowicach (ul. Stańczyka 8). Troskliwa opieka, domowa atmosfera i dofinansowanie Aktywnie w Żłobku. Sprawdź naszą ofertę i zapisz dziecko!",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Żłobek Wesołe Wygibasy - ul. Stańczyka (Bronowice)",
  image: "https://wesolewygibasy.pl/zlobki/stanczyka.jpg",
  description:
    "Prywatny żłobek na krakowskich Bronowicach. Troskliwa opieka, nowoczesne wnętrza i codzienne spacery przy Młynówce Królewskiej.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Stańczyka 8/LU3",
    addressLocality: "Kraków",
    addressRegion: "Małopolskie",
    postalCode: "30-0126",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.0760",
    longitude: "19.8970",
  },
  url: "https://wesolewygibasy.pl/zlobki/stanczyka",
  telephone: "+48697560022",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "17:30",
    },
  ],
};

const images = [
  {
    src: "/sliders/stanczyka-slider/st1.jpg",
    alt: "Sala zabaw w żłobku na Bronowicach z dużym dywanem w słonie, szafkami-domkami i dekoracyjnym oświetleniem w kształcie balonów",
  },
  {
    src: "/sliders/stanczyka-slider/st2.jpg",
    alt: "Nowoczesne wnętrze żłobka przy ul. Stańczyka z widokiem na osiedle przez duże przeszklenia i kącikiem do karmienia.",
  },
  {
    src: "/sliders/stanczyka-slider/st3.jpg",
    alt: "Główna sala zajęć w żłobku Wesołe Wygibasy na ul. Stańczyka z niskimi stolikami i krzesłami dostosowanymi do maluchów.",
  },
  {
    src: "/sliders/stanczyka-slider/st4.jpg",
    alt: "Witryna zewnętrzna żłobka przy ul. Stańczyka 8 w Krakowie z kolorowymi grafikami zwierząt.",
  },
  {
    src: "/sliders/stanczyka-slider/st5.jpg",
    alt: "Wejście do placówki Wesołe Wygibasy na Bronowicach z wyraźnym oznaczeniem lokalu LU 3.",
  },
  {
    src: "/sliders/stanczyka-slider/st6.jpg",
    alt: "Szeroka perspektywa sali wielofunkcyjnej w żłobku przy ul. Stańczyka, łącząca strefę zabawy i nauki.",
  },
];

const cardData = [
  {
    title: "Rozwój i nowe możliwości w okolicy",
    description:
      "Od dłuższego czasu poszukiwaliśmy lokalu w tej okolicy, aby móc opiekować się jeszcze większą liczbą dzieci i oferować profesjonalną opiekę. Teraz dzieci będą pod troskliwą opieką doświadczonych cioć: Beatki, Kasi i Agnieszki.",
    link: {
      href: "/informacje-dla-rodzicow",
      text: "Informacje dla rodziców",
    },
  },
  {
    title: "Bezpieczne i komfortowe warunki dla maluchów",
    description:
      "Żłobek przy Stańczyka 8/LU3 składa się z dwóch sal zabaw dla dzieci (dla różnych grup wiekowych), szatni, łazienki oraz kuchni. Wnętrza są urządzone w pastelowych kolorach, co tworzy przytulną atmosferę przypominającą dziecięcy pokój.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Bliskość Młynówki Królewskiej",
    description:
      "Nasz żłobek znajduje się w pobliżu malowniczej Młynówki Królewskiej, co pozwala dzieciom na częste spacery i kontakt z naturą.",
    link: {
      href: "/adaptacja",
      text: "Adaptacja w Żłobku",
    },
  },
];

export default function Stanczyka() {
  return (
    <main>
      {/* Baner */}
      <ZlobkiBaner
        bgImage="/zlobki/stanczyka.jpg"
        title="Żłobek Kraków Bronowice – ul. Stańczyka"
        subtitle="ul. Stańczyka 8/LU3, Kraków – Bronowice"
        description="Tuż przy Młynówce Królewskiej – codzienne spacery i zabawa na najlepszych placach zabaw w sercu Bronowic."
      />

      {/* Karty i opis */}
      <section className="pt-20 px-[9%]">
        <div className="mx-auto">
          <NurseryHeader text="Nasz żłobek w Krakowie, Wesołe Wygibasy, to miejsce pełne radości i troskliwej opieki. Znajdujemy się w nowoczesnej placówce na ul. Stańczyka 8/LU3, w sercu Bronowic. Zapisz swoje dziecko do żłobka, który oferuje kreatywne zajęcia, doskonałą opiekę i bezpieczeństwo zatwierdzone przez sanepid." />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Maluch komponent */}
      <section className="py-16">
        <div className=" mx-auto">
          <Maluch />
        </div>
      </section>

      {/* Slider */}
      <section className="bg-white">
        <SliderComponent images={images} />
      </section>

      {/* Plan dnia */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto">
          <DayScheduleStanczyka header="Plan Dnia i zajęcia dodatkowe" />
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="stanczyka" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <Map
          description={
            "Nasz żłobek na Bronowicach znajduje się przy ul. Stańczyka 8, w nowoczesnym kompleksie mieszkalnym, zaledwie kilka kroków od terenów spacerowych Młynówki Królewskiej."
          }
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl"
        />
      </section>
    </main>
  );
}
