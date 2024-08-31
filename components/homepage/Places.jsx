"use client";
import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";
import { useRef } from "react";
import { useInView, motion, delay, color } from "framer-motion";

export default function Places() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef);

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
      title: "Niepubliczny Żłobek",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobek-na-ulicy-stanczyka",
      add: "Program Aktywny Maluch",
    },
    {
      image: "/others/glogera.jpg",
      alt: "srodek zlobka na ulicy Glogera",
      title: "Niepubliczny Żłobek",
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
    <div className={classes.container} id="placowki" ref={skillRef}>
      <div className={classes.grid}>
        {items.map((item, index) => (
          <motion.div
            key={item.link}
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillRefinView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <PlaceItem
              image={item.image}
              alt={item.alt}
              title={item.title}
              location={item.location}
              street={item.street}
              add={item.add}
              color={item.color}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
