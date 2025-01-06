import classes from "./Others.module.css";

export default function Others() {
  return (
    <div className={classes.pricingOthers}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Czesne</th>
            <th>Dotacja U.M.</th>
            <th>Aktywnie w Żłobku</th>
            <th>Wpłata na konto</th>
            <th>Ostateczne opłaty</th>
          </tr>
          <tr>
            <td>Styczeń 2025</td>
            <td>2400 zł</td>
            <td>735 zł</td>
            <td>1500 zł</td>
            <td>1665 zł</td>
            <td>165 zł</td>
          </tr>
          <tr>
            <td>Luty 2025</td>
            <td>2400 zł</td>
            <td>700 zł</td>
            <td>1500 zł</td>
            <td>1700 zł</td>
            <td>200 zł</td>
          </tr>
          <tr>
            <td>Marzec 2025</td>
            <td>2100 zł</td>
            <td>735 zł</td>
            <td>1500 zł</td>
            <td>1665 zł</td>
            <td>165 zł</td>
          </tr>
        </tbody>
      </table>
      <h3 className={classes.header}>
        Placówka realizuje również świadczenia ZUS z programu 400+
      </h3>
      <div className={classes.text}>
        <p>
          <strong>
            Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
            ok. 20 sierpnia)
          </strong>
        </p>
        <br></br>
        <p>
          Od kwoty z rubryki „wpłata na konto” rodzicom posiadającym w placówce
          „pierwsze dziecko” przysługuje świadczenie Zus w wysokości 400 zł,
          zwracane na konto z miesięcznym opóźnieniem (np. za wrzesień zwrot ok.
          20 października).
        </p>
        <br></br>
      </div>
    </div>
  );
}
