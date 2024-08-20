import H1 from "@/components/UI/H1";
import classes from "./page.module.css";
import Button from "@/components/UI/Button";
import { Metadata } from "next";

export const metadata = {
  title: "Informacje dla Rodziców",
  alternates: {
    canonical: "/informacje-dla-rodzicow",
  },
};

export default function informacje() {
  return (
    <>
      <div className={classes.container}>
        <H1 text="Informacje" />
        <h2 className={classes.mt}> Drodzy Rodzice, Opiekunowie!</h2>
        <p>
          Na tej stronie znajdą Państwo ważne dokumenty związane z ochroną
          danych osobowych oraz funkcjonowaniem naszego żłobka. Prosimy o
          zapoznanie się z poniższymi plikami, które zawierają szczegółowe
          informacje na temat naszych zasad i procedur.
        </p>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <h2>Statut Żłobka</h2>
            <a href="/STATUT-ZLOBEK.odt" download>
              Pobierz
            </a>
          </div>

          <div className={classes.button}>
            <h2>Regulamin Żłobka</h2>
            <a href="regulamin.odt" download>
              Pobierz
            </a>
          </div>

          <div className={classes.button}>
            <h2>Standardy Ochrony Małoletnich</h2>
            <a href="/Standardy ochrony małoletnich przed krzywdzeniem w przedszkolu.pdf">
              Otwórz
            </a>
          </div>
          <div className={classes.button}>
            <h2>Standardy Ochrony Małoletnich (reguły)</h2>
            <a href="/Standardy (reguły) ochrony małoletnich przed krzywdzeniem w przedszkolu.pdf">
              Otwórz
            </a>
          </div>

          <div className={classes.button}>
            <h2> Klauzula prywatności</h2>
            <p>
              Od dnia 25 maja 2018 roku obowiązują nowe zasady ochrony danych
              osobowych, które wynikają z postanowień RODO. RODO to
              Rozporządzenie o Ochronie Danych Osobowych – pełna nazwa to:
              Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z
              dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych i w sprawie swobodnego
              przepływu takich danych oraz uchylenia dyrektywy 95/46/WE. W
              poniższym pliku zawarte są informacje o przetwarzaniu danych
              osobowych w Wesołych Wygibasach.
            </p>
            <a href="/RODO-klauzula-informacyjna-copy.jpg" download>
              Pobierz klauzulę
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
