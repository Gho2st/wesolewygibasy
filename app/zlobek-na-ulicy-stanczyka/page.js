import classes from "./page.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import { FaCircleArrowRight } from "react-icons/fa6";
import Button2 from "@/components/UI/Button2";

export const metadata = {
  title: "Żłobek Kraków - Wesołe Wygibasy na ul. Stańczyka, Bronowice",
  alternates: {
    canonical: "/zlobek-na-ulicy-stanczyka",
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
export default function stanczyka() {
  return (
    <>
      <main>
        <div className={classes.outsideContainer}>
          <div className={classes.baner}>
            <div className={classes.leftContainer}>
              <div>
                <h1>Żłobek Kraków - Wesołe Wygibasy na Stańczyka 8/LU3</h1>
                <p>
                  Nasz żłobek w Krakowie, Wesołe Wygibasy, to miejsce pełne
                  radości i troskliwej opieki. Znajdujemy się w nowoczesnej
                  placówce na ul. Stańczyka 8/LU3, w sercu Bronowic. Zapisz
                  swoje dziecko do żłobka, który oferuje kreatywne zajęcia,
                  doskonałą opiekę i bezpieczeństwo zatwierdzone przez sanepid.
                </p>
                <div className={classes.buttonContainer}>
                  <Button background="#B30000" text="O nas" href="/o-nas" />
                  <Button2 background="#0037FF" text="Zapisy" href="/zapisy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.cardWrapper}>
            <div className={classes.header}>
              <p>Co oferujemy?</p>
              <h2>Odkryj nasz program</h2>
            </div>
            <div className={classes.cardContainer}>
              <div className={`${classes.card} ${classes.card1}`}>
                <div>
                  <h3>Placówka z wpisem do rejestru żłobków</h3>
                  <p>
                    Niepubliczny żłobek Wesołe Wygibasy przy ul. Stańczyka 8/LU3
                    w Krakowie to nasza trzecia placówka, która uzyskała wpis do
                    rejestru żłobków i klubów malucha 1 czerwca 2023 roku – w
                    sam raz na Dzień Dziecka! Otworzyliśmy ją dokładnie 2 lata
                    po naszej drugiej placówce.
                  </p>
                </div>
                <div>
                  <Link href="/informacje-dla-rodzicow">
                    Informacje dla rodziców
                  </Link>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card2}`}>
                <div>
                  <h3>Rozwój i nowe możliwości w okolicy</h3>
                  <p>
                    Od dłuższego czasu poszukiwaliśmy lokalu w tej okolicy, aby
                    móc opiekować się jeszcze większą liczbą dzieci i oferować
                    profesjonalną opiekę. Teraz dzieci będą pod troskliwą opieką
                    doświadczonych cioć: Beatki, Kasi i Agnieszki.
                  </p>
                </div>
                <div>
                  <Link href="/o-nas">O nas</Link>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card3}`}>
                <div>
                  <h3>Bezpieczne i komfortowe warunki dla maluchów</h3>
                  <p>
                    Żłobek przy Stańczyka 8/LU3 składa się z dwóch sal zabaw dla
                    dzieci (dla różnych grup wiekowych), szatni, łazienki oraz
                    kuchni. Wnętrza są urządzone w pastelowych kolorach, co
                    tworzy przytulną atmosferę przypominającą dziecięcy pokój.
                  </p>
                </div>
                <div>
                  <Link href="/adaptacja-w-zlobku">Adaptacja w Żłobku</Link>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card4}`}>
                <div>
                  <h3>Nowoczesne wyposażenie: klimatyzacja i rekuperacja</h3>
                  <p>
                    Placówka jest wyposażona w klimatyzację oraz system
                    rekuperacji, co zapewnia dzieciom przebywanie w oczyszczonym
                    powietrzu, a także komfort podczas zabawy i odpoczynku.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card5}`}>
                <div>
                  <h3>
                    Bezpieczeństwo zatwierdzone przez sanepid i straż pożarną
                  </h3>
                  <p>
                    Żłobek został odebrany przez sanepid oraz straż pożarną i
                    przystosowany do opieki nad 29 dziećmi w wieku od 8 miesięcy
                    do 36 miesięcy.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card6}`}>
                <div>
                  <h3>Wykwalifikowany zespół opiekunów</h3>
                  <p>
                    Docelowo w naszej placówce będzie pracować 5 opiekunów,
                    którzy zadbają o rozwój i bezpieczeństwo maluchów.
                    Serdecznie zapraszamy do zapisów!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <Maluch />
        </div>
        <SliderComponent images={images} />
        <div className={classes.wrapper}>
          <DaySchedule header="Plan Dnia i zajęcia dodatkowe" time="17:30" />
        </div>
        <ImagesContainer folder="stanczyka" />
        <div className={classes.wrapper}>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl" />
        </div>
      </main>
    </>
  );
}
