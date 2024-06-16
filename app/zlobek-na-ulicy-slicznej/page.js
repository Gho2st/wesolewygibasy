import classes from "./page.module.css";
import Footer from "@/components/UI/Footer";
import ImagesContainer from "@/components/Galery/ImagesContainer";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import PlaceItem from "@/components/UI/PlaceItem";
import { Metadata } from "next";
import SliderSliczna from "./slider/slider";

export const metadata = {
  title: "Żłobek na Ulicy Ślicznej",
  alternates: {
    canonical: "/zlobek-na-ulicy-slicznej",
  },
};
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
          36A to nasza czwarta placówka, która oferuje nie tylko opiekę, ale
          także bogaty zestaw atrakcji dla najmłodszych. <br></br> <br></br>
          Otwarcie 1 lipca 2024.
          <br></br>
          <br></br>
          Adaptacja z rodzicem od 20 czerwca 2024.
          <br></br>
          <br></br>
          Długo szukaliśmy idealnego miejsca w naszej okolicy, aby móc zapewnić
          opiekę jeszcze większej liczbie dzieci. Teraz maluchy mogą być
          spokojne, wiedząc, że są pod opieką doświadczonych i troskliwych osób.
          Nasze wnętrza utrzymane są w delikatnych, pastelowych kolorach,
          tworząc atmosferę przypominającą pokój dziecięcy, gdzie najmłodsi
          czują się jak w domu.<br></br>
          <br></br>
          Dodatkowo, nasza placówka została wyposażona w klimatyzację oraz
          system rekuperacji, zapewniając czyste i świeże powietrze dla naszych
          podopiecznych.<br></br>
          <br></br> Oprócz tego, oferujemy <span> nowoczesny plac zabaw, </span>
          który zachęca do aktywności i zabawy, rozwijając jednocześnie
          umiejętności ruchowe i społeczne dzieci.
        </p>
        <SliderSliczna />

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
      <Footer />
    </>
  );
}
