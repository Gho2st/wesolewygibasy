import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";

export default function Places() {
  return (
    <div className={classes.container} id="placowki">
      <div className={classes.grid}>
        <PlaceItem
          image="/sliczna-slider/sl1.jpg"
          alt="budynek zlobka na ulicy slicznej"
          title="Wolne miejsca w Nowym Żłobku"
          location="Ulica Śliczna 36A, Kraków"
          street="Otwarcie 1 lipca 2024"
          add="Projekt Maluch+ 2022-2029"
          color="#fa7070"
          link="zlobek-na-ulicy-slicznej"
        />
        <PlaceItem
          image="/others/stanczyka.jpg"
          alt="budynek zlobka na ulicy Stańczyka"
          title="Niepubliczny Żłobek"
          location="Żłobek, Kraków"
          street="ul. Stańczyka 8/LU3"
          link="zlobek-na-ulicy-stanczyka"
          add="Projekt Maluch+ 2022-2029"
        />
        <PlaceItem
          image="/others/glogera.jpg"
          alt="srodek zlobka na ulicy Glogera"
          title="Niepubliczny Żłobek"
          location="Żłobek, Kraków"
          street="ul. Glogera 53/LU2"
          link="zlobek-na-ulicy-glogera"
        />
        <PlaceItem
          image="/others/vetulaniego.jpg"
          alt="srodek zlobka na ulicy Vetulaniego"
          title="Klub Malucha"
          location="Żłobek, Kraków"
          street="ul. Vetulaniego 8"
          link="zlobek-na-ulicy-vetulaniego"
        />
      </div>
    </div>
  );
}
