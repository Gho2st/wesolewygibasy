import classes from "./page.module.css";
import H1 from "@/components/UI/Header";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";
import ImagesContainer from "@/components/Gallery/ImagesContainer";

export const metadata = {
  title: "Żłobek na Ulicy Glogera w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-glogera",
  },
  description:
    "Zapraszamy do żłobka Wesołe Wygibasy na ul. Glogera 53/LU2 w Krakowie. Nowoczesne pomieszczenia, pełna troski opieka i bogata oferta zajęć dla maluchów.",
};
const images = [
  {
    src: "sliders/glogera-slider/g1.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "sliders/glogera-slider/g2.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "sliders/glogera-slider/g3.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "sliders/glogera-slider/g4.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "sliders/glogera-slider/g6.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "sliders/glogera-slider/g7.jpg",
    alt: "Zdjęcie trawnika przed Żłobkiem Wesołe Wygibasy na ulicy Glogera w Krakowie",
  },
];
export default function Glogera() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>Żłobek Kraków - Wesołe Wygibasy na Glogera 53/LU2</h1>
              <p>
                Szukasz bezpiecznego, nowoczesnego żłobka w Krakowie? Wesołe
                Wygibasy przy ul. Glogera 53/LU2 oferuje profesjonalną opiekę,
                rozwój oraz bogaty program zajęć w przyjaznej atmosferze.
                Sprawdź szczegóły i zapisz swoje dziecko już dziś!
              </p>
              <div className={classes.buttonContainer}>
                <Link href="/o-nas">
                  <Button
                    background="#fa7070"
                    text="Czytaj Więcej"
                    fontSize="1rem"
                  />
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
          Niepubliczny Żłobek Wesołe Wygibasy - ul. Glogera, Kraków
        </h2>

        <div className={classes.description}>
          <h3>Druga placówka</h3>
          <p>
            Niepubliczny żłobek Wesołe Wygibasy przy ul. Glogera 53/LU2 w
            Krakowie to nasza druga placówka, oferująca wysokiej jakości opiekę
            nad dziećmi w bezpiecznym i przyjaznym otoczeniu.
          </p>

          <h3>Historia i lokalizacja</h3>
          <p>
            Nasza placówka została wpisana do rejestru żłobków i klubów malucha
            1 czerwca 2021 roku. Lokalizacja przy ul. Glogera w Krakowie była
            wcześniej znana okolicznym rodzinom jako sala zabaw Kamyczki
            Patyczki, która cieszyła się dużą popularnością do marca 2021 roku.
            Dzięki temu, mieszkańcy okolicy już od dawna mają zaufanie do tego
            miejsca, które teraz przekształciło się w nowoczesny i dobrze
            wyposażony żłobek.
          </p>

          <h3>Profesjonalna opieka nad dziećmi</h3>
          <p>
            Od 14 czerwca 2021 roku, pierwsze dzieci zostały powitane przez nasz
            troskliwy zespół opiekunów, w skład którego wchodzą ciocie Ewa,
            Wiktoria i Agnieszka. Nasz żłobek oferuje przestronne i jasne sale o
            powierzchni 124 m², w tym salę zabaw o powierzchni 94 m², która
            została zaprojektowana z myślą o komforcie i bezpieczeństwie
            najmłodszych. Pomieszczenia są urządzone w pastelowych kolorach,
            tworząc atmosferę przypominającą pokój dziecięcy, w której maluchy
            mogą czuć się bezpiecznie i swobodnie.
          </p>

          <h3>Ogródek i plac zabaw</h3>
          <p>
            Żłobek Wesołe Wygibasy przy ul. Glogera posiada również własny
            ogródek, gdzie dzieci mogą spędzać czas na świeżym powietrzu, bawiąc
            się na placu zabaw. Oferujemy także pełne zaplecze sanitarne, w tym
            łazienkę dostosowaną do potrzeb najmłodszych oraz wygodną szatnię.
          </p>

          <h3>Zapraszamy do żłobka Wesołe Wygibasy w Krakowie</h3>
          <p>
            Serdecznie zapraszamy do odwiedzenia naszego żłobka, gdzie
            zapewniamy nie tylko profesjonalną opiekę, ale także bogaty program
            zajęć wspierających rozwój dzieci. Wybierz żłobek Wesołe Wygibasy w
            Krakowie – miejsce, które dba o edukację, zabawę i bezpieczeństwo
            Twojego dziecka.
          </p>
        </div>

        <SliderComponent images={images} />
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0746082710157!2d19.92382417646559!3d50.103610471528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8cf00937ed%3A0x39479b7e727e42d3!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815664167!5m2!1spl!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa dojazdu do żłobka Wesołe Wygibasy na Glogera"
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
        <DaySchedule header="Plan Dnia" time="17:00" />
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

          <ImagesContainer folder="glogera" />
        </div>
      </div>
    </>
  );
}
