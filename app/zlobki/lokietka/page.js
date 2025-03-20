import classes from "../nursery.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import DayScheduleLokietka from "@/components/Info/DayScheduleLokietka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/nursery/header";
export const metadata = {
  title: "Żłobek na Ulicy Łokietka w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-lokietka",
  },
  description:
    "Żłobek Wesołe Wygibasy na ulicy Łokietka 23 w Krakowie – kameralna placówka z małą liczbą dzieci, blisko parku, dotowana i oferująca profesjonalną opiekę oraz adaptację od 19 maja. Sprawdź nasz program i zapisz dziecko już dziś!",
};

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
    title: "Adaptacja od 19 maja",
    description:
      "Rozpoczynamy proces adaptacyjny już od 19 maja, aby Twoje dziecko mogło łagodnie i bez stresu rozpocząć przygodę z nami.",
    link: { href: "/adaptacja-w-zlobku", text: "Adaptajca w Żłobku" },
  },
  {
    title: "Otwarcie w Czerwcu",
    description:
      "Oficjalne otwarcie żłobka planujemy na czerwiec 2025 – już teraz zapraszamy do zapoznania się z naszą ofertą i zapisów!",
    link: {
      href: "/o-nas",
      text: "O Nas",
    },
  },
  {
    title: "Placówka Dotowana",
    description:
      "Jesteśmy placówką dotowaną, co oznacza przystępne ceny bez kompromisów w jakości opieki i programu edukacyjnego.",
  },
  {
    title: "Zajęcia Rozwojowe",
    description:
      "Oferujemy różnorodne zajęcia, takie jak rytmika, plastyka i zabawy sensoryczne, wspierające rozwój Twojego malucha.",
  },
  {
    title: "Mała Ilość Dzieci",
    description:
      "Dzięki kameralnym grupom zapewniamy indywidualną opiekę i rodzinną atmosferę, w której każde dziecko czuje się wyjątkowo.",
  },
];

export default function lokietka() {
  return (
    <>
      <main>
        <div className={classes.baner}>
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
        <div className={classes.wrapper}>
          <Maluch />
        </div>
        {/* <SliderComponent images={images} /> */}
        <DayScheduleLokietka
          header="Plan Dnia i zajęcia dodatkowe"
          time="17:30"
        />
        <div className={classes.wrapper}>
          <ImagesContainer folder="sliczna" />
        </div>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3950908862935!2d19.92613357625054!3d50.078889314047764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab3657246b%3A0x5be9f5ae07b4cb78!2zV8WCYWR5c8WCYXdhIMWBb2tpZXRrYSAyMywgMzAtMDEwIEtyYWvDs3c!5e0!3m2!1sen!2spl!4v1742315529506!5m2!1sen!2spl" />
      </main>
    </>
  );
}
