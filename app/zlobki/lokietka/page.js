import classes from "../nursery.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import Map from "@/components/UI/Map";
import DayScheduleLokietka from "@/components/Info/DayScheduleLokietka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/nursery/header";
import ParkSlider from "@/components/UI/slider/parkSlider";
export const metadata = {
  title: "Żłobek na Ulicy Łokietka w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/lokietka",
  },
  description:
    "Żłobek Wesołe Wygibasy na ulicy Łokietka 23 w Krakowie – kameralna placówka z małą liczbą dzieci, blisko parku, dotowana i oferująca profesjonalną opiekę oraz adaptację od 19 maja. Sprawdź nasz program i zapisz dziecko już dziś!",
};

const images = [
  {
    src: "/sliders/lokietka-slider/1.webp",
    alt: "Park Łokietka w Krakowie 1",
  },
  {
    src: "/sliders/lokietka-slider/2.webp",
    alt: "Park Łokietka w Krakowie 2",
  },
  {
    src: "/sliders/lokietka-slider/3.webp",
    alt: "Park Łokietka w Krakowie 3",
  },
  {
    src: "/sliders/lokietka-slider/4.webp",
    alt: "Park Łokietka w Krakowie 4",
  },
  {
    src: "/sliders/lokietka-slider/5.webp",
    alt: "Park Łokietka w Krakowie 5",
  },
  {
    src: "/sliders/lokietka-slider/6.webp",
    alt: "Park Łokietka w Krakowie 6",
  },
  {
    src: "/sliders/lokietka-slider/7.webp",
    alt: "Park Łokietka w Krakowie 7",
  },
  {
    src: "/sliders/lokietka-slider/8.webp",
    alt: "Park Łokietka w Krakowie 8",
  },
];

const cardData = [
  {
    title: "Bliskość Parku Łokietka",
    description:
      "Nasza lokalizacja w Bronowicach gwarantuje codzienne spacery i kontakt z naturą w pobliskim Parku Łokietka – idealne miejsce na zabawę i odpoczynek.",
    link: {
      href: "/informacje-dla-rodzicow",
      text: "Informacje dla rodziców",
    },
  },
  {
    title: "Adaptacja od sierpnia",
    description:
      "Rozpoczynamy proces adaptacyjny już od sierpinia, aby Twoje dziecko mogło łagodnie i bez stresu rozpocząć przygodę z nami.",
    link: { href: "/adaptacja-w-zlobku", text: "Adaptajca w Żłobku" },
  },
  {
    title: "Otwarcie w Czerwcu",
    description:
      "Oficjalne otwarcie żłobka planujemy na sierpień 2025 – już teraz zapraszamy do zapoznania się z naszą ofertą i zapisów!",
    link: {
      href: "/o-nas",
      text: "O Nas",
    },
  },
  {
    title: "Opieka jest darmowa!",
    description:
      "Jesteśmy placówką dotowaną, co oznacza przystępne ceny bez kompromisów w jakości opieki i programu edukacyjnego. Rodzice płacą tylko za wyżywienie.",
    link: {
      href: "/cennik-i-jadlospis-w-zlobku",
      text: "Cennik i Jadłospis",
    },
  },
  {
    title: "Zajęcia Rozwojowe",
    description:
      "Oferujemy różnorodne zajęcia, takie jak rytmika, dogoterapia, angielski, plastyka i zabawy sensoryczne, wspierające rozwój Twojego malucha.",
    link: {
      href: "/plan-dnia-w-zlobku",
      text: "Cennik i Jadłospis",
    },
  },
  {
    title: "Mała Ilość Dzieci",
    description:
      "W placówce pod opieką docelowo będzie 25 dzieci. Dzięki kameralnym grupom zapewniamy indywidualną opiekę i rodzinną atmosferę, w której każde dziecko czuje się wyjątkowo.",
    link: {
      href: "/informacje-dla-rodzicow",
      text: "Informacje dla rodziców",
    },
  },
];

export default function lokietka() {
  return (
    <>
      <main>
        <section>
          <div
            className={classes.baner}
            style={{
              backgroundImage: `url("/sliders/lokietka-slider/4.webp")`,
            }}
          >
            <div className={classes.textContainer}>
              <div>
                <h1>
                  Żłobek <span> Wesołe Wygibasy</span> na ul. Łokietka 23 w
                  Krakowie
                </h1>

                <div className={classes.buttonContainer}>
                  <Button text="O nas" href="/o-nas" />
                  <Button2 text="Zapisy" href="/zapisy" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={classes.container}>
            <div className={classes.cardWrapper}>
              <NurseryHeader
                text="W żłobku Wesołe Wygibasy na Łokietka w Krakowie stawiamy na indywidualne
        podejście, rozwój przez zabawę i komfort dzieci. Poznaj nasze atuty i
        dołącz do nas! ameralna placówka dla najmłodszych w sercu Bronowic –
        zapewniamy profesjonalną opiekę, rozwój i radość Twojego dziecka!"
              />
              <CardContainer cards={cardData} />
            </div>
          </div>
        </section>
        <ParkSlider images={images} />
        <section>
          <DayScheduleLokietka
            header="Plan Dnia i zajęcia dodatkowe"
            time="17:30"
          />
        </section>
        <section>
          <div className={classes.wrapper}>
            <ImagesContainer folder="sliczna" />
          </div>
        </section>
        <section>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3950908862935!2d19.92613357625054!3d50.078889314047764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab3657246b%3A0x5be9f5ae07b4cb78!2zV8WCYWR5c8WCYXdhIMWBb2tpZXRrYSAyMywgMzAtMDEwIEtyYWvDs3c!5e0!3m2!1sen!2spl!4v1742315529506!5m2!1sen!2spl" />
        </section>
      </main>
    </>
  );
}
