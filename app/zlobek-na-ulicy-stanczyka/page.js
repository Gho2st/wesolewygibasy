import classes from "./page.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";

export const metadata = {
  title: "Żłobek na Ulicy Stańczyka w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-stanczyka",
  },
  keywords:
    "Żłobek na Stańczyka, bronowice, zielonki, nowy Żłobek, dotacja, aktywny maluch",
  description:
    "Zobacz żłobek Wesołe Wygibasy na ul. Stańczyka w Krakowie. Przyjazne otoczenie, profesjonalna opieka i kreatywne zajęcia dla dzieci.",
};

const images = [
  {
    src: "sliders/stanczyka-slider/st1.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st2.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st3.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st4.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st5.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "sliders/stanczyka-slider/st6.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
];
export default function stanczyka() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>Żłobek Kraków - Wesołe Wygibasy na Stańczyka 8/LU3</h1>
              <p>
                Szukasz sprawdzonego żłobka w Krakowie? Wesołe Wygibasy przy ul.
                Stańczyka 8/LU3 to miejsce, gdzie Twoje dziecko otrzyma opiekę i
                wsparcie w rozwoju. Nasz żłobek oferuje bezpieczne, przyjazne
                środowisko oraz profesjonalną opiekę nad maluchami. Zapisz swoje
                dziecko do żłobka na Stańczyka 8/LU3 w Krakowie i zadbaj o jego
                przyszłość już dziś!
              </p>
              <div className={classes.buttonContainer}>
                <Link href="/o-nas">
                  <Button background="#fa7070" text="O nas" fontSize="1rem" />
                </Link>
                <Link href="/zapisy">
                  <Button background="#7C99E5" text="Zapisy" fontSize="1rem" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <h2 className={classes.header}>
          Niepubliczny Żłobek Wesołe Wygibasy - ul. Stańczyka 8/LU3, Kraków
        </h2>
        <h3>Placówka z wpisem do rejestru żłobków</h3>
        <p>
          Niepubliczny żłobek Wesołe Wygibasy przy ul. Stańczyka 8/LU3 w
          Krakowie to nasza trzecia placówka, która uzyskała wpis do rejestru
          żłobków i klubów malucha 1 czerwca 2023 roku – w sam raz na Dzień
          Dziecka! Otworzyliśmy ją dokładnie 2 lata po naszej drugiej placówce.
        </p>
        <h3>Rozwój i nowe możliwości w okolicy</h3>
        <p>
          Od dłuższego czasu poszukiwaliśmy lokalu w tej okolicy, aby móc
          opiekować się jeszcze większą liczbą dzieci i oferować profesjonalną
          opiekę. Teraz dzieci będą pod troskliwą opieką doświadczonych cioć:
          Beatki, Kasi i Agnieszki.
        </p>
        <h3>Bezpieczne i komfortowe warunki dla maluchów</h3>
        <p>
          Żłobek przy Stańczyka 8/LU3 składa się z dwóch sal zabaw dla dzieci
          (dla różnych grup wiekowych), szatni, łazienki oraz kuchni. Wnętrza są
          urządzone w pastelowych kolorach, co tworzy przytulną atmosferę
          przypominającą dziecięcy pokój.
        </p>
        <h3>Nowoczesne wyposażenie: klimatyzacja i rekuperacja</h3>
        <p>
          Placówka jest wyposażona w klimatyzację oraz system rekuperacji, co
          zapewnia dzieciom przebywanie w oczyszczonym powietrzu, a także
          komfort podczas zabawy i odpoczynku.
        </p>
        <h3>Bezpieczeństwo zatwierdzone przez sanepid i straż pożarną</h3>
        <p>
          Żłobek został odebrany przez sanepid oraz straż pożarną i
          przystosowany do opieki nad 29 dziećmi w wieku od 8 miesięcy do 36
          miesięcy.
        </p>
        <h3>Wykwalifikowany zespół opiekunów</h3>
        <p>
          Docelowo w naszej placówce będzie pracować 5 opiekunów, którzy zadbają
          o rozwój i bezpieczeństwo maluchów. Serdecznie zapraszamy do zapisów!
        </p>

        <h2 className={classes.dotation}>
          Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
          urzędu miasta Kraków
        </h2>
        <SliderComponent images={images} />
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy">
            <Button text="Zapisy" fontSize="1rem" background="#7C99E5" />
          </Link>
        </div>
        <DaySchedule header="Plan Dnia" time="17:30" />
        <div className={classes.galleryContainer}>
          <h2>Galeria</h2>
          <p className={classes.galleryText}>
            Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
            maluszki w naszym żłobku „Wesołe Wygibasy” w Krakowie.
            <br></br>
            Zapraszamy do obejrzenia tych pięknych chwil, które pokazują miłość,
            radość i rozwój naszych dzieci. <br></br> Zdjęcia ukazują różnorodne
            wydarzenia i chwile z życia maluszków w naszej placówce.
          </p>

          <ImagesContainer folder="stanczyka" />
        </div>
      </div>
    </>
  );
}
