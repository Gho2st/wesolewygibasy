import H1 from "@/components/UI/H1";
import classes from "./page.module.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Button from "@/components/UI/Button";

export default function informacje() {
  const handleDownloadInformativeClause = () => {
    window.location.href = "/RODO-klauzula-informacyjna-copy.jpg"; // Plik klauzuli informacyjnej
  };

  const handleDownloadStatute = () => {
    window.location.href = "/statut.pdf"; // Plik statutu
  };

  const handleDownloadRegulation = () => {
    window.location.href = "/regulamin.pdf"; // Plik regulaminu
  };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <H1 text="Informacje" />
        <h2> Drodzy Rodzice, Opiekunowie</h2>
        <p>
          Od dnia 25 maja 2018 roku obowiązują nowe zasady ochrony danych
          osobowych, które wynikają z postanowień RODO. RODO to Rozporządzenie o
          Ochronie Danych Osobowych – pełna nazwa to: Rozporządzenie Parlamentu
          Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
          sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE. W poniższym pliku zawarte są informacje
          o przetwarzaniu danych osobowych w Wesołych Wygibasach.
        </p>
        <div className={classes.buttons}>
          <div className={classes.button}>
            <a href="/RODO-klauzula-informacyjna-copy.jpg" download>
              Pobierz klauzulę informacyjną
            </a>
          </div>
          <h2>Statut Żłobka</h2>
          <div className={classes.button}>
            <a href="/STATUT-ZLOBEK.odt" download>
              Pobierz
            </a>
          </div>

          <h2>Regulamin Żłobka</h2>
          <div className={classes.button}>
            <a href="regulamin.odt" download>
              Pobierz
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
