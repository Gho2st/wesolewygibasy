import classes from "./career.module.css";
import { FaNetworkWired } from "react-icons/fa";

export default function Career() {
  return (
    <section>
      <div className={classes.careerContainer}>
        <h2 className={classes.header}>Dołącz do naszego zespołu!</h2>
        <div className={classes.icon}>
          <FaNetworkWired />
        </div>
        <p>
          Jeśli kochasz pracę z dziećmi, masz w sobie dużo cierpliwości, ciepła
          i kreatywności – być może czekamy właśnie na Ciebie! Nasz żłobek to
          miejsce, gdzie troska o najmłodszych łączy się z atmosferą współpracy
          i rozwoju. Poszukujemy zaangażowanych osób na stanowisko
          opiekuna/opiekunki żłobkowej, które pomogą nam tworzyć bezpieczne i
          pełne radości środowisko dla dzieci.
        </p>
        <ul className={classes.listContainer}>
          <li>Stabilne zatrudnienie i wsparcie zespołu.</li>
          <li>Możliwość rozwoju zawodowego (np. kursy, szkolenia).</li>
          <li>Praca w małych grupach dzieci.</li>
          <li>Przyjazna atmosfera i nowoczesne zaplecze.</li>
        </ul>
        <h3 className={classes.header3}>Jak aplikować</h3>
        <p>
          Jeśli chcesz dołączyć do naszego zespołu, wyślij swoje CV na adres:
          wesolewygibasy@onet.pl. Chętnie się z Tobą spotkamy!
        </p>
      </div>
    </section>
  );
}
