import classes from "./page.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import SliderComponent from "@/components/UI/slider/slider";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import Button2 from "@/components/UI/Button2";
import DayScheduleStanczyka from "@/components/Info/DayScheduleStanczyka";
import CardContainer from "@/components/Cards/CardContainer";

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
    src: "sliders/stanczyka-slider/st1.jpg",
    alt: "Widok wnętrza żłobka Wesołe Wygibasy na Stańczyka w Krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st2.jpg",
    alt: "Sala zabaw w żłobku na ul. Stańczyka w Krakowie, Wesołe Wygibasy",
  },
  {
    src: "sliders/stanczyka-slider/st3.jpg",
    alt: "Przytulne wnętrze żłobka w Bronowicach, Kraków",
  },
  {
    src: "sliders/stanczyka-slider/st4.jpg",
    alt: "Zdjęcie budynku Żłobka na Stańczyka",
  },
  {
    src: "sliders/stanczyka-slider/st5.jpg",
    alt: "Zdjęcie przedstawiające wejście do Żłobka",
  },
  {
    src: "sliders/stanczyka-slider/st6.jpg",
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

export default function stanczyka() {
  return (
    <>
      <main>
        <div className={classes.outsideContainer}>
          <div className={classes.baner}>
            <div className={classes.textContainer}>
              <div>
                <h1>
                  Żłobek Kraków - <span> Wesołe Wygibasy </span> na Stańczyka
                  8/LU3
                </h1>

                <div className={classes.buttonContainer}>
                  <Button text="O nas" href="/o-nas" />
                  <Button2 background="#0037FF" text="Zapisy" href="/zapisy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.cardWrapper}>
            <div className={classes.header}>
              <p className={classes.upText}>Co oferujemy?</p>
              <h2>Odkryj nasz program</h2>
              <p className={classes.description}>
                Nasz żłobek w Krakowie, Wesołe Wygibasy, to miejsce pełne
                radości i troskliwej opieki. Znajdujemy się w nowoczesnej
                placówce na ul. Stańczyka 8/LU3, w sercu Bronowic. Zapisz swoje
                dziecko do żłobka, który oferuje kreatywne zajęcia, doskonałą
                opiekę i bezpieczeństwo zatwierdzone przez sanepid.
              </p>
            </div>
            <CardContainer cards={cardData} />
          </div>
        </div>
        <div className={classes.wrapper}>
          <Maluch />
        </div>
        <SliderComponent images={images} />
        <div className={classes.wrapper}>
          <DayScheduleStanczyka header="Plan Dnia i zajęcia dodatkowe" />
        </div>
        <ImagesContainer folder="stanczyka" />
        <div className={classes.wrapper}>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl" />
        </div>
      </main>
    </>
  );
}
