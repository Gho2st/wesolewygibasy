import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/slider/slider";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import Button2 from "@/components/UI/Button2";
import DayScheduleStanczyka from "@/components/Info/DayScheduleStanczyka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/nursery/header";

export const metadata = {
  title: "Żłobek Kraków - Wesołe Wygibasy na ul. Stańczyka, Bronowice",
  alternates: {
    canonical: "/zlobki/stanczyka",
  },
  keywords:
    "Żłobek na Bronowicach, nowoczesny, dotowany, Żłobek na Stańczyka, bronowice, zielonki, nowy Żłobek, dotacja, aktywny maluch",
  description:
    "Zobacz żłobek Wesołe Wygibasy na ul. Stańczyka w Krakowie. Przyjazne otoczenie, profesjonalna opieka i kreatywne zajęcia dla dzieci.",
};

const images = [
  {
    src: "/sliders/stanczyka-slider/st1.jpg",
    alt: "Widok wnętrza żłobka Wesołe Wygibasy na Stańczyka w Krakowie",
  },
  {
    src: "/sliders/stanczyka-slider/st2.jpg",
    alt: "Sala zabaw w żłobku na ul. Stańczyka w Krakowie, Wesołe Wygibasy",
  },
  {
    src: "/sliders/stanczyka-slider/st3.jpg",
    alt: "Przytulne wnętrze żłobka w Bronowicach, Kraków",
  },
  {
    src: "/sliders/stanczyka-slider/st4.jpg",
    alt: "Zdjęcie budynku Żłobka na Stańczyka",
  },
  {
    src: "/sliders/stanczyka-slider/st5.jpg",
    alt: "Zdjęcie przedstawiające wejście do Żłobka",
  },
  {
    src: "/sliders/stanczyka-slider/st6.jpg",
    alt: "Zdjęcie sali zabaw dla dzieci w Wesołych Wygibasach",
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
      href: "/adaptacja-w-zlobku",
      text: "Adaptacja w Żłobku",
    },
  },
];

export default function Stanczyka() {
  return (
    <main>
      {/* Baner */}
      <section>
        <div
          className="w-full min-h-screen bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `url("/zlobki/stanczyka.jpg")`,
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl text-center px-6 py-12 sm:px-10 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold text-black">
              Żłobek Kraków Bronowice - Wesołe Wygibasy na Stańczyka
            </h1>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button text="O nas" href="/o-nas" />
              <Button2 background="#0037FF" text="Zapisy" href="/zapisy" />
            </div>
          </div>
        </div>
      </section>

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
        <div className=" mx-auto">
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl" />
        </div>
      </section>
    </main>
  );
}
