import classes from "./Map.module.css";

export default function Map(props) {
  return (
    <section>
      <div className={classes.container}>
        <h2>Mapa dojazdu</h2>
        <p>
          Nasz żłobek <span>Wesołe Wygibasy</span> znajduje się w dogodnej
          lokalizacji w Krakowie, co sprawia, że dojazd do nas jest szybki i
          wygodny zarówno dla mieszkańców centrum, jak i okolicznych dzielnic.
          Dzięki bliskości głównych arterii komunikacyjnych oraz dostępności
          miejsc parkingowych w pobliżu, możesz z łatwością przywieźć swoje
          dziecko każdego dnia.
        </p>
        <div className={classes.mapContainer}>
          <iframe
            src={props.src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
