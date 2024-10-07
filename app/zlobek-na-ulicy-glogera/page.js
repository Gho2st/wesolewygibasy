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
  title: "Żłobek na Ulicy Glogera w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-glogera",
  },
  keywords:
    "Żłobek na ulicy glogera, glogera, wesołe wygibasy, kraków, miejsca",
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
export default function glogera() {
  return (
    <>
      <main>
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
                  <Button text="O nas" background="#B30000" href="/o-nas" />
                  <Button2 text="Zapisy" background="#0037FF" href="/zapisy" />
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
                  <h3>Druga placówka</h3>
                  <p>
                    Niepubliczny żłobek Wesołe Wygibasy przy ul. Glogera 53/LU2
                    w Krakowie to nasza druga placówka, oferująca wysokiej
                    jakości opiekę nad dziećmi w bezpiecznym i przyjaznym
                    otoczeniu.
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
                  <h3>Historia i lokalizacja</h3>
                  <p>
                    Nasza placówka została wpisana do rejestru żłobków i klubów
                    malucha 1 czerwca 2021 roku. Lokalizacja przy ul. Glogera w
                    Krakowie była wcześniej znana okolicznym rodzinom jako sala
                    zabaw Kamyczki Patyczki, która cieszyła się dużą
                    popularnością do marca 2021 roku. Dzięki temu, mieszkańcy
                    okolicy już od dawna mają zaufanie do tego miejsca, które
                    teraz przekształciło się w nowoczesny i dobrze wyposażony
                    żłobek.
                  </p>
                </div>
                <div>
                  <Link href="/o-nas">O nas</Link>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card3}`}>
                <div>
                  <h3>Profesjonalna opieka nad dziećmi</h3>
                  <p>
                    Od 14 czerwca 2021 roku, pierwsze dzieci zostały powitane
                    przez nasz troskliwy zespół opiekunów, w skład którego
                    wchodzą ciocie Ewa, Wiktoria i Agnieszka. Nasz żłobek
                    oferuje przestronne i jasne sale o powierzchni 124 m², w tym
                    salę zabaw o powierzchni 94 m², która została zaprojektowana
                    z myślą o komforcie i bezpieczeństwie najmłodszych.
                    Pomieszczenia są urządzone w pastelowych kolorach, tworząc
                    atmosferę przypominającą pokój dziecięcy, w której maluchy
                    mogą czuć się bezpiecznie i swobodnie.
                  </p>
                </div>
                <div>
                  <Link href="/adaptacja-w-zlobku">Adaptacja w Żłobku</Link>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card4}`}>
                <div>
                  <h3>Ogródek i plac zabaw</h3>
                  <p>
                    Żłobek Wesołe Wygibasy przy ul. Glogera posiada również
                    własny ogródek, gdzie dzieci mogą spędzać czas na świeżym
                    powietrzu, bawiąc się na placu zabaw. Oferujemy także pełne
                    zaplecze sanitarne, w tym łazienkę dostosowaną do potrzeb
                    najmłodszych oraz wygodną szatnię.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card5}`}>
                <div>
                  <h3>Zapraszamy do żłobka Wesołe Wygibasy w Krakowie</h3>
                  <p>
                    Serdecznie zapraszamy do odwiedzenia naszego żłobka, gdzie
                    zapewniamy nie tylko profesjonalną opiekę, ale także bogaty
                    program zajęć wspierających rozwój dzieci. Wybierz żłobek
                    Wesołe Wygibasy w Krakowie – miejsce, które dba o edukację,
                    zabawę i bezpieczeństwo Twojego dziecka.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card6}`}>
                <div>
                  <h3>Zajęcia sensoryczne i rozwój zmysłów</h3>
                  <p>
                    W naszym żłobku dużą wagę przykładamy do rozwoju zmysłów i
                    umiejętności poznawczych dzieci. Organizujemy zajęcia
                    sensoryczne, które pobudzają zmysły maluchów, ucząc je
                    rozpoznawania kształtów, dźwięków, kolorów i tekstur. Dzięki
                    różnorodnym materiałom, takim jak piasek kinetyczny, farby
                    sensoryczne i zabawki multisensoryczne, dzieci mają
                    możliwość eksploracji świata za pomocą swoich zmysłów, co
                    wspiera ich naturalny rozwój.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <SliderComponent images={images} />
        </div>
        <DaySchedule header="Plan Dnia i zajęcia dodatkowe" time="17:00" />
        <div className={classes.wrapper}>
          <ImagesContainer folder="glogera" />
        </div>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0746082710157!2d19.92382417646559!3d50.103610471528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8cf00937ed%3A0x39479b7e727e42d3!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815664167!5m2!1spl!2spl" />
      </main>
    </>
  );
}
