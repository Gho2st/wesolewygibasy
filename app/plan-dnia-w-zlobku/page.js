import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import { Metadata } from "next";
import Header from "@/components/UI/Header";
import Button from "@/components/UI/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Plan Dnia - Żłobek Wesołe Wygibasy Kraków | Zajęcia i Edukacja",
  alternates: {
    canonical: "/plan-dnia-w-zlobku",
  },
  keywords:
    "plan dnia w żłobku, Wesołe Wygibasy Kraków, harmonogram dnia, zajęcia dla dzieci, edukacja przedszkolna, rozrywka dla maluchów, zajęcia edukacyjne, artystyczne, ruchowe",
  description:
    "Plan dnia w żłobku Wesołe Wygibasy Kraków oferuje zajęcia edukacyjne, artystyczne i ruchowe. Sprawdź nasz harmonogram, który wspiera rozwój dzieci poprzez zabawę i naukę w bezpiecznym środowisku.",
};

export default function PlanDnia() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Plan Dnia w Żłobku Wesołe Wygibasy w Krakowie - Zajęcia i Harmonogram dla Dzieci" />
        <div className={classes.banerContainer}>
          <div className={classes.text}>
            <p>Zobacz. I zapisz dziecko.</p>
            <h2>
              Zrównoważony Harmonogram Dnia w Żłobku Wesołe Wygibasy w Krakowie
            </h2>
            <p>
              Żłobek Wesołe Wygibasy w Krakowie oferuje starannie zaplanowany
              plan dnia, dostosowany do potrzeb i wieku dzieci. Nasze codzienne
              zajęcia edukacyjne, artystyczne i ruchowe w przyjaznym środowisku
              wspierają wszechstronny rozwój maluchów, oferując idealną
              równowagę między zabawą, nauką, odpoczynkiem i posiłkami.
            </p>
            <div className={classes.buttonContainer}>
              <Link href="/zapisy">
                <Button text="Zapisy" fontSize="1rem" />
              </Link>
              <Link href="#placowki">
                <Button
                  text="Sprawdź plan"
                  background="#7C99E5"
                  fontSize="1rem"
                />
              </Link>
            </div>
          </div>
          <Image
            src={"/others/plan.png"}
            width={100}
            height={100}
            layout={"responsive"}
            alt="grafika przedstawiająca plan zajęć w Żłobku Wesołe Wygibasy w Krakowie"
          ></Image>
        </div>
      </div>

      <div className={classes.cloudContainer}>
        <div className={classes.head}>
          <h2>Zajęcia i Aktywności w Żłobku Wesołe Wygibasy - Kraków</h2>
          <p>
            Sprawdź szczegóły naszego planu dnia w żłobku Wesołe Wygibasy w
            Krakowie. Zapoznaj się z harmonogramem oraz zasadami zapisów, aby
            zarezerwować miejsce dla swojego dziecka. Gwarantujemy, że nasze
            zajęcia spełnią oczekiwania rodziców i staną się wspaniałą przygodą
            edukacyjną dla dzieci!
          </p>
        </div>
        <div className={classes.cardContainer}>
          <div className={`${classes.card} ${classes.card1}`}>
            <h3>Zajęcia Edukacyjne</h3>
            <p>
              Zajęcia edukacyjne w żłobku Wesołe Wygibasy w Krakowie stymulują
              rozwój poznawczy dzieci. Poprzez zabawy edukacyjne i ciekawe
              lekcje, nasze maluchy rozwijają umiejętności, które wspierają ich
              dalszą edukację oraz kształtują zdolności społeczne.
            </p>
          </div>
          <div className={`${classes.card} ${classes.card2}`}>
            <h3>Zajęcia Artystyczne</h3>
            <p>
              Zajęcia artystyczne w żłobku Wesołe Wygibasy są ukierunkowane na
              rozwijanie kreatywności oraz umiejętności manualnych dzieci.
              Poprzez różnorodne formy twórczości, takie jak malowanie,
              rysowanie czy lepienie, maluchy mają okazję do ekspresji i rozwoju
              swoich zdolności artystycznych, co wspiera ich emocjonalny rozwój.
            </p>
          </div>
          <div className={`${classes.card} ${classes.card3}`}>
            <h3>Zajęcia Ruchowe</h3>
            <p>
              Nasze zajęcia ruchowe są kluczowe dla rozwoju fizycznego dzieci i
              poprawy ich koordynacji. Oferujemy szeroki wachlarz aktywności,
              takich jak zabawy ruchowe, gry i ćwiczenia, które wspierają
              zdrowie fizyczne. Dodatkowo, zajęcia muzyczne rozwijają zmysł
              rytmu i wrażliwość muzyczną dzieci, co przyczynia się do ich
              wszechstronnego rozwoju.
            </p>
          </div>
          <div className={`${classes.card} ${classes.card4}`}>
            <h3>Zajęcia Dodatkowe</h3>
            <p>
              Oprócz standardowych zajęć, nasz żłobek w Krakowie oferuje
              różnorodne zajęcia dodatkowe, które umożliwiają dzieciom
              rozwijanie swoich zainteresowań w specyficznych dziedzinach.
              Obejmuje to naukę języków obcych, taniec, sport oraz naukę przez
              zabawę, co pozwala maluchom odkrywać nowe pasje i umiejętności w
              przyjaznym i wspierającym środowisku.
            </p>
          </div>
        </div>
      </div>
      <Places background="true" />
    </>
  );
}
