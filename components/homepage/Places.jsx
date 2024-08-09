'use client'
import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";
import { useRef } from "react";
import { useInView, motion, delay } from "framer-motion";

export default function Places() {
  const skillRef = useRef();
  const isSkillRefinView = useInView(skillRef);

  const items = [
    {
      image: "/sliczna-slider/sl1.jpg",
      alt: "budynek zlobka na ulicy slicznej",
      title: "Wolne miejsca w Nowym Żłobku",
      location: "Ulica Śliczna 36A, Kraków",
      street: "Otwarcie 1 lipca 2024",
      add: "Projekt Maluch+ 2022-2029",
      color: "#fa7070",
      link: "zlobek-na-ulicy-slicznej",
    },
    {
      image: "/others/stanczyka.jpg",
      alt: "budynek zlobka na ulicy Stańczyka",
      title: "Niepubliczny Żłobek",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobek-na-ulicy-stanczyka",
      add: "Projekt Maluch+ 2022-2029",
    },
    {
      image: "/others/glogera.jpg",
      alt: "srodek zlobka na ulicy Glogera",
      title: "Niepubliczny Żłobek",
      location: "Żłobek, Kraków",
      street: "ul. Glogera 53/LU2",
      link: "zlobek-na-ulicy-glogera",
    },
    {
      image: "/others/vetulaniego.jpg",
      alt: "srodek zlobka na ulicy Vetulaniego",
      title: "Klub Malucha",
      location: "Żłobek, Kraków",
      street: "ul. Vetulaniego 8",
      link: "zlobek-na-ulicy-vetulaniego",
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
