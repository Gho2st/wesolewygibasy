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
  title: "Żłobek na Ulicy Ślicznej w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-slicznej",
  },
  keywords:
    "żłobek Kraków Śliczna, żłobek z placem zabaw Kraków, dofinansowanie Maluch Plus, żłobek Wesołe Wygibasy, profesjonalna opieka dzieci Kraków",
  description:
    "Żłobek Wesołe Wygibasy w Krakowie – profesjonalna opieka, własny plac zabaw, dofinansowanie Maluch Plus. Zapisz swoje dziecko już dziś!",
};

const images = [
  {
    src: "/sliders/sliczna-slider/sl1.jpg",
    alt: "Wnętrze Żłobka Wesołe Wygibasy na ulicy Ślicznej w Krakowie, placówka dla dzieci",
  },
  {
    src: "/sliders/sliczna-slider/sl2.jpg",
    alt: "Sala zabaw Żłobka Wesołe Wygibasy na Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl3.jpg",
    alt: "Nowoczesne wnętrze Żłobka na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl5.jpg",
    alt: "Zielony plac zabaw Żłobka Wesołe Wygibasy w Krakowie na Ślicznej",
  },
  {
    src: "/sliders/sliczna-slider/sl6.jpg",
    alt: "Pokój dziecięcy w Żłobku Wesołe Wygibasy na Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl7.jpg",
    alt: "Zielony teren i plac zabaw Żłobka Wesołe Wygibasy na Ślicznej",
  },
  {
    src: "/sliders/sliczna-slider/sl8.jpg",
    alt: "Bezpieczny plac zabaw Żłobka Wesołe Wygibasy w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl9.jpg",
    alt: "Dzieci bawiące się na placu zabaw Żłobka Wesołe Wygibasy",
  },
  {
    src: "/sliders/sliczna-slider/sl10.jpg",
    alt: "Wesołe Wygibasy - wnętrze żłobka na Ślicznej w Krakowie",
  },
];
export default function sliczna() {
  return (
    <>
      <main>
        <div className={classes.outsideContainer}>
          <div className={classes.baner}>
            <div className={classes.leftContainer}>
              <div>
                <h1>Żłobek Wesołe Wygibasy na Ślicznej 36A w Krakowie</h1>
                <p>
                  Szukasz żłobka z własnym placem zabaw w Krakowie? Wesołe
                  Wygibasy na ul. Ślicznej 36A oferują profesjonalną opiekę,
                  troskliwy zespół oraz własny plac zabaw do rozwoju Twojego
                  dziecka. Skontaktuj się z nami i zapisz malucha już dziś!
                </p>
                <div className={classes.buttonContainer}>
                  <Button background="#B30000" text="O nas" href="/o-nas" />
                  <Button background="#0037FF" text="Zapisy" href="/zapisy" />
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
                  <h3>Komfortowa lokalizacja</h3>
                  <p>
                    Żłobek przy ul. Ślicznej 36A to idealne miejsce w centrum
                    Krakowa, zapewniające łatwy dostęp oraz doskonałe warunki do
                    rozwoju dziecka w spokojnym otoczeniu. Placówka znajduje się
                    w pobliżu takich dzielnic jak Prądnik Czerwony, Grzegórzki
                    oraz Rakowice, co czyni ją wygodnym wyborem dla rodzin
                    mieszkających w tych okolicach.
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
                  <h3>Własny plac zabaw z zielonym terenem</h3>
                  <p>
                    Nowoczesny, ogrodzony plac zabaw zapewnia bezpieczną zabawę
                    na świeżym powietrzu. Posiadamy zielony teren rekreacyjny
                    oraz 6-osobowe wózki spacerowe, które sprawiają, że
                    codzienne spacery z dziećmi są komfortowe i bezpieczne.
                  </p>
                </div>
                <div>
                  <Link href="/o-nas">O nas</Link>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card3}`}>
                <div>
                  <h3>Nasza czwarta placówka</h3>
                  <p>
                    Wesołe Wygibasy przy ul. Ślicznej 36A to nasza czwarta
                    placówka żłobkowa w Krakowie. Oferujemy miejsca dla maluchów
                    w nowoczesnych i bezpiecznych warunkach, z troską o
                    najwyższe standardy opieki oraz edukacji.
                  </p>
                </div>
                <div>
                  <Link href="/adaptacja-w-zlobku">Adaptacja w Żłobku</Link>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card4}`}>
                <div>
                  <h3>Nowoczesność i bezpieczeństwo</h3>
                  <p>
                    Placówka została otwarta w 2024 roku i wyposażona w
                    innowacyjne systemy, takie jak rekuperacja, zapewniające
                    dostęp do świeżego powietrza. Dwie przestronne sale o
                    powierzchni 54 i 57 m² gwarantują komfortowe warunki dla
                    każdego dziecka.
                  </p>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card5}`}>
                <div>
                  <h3>Żłobek zatwierdzony przez sanepid i straż pożarną</h3>
                  <p>
                    Nasz żłobek przeszedł wszystkie niezbędne odbiory sanepidu
                    oraz straży pożarnej. Placówka jest przystosowana do opieki
                    na dziećmi, co gwarantuje maksymalne bezpieczeństwo w
                    codziennej opiece.
                  </p>
                </div>
              </div>

              <div className={`${classes.card} ${classes.card6}`}>
                <div>
                  <h3>Wykwalifikowany zespół opiekunów</h3>
                  <p>
                    Nasza kadra składa się z doświadczonych opiekunów, którzy z
                    pasją i zaangażowaniem dbają o rozwój dzieci. Zespół liczy 5
                    osób, a każdy opiekun posiada odpowiednie kwalifikacje, by
                    zapewnić najwyższy poziom opieki i edukacji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <Maluch />
        </div>
        <SliderComponent images={images} />
        <div className={classes.wrapper}>
          <DaySchedule header="Plan Dnia i zajęcia dodatkowe" time="17:30" />
        </div>
        <ImagesContainer folder="sliczna" />
        <div className={classes.wrapper}>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl" />
        </div>
      </main>
    </>
  );
}
