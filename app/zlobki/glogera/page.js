import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Footer from "@/components/UI/Footer";
import H1 from "@/components/UI/H1";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { FcGoogle } from "react-icons/fc";
import ImagesGlogera from "@/components/Galery/ImagesGlogera";

export default function Glogera() {
  return (
    <>
      <Header />
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>Wesołe Wygibasy Glogera</h1>
              <p>
                Żłobek, Kraków <br></br> <span> Ulica Glogera 53/LU2 </span>
              </p>
              <div className={classes.buttonContainer}>
                <Button
                  background="#FFC858"
                  text="Czytaj Więcej"
                  fontSize="1rem"
                />
                <Button background="#7C99E5" text="Zapisy" fontSize="1rem" />
                <FcGoogle />
              </div>
            </div>
            <div className={classes.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0746082710157!2d19.92382417646559!3d50.103610471528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8cf00937ed%3A0x39479b7e727e42d3!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815664167!5m2!1spl!2spl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={classes.image}>
            <Image
              src={"/others/glogera.png"}
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

          <ImagesGlogera />
        </div>
      </div>
      <Footer />
    </>
  );
}
