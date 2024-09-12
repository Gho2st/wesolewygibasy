"use client";
import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";

export default function Places(props) {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef, { once: true });

  const items = [
    {
      image: "sliders/sliczna-slider/sl4.jpg",
      alt: "plac zabaw na ulicy Ślicznej",
      title: "Miejsca w Nowym Żłobku",
      location: "Żłobek, Kraków",
      street: "ul. Śliczna 36/A",
      link: "zlobek-na-ulicy-slicznej",
      add: "Program Aktywny Maluch",
      color: "#fa7070",
    },
    {
      image: "/others/stanczyka.jpg",
      alt: "budynek zlobka na ulicy Stańczyka",
      title: "Żłobek na Stańczyka",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobek-na-ulicy-stanczyka",
      add: "Program Aktywny Maluch",
    },
    {
      image: "/others/glogera.jpg",
      alt: "srodek zlobka na ulicy Glogera",
      title: "Żłobek na Glogera",
      location: "Żłobek, Kraków",
      street: "ul. Glogera 53/LU2",
      link: "zlobek-na-ulicy-glogera",
      add: "",
    },
    {
      image: "/others/vetulaniego.jpg",
      alt: "srodek zlobka na ulicy Vetulaniego",
      title: "Klub Malucha",
      location: "Żłobek, Kraków",
      street: "ul. Vetulaniego 8",
      link: "zlobek-na-ulicy-vetulaniego",
      add: "",
    },
  ];
  return (
    <article
      id="placowki"
      style={{ background: props.background ? "white" : "#fffbf2" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          isSkillRefinView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.85 }
        }
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className={classes.container}
        ref={skillRef}
      >
        <div className={classes.description}>
          <h2>Nasze Placówki</h2>
          <p>
            Wybierz jedną z naszych placówek w Krakowie, by dowiedzieć się
            więcej o ofercie poszczególnych punktów. Dwie z naszych placówek
            realizują Program Aktywny Maluch, który wspiera wszechstronny rozwój
            najmłodszych.
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
      </motion.div>
    </article>
  );
}
