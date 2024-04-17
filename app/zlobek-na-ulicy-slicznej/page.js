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
import { Metadata } from "next";

export const metadata = {
  title: "Żłobek na Ulicy Ślicznej",
  alternates: {
    canonical: "/zlobek-na-ulicy-slicznej",
  },
};
export default function sliczna() {
  return (
    <>
      <Header />
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>Wesołe Wygibasy Śliczna</h1>
              <p>
                Żłobek, Kraków <br></br> <span> Ulica Śliczna 36A </span>
              </p>
              <div className={classes.buttonContainer}>
                <Button
                  background="#FFC858"
                  text="Czytaj Więcej"
                  fontSize="1rem"
                />
                <Button background="#7C99E5" text="Zapisy" fontSize="1rem" />
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
          <div className={classes.image}>
            <Image
              src={"/others/sliczna.png"}
              height={400}
              width={900}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.description}>
          <span>Niepubliczny żłobek</span> WESOŁE WYGIBASY ul. Śliczna 36A jest
          naszą <span> czwartą placówką.</span>
          <br></br>
          <br></br>
          Już od dłuższego czasu poszukiwaliśmy lokalu w naszej okolicy, aby móc
          opiekować się jeszcze większą liczbą dzieci. <br></br> <br></br>
          Dzieciaczki już zostaną pod troskliwą opieką. Urządzony jest w
          spokojnych pastelowych kolorach przypominających pokój dziecięcy,
          gdzie maluchy mają się czuć bezpiecznie. <br></br>
          <br></br> Placówka wyposażona jest w klimatyzację oraz rekuperację co
          gwarantuje dzieciom przebywanie w oczyszczonym powietrzu.
          <br></br>
        </p>
        <h3>
          Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
          urzędu miasta Kraków
        </h3>
        <div className={classes.buttonContainer}>
          <Link href="/cennik">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy">
            <Button
              text="Zapisz Dziecko"
              fontSize="1rem"
              background="#7C99E5"
            />
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
      <Footer />
    </>
  );
}
