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
import { Metadata } from "next";

export const metadata = {
  title: "Żłobek na Ulicy Glogera",
  alternates: {
    canonical: "/zlobek-na-ulicy-glogera",
  },
};

export default function Glogera() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>
                Wesołe Wygibasy <span> Glogera</span>
              </h1>
              <p>
                Szukasz miejsca, gdzie Twoje dziecko będzie mogło rozwijać się w
                przyjaznej i bezpiecznej atmosferze? <br></br> <br></br>
                Zapraszamy do naszego żłobka na
                <span className={classes.place}> Glogera 53/LU2.</span>
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
          Niepubliczny żłobek <span> WESOŁE WYGIBASY </span> ul. Glogera 53/LU2
          to nasza druga placówka. <br></br> <br></br> Wpis do rejestru żłobków
          i klubów malucha uzyskaliśmy 1 czerwca 2021 Lokal przy Glogera był
          dobrze znany okolicznym rodzinom, ponieważ do marca 2021 znajdowała
          się tam znana i lubiana sala zabaw Kamyczki Patyczki.<br></br>
          <br></br> 14 czerwca pierwsze dzieciaczki już zostały pod troskliwą
          opieką cioci Ewy, Wiktorii i Agnieszki. Lokal ma 124 m2, sala zabaw to
          94 m2 urządzone w spokojnych pastelowych, kolorach przypominających
          pokój dziecięcy, gdzie maluchy mają się czuć bezpiecznie.<br></br>
          <br></br> Do żłobka przynależy również ogródek, gdzie dzieci spędzają
          czas bawiąc się na placu zabaw. Oprócz sali zabaw dzieci mają do
          dyspozycji łazienkę i szatnie. Zapraszamy!
        </p>

        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy-i-formularz-kontaktowy">
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
