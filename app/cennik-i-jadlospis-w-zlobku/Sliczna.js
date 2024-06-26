import classes from "./Sliczna.module.css";

export default function Sliczna() {
  return (
    <div className={classes.slicznaContainer}>
      <h3>
        Cennik dla rodzica pierwszego dziecka w rodzinie uczęszczającego do
        Niepublicznego Żłobka Wesołe Wygibasy, Kraków ul. Śliczna 36A/LU1
      </h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Czesne</th>
            <th>Dotacja U.M</th>
            <th>Dotacja Maluch*</th>
            <th>Dotacja ZUS**</th>
            <th>Wpłata na konto</th>
            <th>Ostateczne opłaty</th>
          </tr>
          <tr>
            <td>Lipiec 2024 </td>
            <td>2010 zł</td>
            <td>805 zł</td>
            <td>837 zł</td>
            <td>368 zł</td>
            <td>1205 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Sierpień 2024</td>
            <td>2010 zł</td>
            <td>735 zł</td>
            <td>837 zł</td>
            <td>400 zł</td>
            <td>1275 zł</td>
            <td>38 zł</td>
          </tr>
          <tr>
            <td>Wrzesień 2024</td>
            <td>2010 zł</td>
            <td>735 zł</td>
            <td>837 zł</td>
            <td>400 zł</td>
            <td>1275 zł</td>
            <td>38 zł</td>
          </tr>
        </tbody>
      </table>

      {/* <p className={classes.text}>Zajęcia dodatkowe płatne 280 zł / miesiąc</p> */}
      <p className={classes.text}>
        * Kwota zwracana rodzicom po otrzymaniu przelewu z MRiPS)
      </p>
      <p className={classes.text}>
        ** Kwota zwracana ok. 20 dnia następnego miesiąca (np. za lipiec zwrot
        ok. 20 sierpnia)
      </p>
      <h3 className={classes.header}>
        Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
        urzędu miasta Kraków
      </h3>
      <h3>
        Opłaty dla rodziców pobierających RKO (świadczenie ZUS na 2 dziecko w
        rodzinie uczęszczające do Niepublicznego Żłobka Wesołe Wygibasy, Kraków
        ul. Śliczna 36A/LU1)
      </h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Czesne</th>
            <th>Dotacja U.M</th>
            <th>Dotacja Maluch*</th>
            <th>Wpłata na konto</th>
            <th>Ostateczne opłaty</th>
          </tr>
          <tr>
            <td>Lipiec 2024 </td>
            <td>2010 zł</td>
            <td>805 zł</td>
            <td>837 zł</td>
            <td>1205 zł</td>
            <td>368 zł</td>
          </tr>
          <tr>
            <td>Sierpień 2024</td>
            <td>2010 zł</td>
            <td>735 zł</td>
            <td>837 zł</td>
            <td>1275 zł</td>
            <td>438 zł</td>
          </tr>
          <tr>
            <td>Wrzesień 2024</td>
            <td>2010 zł</td>
            <td>735 zł</td>
            <td>837 zł</td>
            <td>1275 zł</td>
            <td>438 zł</td>
          </tr>
        </tbody>
      </table>
      <p className={classes.text}>
        * Kwota zwracana rodzicom po otrzymaniu przelewu z MRiPS)
      </p>
    </div>
  );
}
