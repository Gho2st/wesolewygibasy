import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Image from "next/image";
import Dotation from "@/components/Info/dotation";

export const metadata = {
  title: "Informacje - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Znajdź ważne informacje dla rodziców i opiekunów dzieci w Żłobku Wesołe Wygibasy w Krakowie. Dowiedz się więcej o statucie, regulaminie, ochronie małoletnich oraz polityce prywatności.",
  alternates: {
    canonical: "/informacje-dla-rodzicow",
  },
  keywords:
    "informacje, rodo, ochrona małoletnich, zasady w Żłobku, polityka prywatności",
};

export default function informacje() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.baner}>
          <Header text="Informacje dla Rodziców i Opiekunów" />

          <div className={classes.banerContainer}>
            <div className={classes.banerText}>
              <h2>Drodzy Rodzice i Opiekunowie!</h2>
              <p>
                Witamy na stronie z ważnymi informacjami dotyczącymi
                funkcjonowania naszego żłobka Wesołe Wygibasy w Krakowie.
                Znajdziecie tutaj kluczowe dokumenty, zasady oraz procedury,
                które są istotne dla każdego rodzica i opiekuna. Naszym
                priorytetem jest zapewnienie bezpiecznej, wspierającej i
                rozwijającej opieki nad Waszymi dziećmi. Zachęcamy do zapoznania
                się z poniższymi dokumentami oraz informacjami dotyczącymi
                naszego żłobka.
              </p>
            </div>
            <Image
              src="/others/info.png"
              width={100}
              height={100}
              layout="responsive"
              alt="Grafika przedstawiająca zabawki"
            />
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={`${classes.card} ${classes.card1}`}>
            <div className={classes.text}>
              <h3>Statut Żłobka Wesołe Wygibasy</h3>
              <p>
                Statut żłobka określa zasady funkcjonowania naszej placówki, w
                tym prawa i obowiązki rodziców oraz personelu. Statut zawiera
                również informacje o zasadach rekrutacji, opłatach oraz
                organizacji dnia w naszym żłobku. Prosimy o pobranie i
                zapoznanie się z dokumentem:
              </p>
            </div>
            <div className={classes.button}>
              <a href="/STATUT-ZLOBEK.odt" download>
                Pobierz
              </a>
            </div>
          </div>
          <div className={`${classes.card} ${classes.card2}`}>
            <div className={classes.text}>
              <h3>Regulamin Żłobka</h3>
              <p>
                Regulamin żłobka Wesołe Wygibasy zawiera szczegółowe informacje
                na temat codziennego funkcjonowania naszej placówki, w tym
                godzin otwarcia, zasad przyprowadzania i odbierania dzieci, a
                także norm dotyczących bezpieczeństwa i higieny. Zachęcamy do
                zapoznania się z regulaminem, aby lepiej poznać zasady, jakie
                obowiązują w naszym żłobku:
              </p>
            </div>
            <div className={classes.button}>
              <a href="regulamin.odt" download>
                Pobierz
              </a>
            </div>
          </div>
          <div className={`${classes.card} ${classes.card3}`}>
            <div className={classes.text}>
              <h3>Standardy Ochrony Małoletnich</h3>
              <p>
                Ochrona małoletnich jest dla nas kluczowym priorytetem. W naszym
                żłobku obowiązują ściśle określone standardy ochrony dzieci
                przed krzywdzeniem. Dokument ten zawiera zasady postępowania w
                przypadku zagrożeń oraz procedury bezpieczeństwa, które
                stosujemy w codziennej pracy z dziećmi.
              </p>
            </div>
            <div className={classes.button}>
              <a href="/Standardy ochrony małoletnich przed krzywdzeniem w przedszkolu.pdf">
                Otwórz
              </a>
            </div>
          </div>
          <div className={`${classes.card} ${classes.card4}`}>
            <div className={classes.text}>
              <h3>Polityka Prywatności i Ochrona Danych Osobowych</h3>
              <p className="">
                Zgodnie z przepisami RODO, dokładamy wszelkich starań, aby
                chronić dane osobowe Państwa dzieci. Dokument zawiera
                szczegółowe informacje na temat przetwarzania danych osobowych w
                naszej placówce, w tym celów, na jakie są one zbierane, oraz
                praw przysługujących rodzicom i opiekunom.
              </p>
            </div>
            <div className={classes.button}>
              <a href="/RODO-klauzula-informacyjna-copy.jpg" download>
                Pobierz
              </a>
            </div>
          </div>
        </div>
      </div>
      <Dotation />
    </>
  );
}
