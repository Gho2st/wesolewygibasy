import PlaceItem from "../UI/PlaceItem";
import classes from "./Places.module.css";

export default function Places(props) {
  const items = [
    {
      image: "/nowy_zlobek.png",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka na ulicy Łokietka",
      title: "Żłobek na Łokietka",
      location: "Żłobek, Kraków",
      street: "ul. Łokietka 23",
      link: "zlobki/lokietka",
      add: "Dotacja aktywny maluch \n Dotacja aktywnie w żłobku \n Opieka jest darmowa!!!",
    },
    {
      image: "sliders/sliczna-slider/sl4.jpg",
      alt: "Własny plac zabaw Żłobka Wesołe Wygibasy na ulicy Ślicznej",
      title: "Żłobek na Ślicznej",
      location: "Żłobek, Kraków",
      street: "ul. Śliczna 36/A",
      link: "zlobki/sliczna",
      add: "Program Aktywny Maluch \n Dotacja aktywny maluch \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/stanczyka.jpg",
      alt: "Zdjęcie z zewnątrz budynku Żłobka Wesołe Wygibasy na ulicy Stańczyka",
      title: "Żłobek na Stańczyka",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobki/stanczyka",
      add: "Program Aktywny Maluch \n Dotacja aktywny maluch \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/glogera.jpg",
      alt: "Zdjęcie z wewnątrz Żłobka Wesołe Wygibasy na ulicy Glogera",
      title: "Żłobek na Glogera",
      location: "Żłobek, Kraków",
      street: "ul. Glogera 53/LU2",
      link: "zlobki/glogera",
      add: "Dotacja aktywny maluch \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/sliders/klub-malucha-slider/k2.jpg",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka Klubu Malucha na ulicy Vetulaniego",
      title: "Klub Malucha",
      location: "Żłobek, Kraków",
      street: "ul. Vetulaniego 8",
      link: "zlobki/vetulaniego",
      add: "Dotacja aktywny maluch \n Dotacja aktywnie w żłobku",
    },
  ];

  return (
    <section id="placówki">
      <div className={classes.container}>
        <div className={classes.description}>
          <h2>
            Nasze placówki w Krakowie – <span> znajdź </span> najbliższą!
          </h2>
          <p>
            Mamy 5 placówek w różnych częściach Krakowa – każda z nich oferuje
            tę samą wysoką jakość opieki, ale w unikalnej lokalizacji. Sprawdź
            szczegóły i wybierz żłobek dla swojego dziecka!
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
