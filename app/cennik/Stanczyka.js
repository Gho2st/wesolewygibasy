import classes from "./Stanczyka.module.css";

export default function Stanczyka() {
  return (
    <div className={classes.stanczykaContainer}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Pełna kwota abonamentu miesięcznego</th>
            <th>liczba dni roboczych</th>
            <th>wysokość miesięcznej dotacji</th>
            <th>wpłata na konto (kwota pomniejszona o dofinansowanie z UM)</th>
            <th>
              Koszt Rodzica
            </th>
          </tr>
          <tr>
            <td>Styczeń</td>
            <td>1560 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>825 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Luty</td>
            <td>1560 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>825 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Marzec</td>
            <td>1560 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>825 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Kwiecień</td>
            <td>1560 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>825 zł</td>
            <td>0 zł</td>
          </tr>
          <tr>
            <td>Maj</td>
            <td>1560 zł</td>
            <td>20</td>
            <td>700 zł</td>
            <td>836 zł</td>
            <td>24 zł</td>
          </tr>
          <tr>
            <td>Czerwiec</td>
            <td>1560 zł</td>
            <td>20</td>
            <td>700 zł</td>
            <td>836 zł</td>
            <td>24 zł</td>
          </tr>
          {/* <tr>
            <td>Lipiec</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Sierpień</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Wrzesień</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Październik</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Listopad</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Grudzień</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr> */}
        </tbody>
      </table>
      <p className={classes.text}>Zajęcia dodatkowe płatne 280 zł / miesiąc</p>
      <h3 className={classes.header}>
        Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
        urzędu miasta Kraków
      </h3>
    </div>
  );
}
