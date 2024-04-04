import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";

export default function Places() {
  return (
    <div className={classes.container} id="placowki">
      <div className={classes.grid}>
        <PlaceItem
          image="/others/sliczna.jpeg"
          alt="budynek zlobka na ulicy slicznej"
          title="! Nowy Żłobek !"
          location="Ulica Śliczna 36A, Kraków"
          street="Wkrótce otwarcie!"
          add="Projekt Maluch+ 2022-2029"
          color="#fa7070"
          link="zlobki/sliczna"
        />
        <PlaceItem
          image="/others/stanczyka.jpg"
          alt="budynek zlobka na ulicy Stańczyka"
          title="Niepubliczny Żłobek"
          location="Żłobek, Kraków"
          street="ul. Stańczyka 8/LU3"
          link="zlobki/stanczyka"
          add="Projekt Maluch+ 2022-2029"
        />
        <PlaceItem
          image="/others/glogera.jpg"
          alt="srodek zlobka na ulicy Glogera"
          title="Niepubliczny Żłobek"
          location="Żłobek, Kraków"
          street="ul .Glogera 53/LU2"
          link="zlobki/glogera"
        />
        <PlaceItem
          image="/others/vetulaniego.jpg"
          alt="srodek zlobka na ulicy Vetulaniego"
          title="Klub Malucha"
          location="Żłobek, Kraków"
          street="ul. Vetulaniego 8"
          link="zlobki/vetulaniego"
        />
      </div>
    </div>
  );
}
