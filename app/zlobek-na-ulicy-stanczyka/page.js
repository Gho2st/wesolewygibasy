import classes from "./page.module.css";
import H1 from "@/components/UI/H1";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Image from "next/image";
import { FaSun } from "react-icons/fa";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { FcGoogle } from "react-icons/fc";
import PlaceItem from "@/components/UI/PlaceItem";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";

export const metadata = {
  title: "Żłobek na Ulicy Stańczyka",
  alternates: {
    canonical: "/zlobek-na-ulicy-stanczyka",
  },
};

const images = [
  {
    src: "/stanczyka-slider/st1.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "/stanczyka-slider/st2.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "/stanczyka-slider/st3.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "/stanczyka-slider/st4.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "/stanczyka-slider/st5.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy stanczyka w krakowie",
  },
  {
    src: "/stanczyka-slider/st6.jpg",
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
              <h1>Najlepszy Żłobek na Stańczyka 8/LU3 w Krakowie</h1>
              <p>
                Szukasz bezpiecznego i inspirującego żłobka w Krakowie? Wesołe
                Wygibasy na Stańczyka 8/LU3 oferują profesjonalną opiekę i
                rozwój w przyjaznej atmosferze. Dowiedz się więcej i zapisz
                swoje dziecko już dziś!"
              </p>
              <div className={classes.buttonContainer}>
                <Link href="/o-nas">
                  <Button
                    background="#fa7070"
                    text="Czytaj Więcej"
                    fontSize="1rem"
                  />
                </Link>
                <Link href="/zapisy-i-formularz-kontaktowy">
                  <Button background="#7C99E5" text="Zapisy" fontSize="1rem" />
                </Link>
              </div>
            </div>
            <div className={classes.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.description} id="czytaj-wiecej">
          <span>Niepubliczny żłobek</span> WESOŁE WYGIBASY ul. Stańczyka 8/LU3
          jest naszą <span> trzecią placówką.</span>
          <br></br>
          Wpis do rejestru żłobków i klubów malucha uzyskaliśmy 1 czerwca 2023
          (czyż nie cudowna data – w sam raz na dzień dziecka) Dokładnie 2 lata
          po naszej 2 placówce. <br></br> <br></br> Już od dłuższego czasu
          poszukiwaliśmy lokalu w naszej okolicy, aby móc opiekować się jeszcze
          większą liczbą dzieci. <br></br> <br></br>
          Dzieciaczki już zostaną pod troskliwą opieką cioci Beatki, Kasi i
          Agnieszki. Żłobek składa się z 2 sal zabaw dla dzieci ( dwie grupy
          wiekowe ) szatni, łazienki dla dzieci oraz kuchni. Urządzony jest w
          spokojnych pastelowych kolorach przypominających pokój dziecięcy,
          gdzie maluchy mają się czuć bezpiecznie. <br></br>
          <br></br> Placówka wyposażona jest w klimatyzację oraz rekuperację co
          gwarantuje dzieciom przebywanie w oczyszczonym powietrzu.
          <br></br>
          <br></br> Żłobek został odebrany przez sanepid oraz straż pożarną na
          29 dzieci w wieku 8 miesięcy – 36 miesięcy. <br></br>
          <br></br> Docelowo w żłobku będzie pracować 5 opiekunów. Serdecznie
          zapraszamy.
        </p>
        <h3>
          Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
          urzędu miasta Kraków
        </h3>
        <SliderComponent images={images} />
        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy-i-formularz-kontaktowy">
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

          <ImagesContainer />
        </div>
      </div>
    </>
  );
}
