import classes from "./page.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Image from "next/image";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { Metadata } from "next";
import SliderComponent from "@/components/UI/slider/slider";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Żłobek na ulicy Vetulaniego w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-vetulaniego",
  },
  description:
    "Szukasz żłobka w Krakowie? Żłobek Wesołe Wygibasy na ul. Vetulaniego oferuje nowoczesne wnętrza, troskliwą opiekę, rozwijające zajęcia oraz ogród z placem zabaw. Zapisz swoje dziecko już dziś!",
};
const images = [
  {
    src: "sliders/klub-malucha-slider/k1.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "sliders/klub-malucha-slider/k2.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "sliders/klub-malucha-slider/k3.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "sliders/klub-malucha-slider/k4.jpg",
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
              <h1>Żłobek Wesołe Wygibasy – ul. Vetulaniego 8 w Krakowie</h1>
              <p>
                Szukasz bezpiecznego i inspirującego żłobka w Krakowie? Wesołe
                Wygibasy na Vetulaniego 8 oferują profesjonalną opiekę i rozwój
                w przyjaznej atmosferze. Dowiedz się więcej i zapisz swoje
                dziecko już dziś!
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
        <h2 className={classes.header}>
          Klub Malucha Wesołe Wygibasy – Kameralny żłobek z ogrodem w Krakowie
        </h2>
        <div className={classes.description}>
          <p>
            <strong>Klub Malucha Wesołe Wygibasy</strong> to kameralny żłobek,
            który mieści się w domu jednorodzinnym z pięknym ogrodem, oferującym
            dzieciom bezpieczne i przyjazne warunki do rozwoju. Zlokalizowany z
            dala od miejskiego zgiełku, nasz żłobek zapewnia maluchom spokojną
            atmosferę oraz dostęp do natury.
          </p>

          <h3>Opieka nad dziećmi w wieku od 1 do 3 lat</h3>
          <p>
            Nasza placówka przyjmuje dzieci w wieku od 1 do 3 lat. Grupa liczy
            maksymalnie 20 dzieci, którymi opiekuje się 3 do 4 doświadczonych
            opiekunek. Dzięki temu każde dziecko otrzymuje indywidualną uwagę i
            troskę, a nasi podopieczni są zadbani, najedzeni i szczęśliwi. Dbamy
            o to, by każde dziecko czuło się kochane i bezpieczne w naszej
            opiece.
          </p>

          <h3>Edukacja, integracja i zabawa</h3>
          <p>
            <strong>Wesołe Wygibasy</strong> to nie tylko opieka nad dziećmi,
            ale także bogaty program edukacyjny i integracyjny. Organizujemy
            różnorodne zajęcia, które wspierają rozwój intelektualny i społeczny
            maluchów. Zabawa w naszym żłobku to również okazja do nauki przez
            doświadczenie, co pozwala dzieciom rozwijać swoje umiejętności w
            sposób naturalny i przyjemny.
          </p>

          <h3>Ogród i spacery na świeżym powietrzu</h3>
          <p>
            Jednym z największych atutów naszego Klubu Malucha jest duży ogród z
            placem zabaw, który znajduje się na tyłach budynku, z dala od hałasu
            ulicznego. Ogród otoczony drzewami iglastymi stanowi idealne miejsce
            do zabawy na świeżym powietrzu. Dzieci regularnie wychodzą również
            na spacery na pobliskie łąki, co umożliwia im kontakt z naturą i
            daje możliwość odkrywania otaczającego świata.
          </p>

          <h3>Klimatyzacja i czyste powietrze</h3>
          <p>
            Nasza placówka jest wyposażona w klimatyzację z funkcją oczyszczania
            powietrza, co zapewnia komfort i zdrowe warunki do zabawy i nauki
            przez cały rok. Dbamy o to, aby powietrze, którym oddychają dzieci,
            było zawsze świeże i czyste, co jest szczególnie ważne dla zdrowia
            najmłodszych.
          </p>

          <h3>Poznaj nas bliżej</h3>
          <p>
            Zapraszamy do zajrzenia do zakładki „
            <Link href="/o-nas">O nas</Link>”, gdzie szczegółowo opowiadamy o
            naszych wartościach oraz filozofii opieki nad dziećmi. Możesz tam
            również poznać naszych wykwalifikowanych opiekunów, którzy z pasją i
            zaangażowaniem troszczą się o każdego malucha.
          </p>
        </div>
        <SliderComponent images={images} />
        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy">
            <Button text="Zapisy" fontSize="1rem" background="#7C99E5" />
          </Link>
        </div>
        <DaySchedule header="Plan Dnia" time={"17:00"} />
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

          <ImagesContainer folder="vetulaniego" />
        </div>
      </div>
    </>
  );
}
