'use client'
import { motion } from "framer-motion";
import classes from "./PlaceItem.module.css";
import Image from "next/image";
import Button from "../UI/Button";

export default function PlaceItem(props) {
  return (
    <article>
      <motion.div
        className={classes.itemContainer}
        initial={{ opacity: 0, y: 50 }} // Początkowy stan: ukryty i przesunięty w dół
        whileInView={{ opacity: 1, y: 0 }} // Końcowy stan: widoczny i na swoim miejscu
        transition={{ duration: 0.6, ease: "easeOut" }} // Czas trwania animacji
        viewport={{ once: true, amount: 0.5 }} // Animacja tylko, gdy element stanie się widoczny na ekranie
      >
        <div className={classes.imageContainer}>
          <Image
            src={props.image}
            alt={props.alt}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className={classes.downContainer}>
          <div className={classes.text}>
            <h3 style={{ color: props.color }}>{props.title}</h3>
            <p>{props.location}</p>
            <p>{props.street}</p>
          </div>
          <div className={classes.innerContainer}>
            <div className={classes.buttonContainer}>
              <Button text="Sprawdź" fontSize="1rem" href={"/" + props.link} />
            </div>
            <div
              className={classes.dotationText}
              style={{ color: props.add !== "" ? "#08c6c3" : "transparent" }}
            >
              {props.add ? (
                props.add
                  .split("\n")
                  .map((line, index) => <p key={index}>{line}</p>)
              ) : (
                <p>Placeholder text</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
