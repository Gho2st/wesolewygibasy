import classes from "./page.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import PlaceItem from "@/components/UI/PlaceItem";
import { Metadata } from "next";
import SliderComponent from "../../components/UI/slider/slider";

export const metadata = {
  title: "Żłobek na Ulicy Ślicznej",
  alternates: {
    canonical: "/zlobek-na-ulicy-slicznej",
  },
};

const images = [
  {
    src: "/sliczna-slider/sl1.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy slicznej w krakowie",
  },
  {
    src: "/sliczna-slider/sl2.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy slicznej w krakowie",
  },
  {
    src: "/sliczna-slider/sl3.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy slicznej w krakowie",
  },
  {
    src: "/sliczna-slider/sl5.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy slicznej w krakowie",
  },
  {
    src: "/sliczna-slider/sl6.jpg",
    alt: "zdjecie ze srodka zlobka na ulicy slicznej w krakowie",
  },
];

export default function sliczna() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>
                Wesołe Wygibasy <span> Śliczna</span>
              </h1>
              <p>
                Szukasz miejsca, gdzie Twoje dziecko będzie mogło rozwijać się w
                przyjaznej i bezpiecznej atmosferze? <br></br> <br></br>
                Zapraszamy do naszego żłobka na
                <span className={classes.place}> Śliczna 36A.</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7235912933816!2d19.971400476463828!3d50.07273797152256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b12ffd809d1%3A0xb7bd3a74fd82210c!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711814374339!5m2!1spl!2spl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.description}>
          <span>Wesołe Wygibasy</span> - Niepubliczny Żłobek przy ulicy Ślicznej
          36A 31-444 to nasza <span> czwarta </span> placówka.<br></br> Jak
          pozostałe trzy placówki powstała z miłości i potrzeby serca. <br></br>
          Żłobek ma możliwość przyjęcia <span> 39 dzieci.</span> <br></br>
          Posiadamy <span> 2 duże sale </span> (54m2 i 57m2) dla potrzeb dzieci.{" "}
          <br></br> <br></br> Placówka powstała od podstaw w okresie III - V
          2024 r. Jest nowoczesna i przestronna, posiadamy rekuperację co
          zapewnia nam dostęp do oczyszczonego powietrza. <br></br> Dzieci będą
          podzielone na dwie grupy wiekowe:
          <br></br> <br></br> <span> Grupa młodsza </span> - Tuptusie (dzieci do
          ok 22 miesiąca)<br></br> <span> Grupa Starszaków </span> - Wygibaski
          (dzieci do 3 lat)
          <br></br> Dziećmi będzie się opiekować
          <span> wykwalifikowanych 6 opiekunów.</span>
          <br></br> Do dyspozycji dzieci jest nowoczesny, ogrodzony{" "}
          <span> plac zabaw </span>
          oraz teren zielony. <br></br> Dzieci będą również korzystać z wózków
          6-osobowych.
        </p>
        <SliderComponent images={images} />

        <h3>
          Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
          urzędu miasta Kraków
        </h3>
        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy-i-formularz-kontaktowy">
            <Button text="Zapisy" fontSize="1rem" background="#7C99E5" />
          </Link>
        </div>
        <DaySchedule header="Plan Dnia" />
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
