"use client";
import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Places(props) {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });

  const items = [
    {
      image: "sliders/sliczna-slider/sl4.jpg",
      alt: "Własny plac zabaw Żłobka Wesołe Wygibasy na ulicy Ślicznej",
      title: "Żłobek na Ślicznej",
      location: "Żłobek, Kraków",
      street: "ul. Śliczna 36/A",
      link: "zlobek-na-ulicy-slicznej",
      add: "Program Aktywny Maluch",
    },
    {
      image: "/others/stanczyka.jpg",
      alt: "Zdjęcie z zewnątrz budynku Żłobka Wesołe Wygibasy na ulicy Stańczyka",
      title: "Żłobek na Stańczyka",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobek-na-ulicy-stanczyka",
      add: "Program Aktywny Maluch",
    },
    {
      image: "/others/glogera.jpg",
      alt: "Zdjęcie z wewnątrz Żłobka Wesołe Wygibasy na ulicy Glogera",
      title: "Żłobek na Glogera",
      location: "Żłobek, Kraków",
      street: "ul. Glogera 53/LU2",
      link: "zlobek-na-ulicy-glogera",
      add: "",
    },
    {
      image: "/others/vetulaniego.jpg",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka Klubu Malucha na ulicy Vetulaniego",
      title: "Klub Malucha",
      location: "Żłobek, Kraków",
      street: "ul. Vetulaniego 8",
      link: "zlobek-na-ulicy-vetulaniego",
      add: "",
    },
  ];

  return (
    <section
      id="placówki"
      style={{ background: props.background ? "white" : "#fffbf2" }}
    >
      <div className={classes.container} ref={skillRef}>
        <div className={classes.description}>
          <h2>Nasze placówki w Krakowie – znajdź najbliższą!</h2>
          <p>
            Wybierz jedną z naszych placówek żłobka Wesołe Wygibasy w Krakowie,
            aby dowiedzieć się więcej o ofercie, planie dnia i zobaczyć galerie
            z codziennego życia dzieci. Dwie nasze placówki realizują Program
            Aktywny Maluch, który wspiera wszechstronny rozwój najmłodszych i
            pomaga maluchom rozwijać się fizycznie, emocjonalnie oraz
            społecznie.
          </p>
        </div>
        <div className={classes.grid}>
          {items.map((item, index) => (
            <PlaceItem
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              location={item.location}
              street={item.street}
              add={item.add}
              color={item.color}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
