import classes from "./Second.module.css";

export default function Second() {
  return (
    <div className={classes.secondContainer}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Czesne</th>
            <th>Dotacja U.M</th>
            <th>Dotacja Maluch</th>
            <th>Aktywnie w Żłobku</th>
            <th className={classes.pay}>Wpłata na konto</th>
            <th>Ostateczne opłaty</th>
          </tr>
          <tr>
            <td>Kwiecień 2025 </td>
            <td>2230 zł</td>
            <td>735 zł</td>
            <td>836 zł</td>
            <td>659 zł</td>
            <td>659 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Maj 2025</td>
            <td>2230 zł</td>
            <td>700 zł</td>
            <td>836 zł</td>
            <td>694 zł</td>
            <td>694 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Czerwiec 2025</td>
            <td>2230 zł</td>
            <td>735 zł</td>
            <td>836 zł</td>
            <td>695 zł</td>
            <td>659 zł</td>
            <td>0 zł</td>
          </tr>
        </tbody>
      </table>

      <p className={classes.additional}>
        Zajęcia dodatkowe płatne 300 zł / miesiąc
      </p>
      <p>
        {" "}
        <strong>
          * Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
          ok. 20 sierpnia
        </strong>
      </p>

      <h3 className={classes.header}>
        Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
        urzędu miasta Kraków
      </h3>
    </div>
  );
}
