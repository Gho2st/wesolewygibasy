import classes from "./Others.module.css";

export default function Others() {
  return (
    <div className={classes.pricingOthers}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Miesiąc</th>
            <th>Pełna kwota abonamentu miesięcznego</th>
            <th>liczba dni roboczych</th>
            <th>wysokość miesięcznej dotacji</th>
            <th>wpłata na konto (kwota pomniejszona o dofinansowanie z UM)</th>
            <th>
              kwota zwracana na konto rodzica (dotacja z programu Maluch +
              2022-2029)
            </th>
          </tr>
          <tr>
            <td>Styczeń</td>
            <td>2100 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Luty</td>
            <td>2100 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Marzec</td>
            <td>2100 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Kwiecień</td>
            <td>2100 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Maj</td>
            <td>2100 zł</td>
            <td>20</td>
            <td>700 zł</td>
            <td>1400zł</td>
            <td>1000 zł</td>
          </tr>
          <tr>
            <td>Czerwiec</td>
            <td>1512 zł</td>
            <td>20</td>
            <td>700 zł</td>
            <td>1400 zł</td>
            <td>1000 zł</td>
          </tr>
          <tr>
            <td>Lipiec</td>
            <td>805 zł</td>
            <td>23</td>
            <td>665 zł</td>
            <td>1295 zł</td>
            <td>895 zł</td>
          </tr>
          <tr>
            <td>Sierpień</td>
            <td>2100 zł</td>
            <td>735</td>
            <td>665 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Wrzesień</td>
            <td>2100 zł</td>
            <td>21</td>
            <td>735 zł</td>
            <td>1365 zł</td>
            <td>965 zł</td>
          </tr>
          <tr>
            <td>Październik</td>
            <td>2100 zł</td>
            <td>23</td>
            <td>805 zł</td>
            <td>1295 zł</td>
            <td>895 zł</td>
          </tr>
          <tr>
            <td>Listopad</td>
            <td>2100 zł</td>
            <td>19</td>
            <td>665 zł</td>
            <td>1435 zł</td>
            <td>1035 zł</td>
          </tr>
          <tr>
            <td>Grudzień</td>
            <td>2100 zł</td>
            <td>20</td>
            <td>700 zł</td>
            <td>1400 zł</td>
            <td>1000 zł</td>
          </tr>
        </tbody>
      </table>
      <h3 className={classes.header}>
        Placówka realizuje równiez świadczenia ZUS z programu 400+{" "}
      </h3>
      <div className={classes.text}>
        <p>
          Od kwoty z rubryki „wpłata na konto” rodzicom posiadającym w placówce
          „pierwsze dziecko” przysługuje świadczenie Zus w wysokości 400 zł,
          zwracane na konto z miesięcznym opóźnieniem (np. za wrzesień zwrot ok.
          20 października).
        </p>
        <p>
          W dniu zawarcia umowy Rodzic/Opiekun Prawny zobowiązany jest do
          wniesienia opłaty wpisowej (administracyjnej) w wysokości 550,00 zł
          (słownie: pięćset pięćdziesiąt złotych)
        </p>
        <p>
          Opłata ta obejmuje: <br></br><br></br> I) koszt ubezpieczenia dziecka od następstw
          nieszczęśliwych wypadków (NNW), <br></br><br></br>II) koszt zakupu podstawowych pomocy
          dydaktycznych, edukacyjnych i plastycznych, <br></br><br></br>III) koszt zakupu
          niezbędnych przedmiotów osobistych dla Dziecka na czas pobytu w żłobku
          (mokre chusteczki, ręcznik papierowy, nocnik itp.), <br></br><br></br> IV) koszt zakupu
          prezentów okolicznościowych (Mikołajki, Dzień Dziecka, Urodziny
          Dziecka). <br></br><br></br> V) Zakup pościeli dla dziecka.
        </p>
      </div>
    </div>
  );
}
