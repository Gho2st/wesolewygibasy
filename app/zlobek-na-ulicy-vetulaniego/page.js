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

export const metadata = {
  title: "Żłobek na ulicy Vetulaniego w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-vetulaniego",
  },
  keywords:
    "Żłobek na Vetulaniego, klub malucha,  bronowice, zielonki, dotacja, aktywny maluch, kameralny, własny ogród",
  description:
    "Szukasz żłobka w Krakowie? Żłobek Wesołe Wygibasy na ul. Vetulaniego oferuje troskliwą opiekę, rozwijające zajęcia oraz ogród z placem zabaw. Zapisz swoje dziecko już dziś!",
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
export default function vetulaniego() {
  return (
    <>
      <main>
        <div className={classes.outsideContainer}>
          <div className={classes.baner}>
            <div className={classes.leftContainer}>
              <div>
                <h1>Żłobek Kraków - Wesołe Wygibasy na Vetulaniego 8</h1>
                <p>
                  Jeśli szukasz bezpiecznego, kameralnego i inspirującego żłobka
                  w Krakowie, zapraszamy do Klubu Malucha Wesołe Wygibasy na
                  ulicy Vetulaniego 8. Nasza placówka oferuje profesjonalną
                  opiekę nad dziećmi w wieku od 1 do 3 lat, zapewniając im
                  rozwój w ciepłej i przyjaznej atmosferze, z dala od miejskiego
                  zgiełku.
                </p>
                <div className={classes.buttonContainer}>
                  <Link href="/o-nas">
                    <Button background="#fa7070" text="O nas" fontSize="1rem" />
                  </Link>
                  <Link href="/zapisy">
                    <Button
                      background="#7C99E5"
                      text="Zapisy"
                      fontSize="1rem"
                    />
                  </Link>
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
                  <h3>Klub Malucha Wesołe Wygibasy</h3>
                  <p>
                    Klub Malucha Wesołe Wygibasy to kameralny żłobek, który
                    mieści się w domu jednorodzinnym z pięknym ogrodem,
                    oferującym dzieciom bezpieczne i przyjazne warunki do
                    rozwoju. Zlokalizowany z dala od miejskiego zgiełku, nasz
                    żłobek zapewnia maluchom spokojną atmosferę oraz dostęp do
                    natury.
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
                  <h3>Poznaj nas bliżej</h3>
                  <p>
                    Zapraszamy do zajrzenia do zakładki, gdzie szczegółowo
                    opowiadamy o naszych wartościach oraz filozofii opieki nad
                    dziećmi. Możesz tam również poznać naszych wykwalifikowanych
                    opiekunów, którzy z pasją i zaangażowaniem troszczą się o
                    każdego malucha.
                  </p>
                </div>
                <div>
                  <Link href="/o-nas">O nas</Link>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card3}`}>
                <div>
                  <h3>Edukacja, integracja i zabawa</h3>
                  <p>
                    Wesołe Wygibasy to nie tylko opieka nad dziećmi, ale także
                    bogaty program edukacyjny i integracyjny. Organizujemy
                    różnorodne zajęcia, które wspierają rozwój intelektualny i
                    społeczny maluchów. Zabawa w naszym żłobku to również okazja
                    do nauki przez doświadczenie, co pozwala dzieciom rozwijać
                    swoje umiejętności w sposób naturalny i przyjemny.
                  </p>
                </div>
                <div>
                  <Link href="/adaptacja-w-zlobku">Adaptacja w Żłobku</Link>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card4}`}>
                <div>
                  <h3>Klimatyzacja i czyste powietrze</h3>
                  <p>
                    Nasza placówka jest wyposażona w klimatyzację z funkcją
                    oczyszczania powietrza, co zapewnia komfort i zdrowe warunki
                    do zabawy i nauki przez cały rok. Dbamy o to, aby powietrze,
                    którym oddychają dzieci, było zawsze świeże i czyste, co
                    jest szczególnie ważne dla zdrowia najmłodszych.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card5}`}>
                <div>
                  <h3>Opieka nad dziećmi w wieku od 1 do 3 lat</h3>
                  <p>
                    Nasza placówka przyjmuje dzieci w wieku od 1 do 3 lat. Grupa
                    liczy maksymalnie 20 dzieci, którymi opiekuje się 3 do 4
                    doświadczonych opiekunek. Dzięki temu każde dziecko
                    otrzymuje indywidualną uwagę i troskę, a nasi podopieczni są
                    zadbani, najedzeni i szczęśliwi. Dbamy o to, by każde
                    dziecko czuło się kochane i bezpieczne w naszej opiece.
                  </p>
                </div>
              </div>
              <div className={`${classes.card} ${classes.card6}`}>
                <div>
                  <h3>Ogród i spacery na świeżym powietrzu</h3>
                  <p>
                    Jednym z największych atutów naszego Klubu Malucha jest duży
                    ogród z placem zabaw, który znajduje się na tyłach budynku,
                    z dala od hałasu ulicznego. Ogród otoczony drzewami
                    iglastymi stanowi idealne miejsce do zabawy na świeżym
                    powietrzu. Dzieci regularnie wychodzą również na spacery na
                    pobliskie łąki, co umożliwia im kontakt z naturą i daje
                    możliwość odkrywania otaczającego świata.
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
          <ImagesContainer folder="vetulaniego" />
        </div>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.531008552978!2d19.922438176465064!3d50.09506707152642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a446e9d3211%3A0x2479f81b021d9154!2s%C5%BB%C5%82obek%20Klub%20Malucha%20-%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815573472!5m2!1spl!2spl" />
      </main>
    </>
  );
}
