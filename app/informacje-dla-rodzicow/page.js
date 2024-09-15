import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Button from "@/components/UI/Button";
import { Metadata } from "next";

export const metadata = {
  title: "Informacje dla Rodziców - Żłobek Wesołe Wygibasy w Krakowie",
  alternates: {
    canonical: "/informacje-dla-rodzicow",
  },
  description:
    "Praktyczne informacje dla rodziców dzieci uczęszczających do żłobka Wesołe Wygibasy w Krakowie. Sprawdź zasady, dokumenty, wskazówki dotyczące opieki nad dziećmi oraz obowiązujące procedury ochrony danych osobowych zgodne z RODO.",
};

export default function informacje() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Informacje dla Rodziców i Opiekunów" />
        <h2>Drodzy Rodzice i Opiekunowie!</h2>
        <p>
          Witamy na stronie z ważnymi informacjami dotyczącymi funkcjonowania
          naszego żłobka Wesołe Wygibasy w Krakowie. Znajdziecie tutaj kluczowe
          dokumenty, zasady oraz procedury, które są istotne dla każdego rodzica
          i opiekuna. Naszym priorytetem jest zapewnienie bezpiecznej,
          wspierającej i rozwijającej opieki nad Waszymi dziećmi. Zachęcamy do
          zapoznania się z poniższymi dokumentami oraz informacjami dotyczącymi
          naszego żłobka.
        </p>

        <h3>Statut Żłobka Wesołe Wygibasy</h3>
        <p>
          Statut żłobka określa zasady funkcjonowania naszej placówki, w tym
          prawa i obowiązki rodziców oraz personelu. Statut zawiera również
          informacje o zasadach rekrutacji, opłatach oraz organizacji dnia w
          naszym żłobku. Prosimy o pobranie i zapoznanie się z dokumentem:
        </p>
        <a href="/STATUT-ZLOBEK.odt" download>
          Pobierz Statut Żłobka
        </a>

        <h3>Regulamin Żłobka</h3>
        <p>
          Regulamin żłobka Wesołe Wygibasy zawiera szczegółowe informacje na
          temat codziennego funkcjonowania naszej placówki, w tym godzin
          otwarcia, zasad przyprowadzania i odbierania dzieci, a także norm
          dotyczących bezpieczeństwa i higieny. Zachęcamy do zapoznania się z
          regulaminem, aby lepiej poznać zasady, jakie obowiązują w naszym
          żłobku:
        </p>
        <a href="regulamin.odt" download>
          Pobierz Regulamin Żłobka
        </a>

        <h3>Standardy Ochrony Małoletnich</h3>
        <p>
          Ochrona małoletnich jest dla nas kluczowym priorytetem. W naszym
          żłobku obowiązują ściśle określone standardy ochrony dzieci przed
          krzywdzeniem. Dokument ten zawiera zasady postępowania w przypadku
          zagrożeń oraz procedury bezpieczeństwa, które stosujemy w codziennej
          pracy z dziećmi.
        </p>
        <a href="/Standardy ochrony małoletnich przed krzywdzeniem w przedszkolu.pdf">
          Otwórz Standardy Ochrony Małoletnich
        </a>

        <h3>Polityka Prywatności i Ochrona Danych Osobowych</h3>
        <p>
          Zgodnie z przepisami RODO, dokładamy wszelkich starań, aby chronić
          dane osobowe Państwa dzieci. Dokument zawiera szczegółowe informacje
          na temat przetwarzania danych osobowych w naszej placówce, w tym
          celów, na jakie są one zbierane, oraz praw przysługujących rodzicom i
          opiekunom.
        </p>
        <a href="/RODO-klauzula-informacyjna-copy.jpg" download>
          Pobierz Klauzulę Prywatności
        </a>

        <h3>Dlaczego rodzice wybierają Żłobek Wesołe Wygibasy w Krakowie?</h3>
        <p>
          Nasz żłobek w Krakowie zapewnia nie tylko profesjonalną opiekę nad
          dziećmi, ale również wszechstronny rozwój maluchów w bezpiecznym i
          przyjaznym otoczeniu. Organizujemy liczne zajęcia edukacyjne i
          artystyczne, które pomagają dzieciom rozwijać umiejętności społeczne i
          kreatywne. Jesteśmy otwarci na współpracę z rodzicami, a nasz
          wykwalifikowany personel dba o indywidualne potrzeby każdego dziecka.
        </p>

        <p>
          Zapraszamy do kontaktu z nami w celu uzyskania szczegółowych
          informacji na temat naszej oferty, zapisów oraz warunków opieki nad
          dziećmi. Nasz żłobek znajduje się w dogodnej lokalizacji w Krakowie,
          co ułatwia codzienne przyprowadzanie i odbieranie dzieci.
        </p>

        <div className={classes.buttons}>
          <Button
            href="/kontakt"
            text="Skontaktuj się z nami"
            fontSize="1rem"
          />
        </div>
      </div>
    </>
  );
}
