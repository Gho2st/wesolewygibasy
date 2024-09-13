import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import { Metadata } from "next";
import Header from "@/components/UI/Header";

export const metadata = {
  title: "Plan Dnia",
  alternates: {
    canonical: "/plan-dnia-w-zlobku",
  },
  description:
    "Poznaj plan dnia w żłobku Wesołe Wygibasy w Krakowie. Różnorodne zajęcia, czas na zabawę, naukę i odpoczynek w przyjaznym otoczeniu.",
};
export default function plan() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Plan Dnia w Żłobku Wesołe Wygibasy w Krakowie" />
        <p>
          W żłobku Wesołe Wygibasy w Krakowie każda z naszych placówek oferuje
          szczegółowy plan dnia, dostosowany do potrzeb i wieku dzieci. Nasz
          harmonogram dnia zapewnia zrównoważone połączenie czasu na zabawę,
          naukę, posiłki, odpoczynek oraz inne ważne czynności, tworząc
          sprzyjające środowisko do rozwoju umiejętności i zainteresowań
          maluchów.
        </p>
        <h2>Nasz Plan Dnia obejmuje</h2>
        <ul>
          <li>
            Zajęcia edukacyjne: Stymulujące rozwój poznawczy poprzez zabawę i
            naukę.
          </li>
          <li>
            Zajęcia artystyczne: Rozwijające kreatywność i umiejętności
            manualne.
          </li>
          <li>Zajęcia ruchowe: Wspierające rozwój fizyczny i koordynację.</li>
          <li>
            Zajęcia muzyczne: Wzbogacające zmysł rytmu i muzykalność dzieci.
          </li>
        </ul>

        <p>
          Dodatkowo, w krakowskim żłobku Wesołe Wygibasy oferujemy także zajęcia dodatkowe,
          które umożliwiają dzieciom poszerzanie umiejętności i zainteresowań w
          specyficznych obszarach, takich jak języki obce, taniec, sport czy
          nauka przez zabawę.
          <br></br>
          <br></br>
          Dbamy o to, aby każda chwila spędzona w naszym żłobku w Krakowie była
          wartościowa i rozwijająca, w przyjaznej i bezpiecznej atmosferze.
        </p>
      </div>
      <Places background="true" />
    </>
  );
}
