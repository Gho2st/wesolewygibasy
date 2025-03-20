import classes from "../nursery.module.css";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import CardContainer from "@/components/Cards/CardContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Map from "@/components/UI/Map";
import Button2 from "@/components/UI/Button2";
import DayScheduleVetulaniego from "@/components/Info/DayScheduleVetulaniego";
import NurseryHeader from "@/components/nursery/header";

export const metadata = {
  title: "Żłobek na ulicy Vetulaniego w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/vetulaniego",
  },
  keywords:
    "Żłobek na Vetulaniego, klub malucha,  bronowice, zielonki, dotacja, aktywny maluch, kameralny, własny ogród",
  description:
    "Szukasz żłobka w Krakowie? Żłobek Wesołe Wygibasy na ul. Vetulaniego oferuje troskliwą opiekę, rozwijające zajęcia oraz ogród z placem zabaw. Zapisz swoje dziecko już dziś!",
};
const images = [
  {
    src: "/sliders/klub-malucha-slider/k1.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "/sliders/klub-malucha-slider/k2.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "/sliders/klub-malucha-slider/k3.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
  {
    src: "/sliders/klub-malucha-slider/k4.jpg",
    alt: "zdjecie ze srodka zlobka klubu malucha w krakowie",
  },
];

const cardData = [
  {
    title: "Klub Malucha Wesołe Wygibasy",
    description:
      "Klub Malucha Wesołe Wygibasy to kameralny żłobek, który mieści się w domu jednorodzinnym z pięknym ogrodem, oferującym dzieciom bezpieczne i przyjazne warunki do rozwoju. Zlokalizowany z dala od miejskiego zgiełku, nasz żłobek zapewnia maluchom spokojną atmosferę oraz dostęp do natury.",
    link: {
      href: "/informacje-dla-rodzicow",
      text: "Informacje dla rodziców",
    },
  },
  {
    title: "Ogród i spacery na świeżym powietrzu",
    description:
      "Jednym z największych atutów naszego Klubu Malucha jest duży ogród z placem zabaw, który znajduje się na tyłach budynku, z dala od hałasu ulicznego. Ogród otoczony drzewami iglastymi stanowi idealne miejsce do zabawy na świeżym powietrzu. Dzieci regularnie wychodzą również na spacery na pobliskie łąki, co umożliwia im kontakt z naturą i daje możliwość odkrywania otaczającego świata.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Opieka nad dziećmi w wieku od 1 do 3 lat",
    description:
      "Nasza placówka przyjmuje dzieci w wieku od 1 do 3 lat. Grupa liczy maksymalnie 20 dzieci, którymi opiekuje się 3 do 4 doświadczonych opiekunek. Dzięki temu każde dziecko otrzymuje indywidualną uwagę i troskę, a nasi podopieczni są zadbani, najedzeni i szczęśliwi. Dbamy o to, by każde dziecko czuło się kochane i bezpieczne w naszej opiece.",
    link: {
      href: "/adaptacja-w-zlobku",
      text: "Adaptacja w Żłobku",
    },
  },
];

export default function vetulaniego() {
  return (
    <>
      <main>
        <div className={classes.outsideContainer}>
          <div className={classes.baner}>
            <div className={classes.textContainer}>
              <div>
                <h1>
                  Żłobek Kraków - <span> Wesołe Wygibasy </span> na ul.
                  Vetulaniego 8
                </h1>

                <div className={classes.buttonContainer}>
                  <Button text="O nas" href="/o-nas" />
                  <Button2 text="Zapisy" href="/zapisy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.cardWrapper}>
            <NurseryHeader
              text="Jeśli szukasz bezpiecznego, kameralnego i inspirującego żłobka w
                Krakowie, zapraszamy do Klubu Malucha Wesołe Wygibasy na ulicy
                Vetulaniego 8. Nasza placówka oferuje profesjonalną opiekę nad
                dziećmi w wieku od 1 do 3 lat, zapewniając im rozwój w ciepłej i
                przyjaznej atmosferze, z dala od miejskiego zgiełku."
            />
            <CardContainer cards={cardData} />
          </div>
        </div>
        <div className={classes.wrapper}>
          <SliderComponent images={images} />
        </div>
        <DayScheduleVetulaniego header="Plan Dnia i zajęcia dodatkowe" />
        <div className={classes.wrapper}>
          <ImagesContainer folder="vetulaniego" />
        </div>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.531008552978!2d19.922438176465064!3d50.09506707152642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a446e9d3211%3A0x2479f81b021d9154!2s%C5%BB%C5%82obek%20Klub%20Malucha%20-%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815573472!5m2!1spl!2spl" />
      </main>
    </>
  );
}
