import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Footer from "@/components/UI/Footer";
import H1 from "@/components/UI/H1";
import ImagesContainer from "@/components/Galery/ImagesContainer";
import Image from "next/image";
import { FaSun } from "react-icons/fa";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { FcGoogle } from "react-icons/fc";
import PlaceItem from "@/components/UI/PlaceItem";
import ImagesVetulaniego from "@/components/Galery/ImagesVetulaniego";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";

export const metadata = {
  title: "Żłobek na Ulicy Vetulaniego",
  alternates: {
    canonical: "/zlobek-na-ulicy-vetulaniego",
  },
};
const images = [
  {
    src: "/klub-malucha-slider/k1.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "/klub-malucha-slider/k2.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "/klub-malucha-slider/k3.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
];
export default function Vetulaniego() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>
                Wesołe Wygibasy <span> Vetulaniego.</span>
              </h1>
              <p>
                Szukasz miejsca, gdzie Twoje dziecko będzie mogło rozwijać się w
                przyjaznej i bezpiecznej atmosferze? <br></br> <br></br>
                Zapraszamy do naszego żłobka na
                <span className={classes.place}> Vetulaniego 8.</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.531008552978!2d19.922438176465064!3d50.09506707152642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a446e9d3211%3A0x2479f81b021d9154!2s%C5%BB%C5%82obek%20Klub%20Malucha%20-%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815573472!5m2!1spl!2spl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.description}>
          Klub Malucha Wesołe Wygibasy to <span> kameralny żłobek </span>
          mieszczący się w domu jednorodzinnym z ogrodem. <br></br> <br></br>{" "}
          Największą zaletą naszego Klubu są warunki jakie zapewniamy dzieciom.
          W Klubie przebywają dzieci w wieku 1 do 3 lat. Grupa liczy 20 dzieci
          na
          <span> 3-4 opiekujące się ciocie. </span> Stawiamy na dobrą opiekę,
          dzieci są u Nas zadbane, najedzone, szczęśliwe i bardzo kochane.
          Ponieważ opiekunek jest sporo <span> dzieci </span> są
          <span> traktowane indywidualnie </span> i zawsze znajdują
          <span> czas na rozmowę </span> z dzieckiem. <br></br> <br></br>
          <span> Wesołe Wygibasy </span>to nie tylko fantastyczne zajęcia dla
          dzieci. To <span>edukacja, integracja i zabawa. </span> Wesołe
          Wygibasy posiadają spory ogród z placem zabaw (ogród znajduje się na
          tyłach budynku z dala od zgiełku, w otoczeniu drzew iglastych). Dzieci
          wychodzą również na spacery na pobliskie łąki. Dysponujemy
          klimatyzacją z funkcją oczyszczania powietrza..!! <br></br> <br></br>{" "}
          Zapraszamy do zajrzenia do zakładki „O nas” gdzie opowiemy dokładnie
          jakimi wartościami kierujemy się w opiece nad dziećmi oraz przybliżymy
          Państwu wizerunki naszych opiekunów.
        </p>
        <SliderComponent images={images} />
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

          <ImagesVetulaniego />
        </div>
      </div>
      <Footer />
    </>
  );
}
