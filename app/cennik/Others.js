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
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Luty</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Marzec</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Kwiecień</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Maj</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
            <td>Czerwiec</td>
            <td>1512 zł</td>
            <td>21</td>
            <td>665 zł</td>
            <td>847 zł</td>
            <td>847 zł</td>
          </tr>
          <tr>
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
          Opłata ta obejmuje: I) koszt ubezpieczenia dziecka od następstw
          nieszczęśliwych wypadków (NNW), II) koszt zakupu podstawowych pomocy
          dydaktycznych, edukacyjnych i plastycznych, III) koszt zakupu
          niezbędnych przedmiotów osobistych dla Dziecka na czas pobytu w żłobku
          (mokre chusteczki, ręcznik papierowy, nocnik itp.), IV) koszt zakupu
          prezentów okolicznościowych (Mikołajki, Dzień Dziecka, Urodziny
          Dziecka). V) Zakup pościeli dla dziecka.
        </p>
      </div>
    </div>
  );
}
