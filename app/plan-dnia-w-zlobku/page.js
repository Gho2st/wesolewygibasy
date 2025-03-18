import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import { Metadata } from "next";
import Header from "@/components/UI/Header";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
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
      <main>
        <section>
          <div className={classes.container}>
            <Header text="Plan dnia w Żłobku Wesołe Wygibasy Kraków" />
            <div className={classes.banerContainer}>
              <div className={classes.text}>
                <p>Zobacz. I zapisz dziecko.</p>
                <h2>
                  Zrównoważony Harmonogram Dnia w Żłobku Wesołe Wygibasy w
                  Krakowie
                </h2>
                <p>
                  Żłobek Wesołe Wygibasy w Krakowie to miejsce, gdzie edukacja,
                  zabawa i rozwój dziecka idą w parze. Nasz plan dnia w żłobku
                  jest tak zaprojektowany, aby maluchy mogły korzystać z
                  różnorodnych zajęć dostosowanych do ich potrzeb, jednocześnie
                  rozwijając umiejętności intelektualne, społeczne, emocjonalne
                  i fizyczne. Rodzice mogą być pewni, że ich dzieci są w dobrych
                  rękach, a nasza opieka skupia się na wszechstronnym rozwoju
                  każdego malucha.
                </p>
                <div className={classes.buttonContainer}>
                  <Button text="Zapisy" href="/zapisy" />
                  <Button2 text="Sprawdź plan" href="#placowki" />
                </div>
              </div>
              <div className={classes.imageContainer}>
                <Image
                  src={"/plan-dnia/plan-dnia.webp"}
                  width={100}
                  height={100}
                  layout={"responsive"}
                  alt="Plan dnia w Żłobku Wesołe Wygibasy Kraków - zajęcia dla dzieci"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={classes.cloudContainer}>
            <div className={classes.head}>
              <h2>Zajęcia i Aktywności w Żłobku Wesołe Wygibasy - Kraków</h2>
              <p>
                Nasz żłobek oferuje starannie opracowany, harmonijnie ułożony
                plan dnia, który zapewnia dzieciom idealne połączenie edukacji,
                zabawy oraz czasu na regenerację i odpoczynek. Każdego dnia
                dbamy o to, aby aktywności były dostosowane do indywidualnych
                potrzeb oraz rytmu rozwojowego maluchów. Dzięki temu dzieci mają
                możliwość rozwijania swoich umiejętności poznawczych,
                artystycznych i fizycznych, a jednocześnie zyskują czas na
                swobodną zabawę oraz chwilę wytchnienia. Nasz plan dnia został
                zaprojektowany tak, aby każdy jego element wspierał
                wszechstronny rozwój dziecka w bezpiecznym i stymulującym
                środowisku.
              </p>
            </div>
            <div className={classes.cardContainer}>
              <div className={`${classes.card} ${classes.card1}`}>
                <h3>Zajęcia Edukacyjne w Żłobku Wesołe Wygibasy</h3>
                <p>
                  W czasie zajęć edukacyjnych stawiamy na rozwój poznawczy i
                  kształcenie umiejętności niezbędnych w dalszej edukacji. Nasze
                  programy są dostosowane do wieku i możliwości dzieci, co
                  pozwala na indywidualne podejście do każdego malucha. Edukacja
                  przedszkolna w naszym żłobku to nie tylko zabawa, ale także
                  nauka nowych pojęć, rozwijanie umiejętności logicznego
                  myślenia oraz przygotowanie do przyszłej edukacji w
                  przedszkolu.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card2}`}>
                <h3>Zajęcia Artystyczne: Rozwój Kreatywności i Ekspresji</h3>
                <p>
                  Zajęcia artystyczne, takie jak malowanie, rysowanie czy prace
                  manualne, są nieodłącznym elementem dnia w żłobku. Rozwijają
                  one kreatywność, wyobraźnię oraz zdolności manualne dzieci.
                  Dzięki temu maluchy mogą wyrażać swoje emocje i pomysły
                  poprzez sztukę, co jest niezwykle ważne dla ich rozwoju
                  emocjonalnego i społecznego.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card3}`}>
                <h3>Ruch to zdrowie! Jak dbamy o aktywność dzieci?</h3>
                <p>
                  Aktywność fizyczna jest kluczowa dla prawidłowego rozwoju
                  dziecka. W naszym żłobku oferujemy zajęcia ruchowe, które
                  pomagają dzieciom rozwijać koordynację ruchową, zwinność i
                  zdrowe nawyki. Dzieci uczestniczą w zabawach ruchowych, tańcu
                  oraz grach zespołowych, co wspiera ich rozwój fizyczny i
                  pozwala im wyładować nadmiar energii w sposób konstruktywny.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card4}`}>
                <h3>Zajęcia Muzyczne i Taneczne</h3>
                <p>
                  W ramach zajęć dodatkowych organizujemy również zajęcia
                  muzyczne i taneczne. Dzięki temu dzieci rozwijają wrażliwość
                  muzyczną, uczą się rytmu i koordynacji. Muzyka stymuluje
                  rozwój intelektualny oraz emocjonalny, wpływając korzystnie na
                  samopoczucie maluchów. Dodatkowo, taniec pozwala dzieciom na
                  spontaniczną ekspresję oraz poprawę zdolności motorycznych.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card5}`}>
                <h3>Dodatkowe Aktywności w Żłobku: Odkrywanie Pasji</h3>
                <p>
                  Oprócz standardowych zajęć, oferujemy również dodatkowe
                  aktywności, które wspierają odkrywanie indywidualnych pasji i
                  zainteresowań dzieci. W ramach tych zajęć proponujemy naukę
                  języków obcych, warsztaty kulinarne oraz zajęcia sportowe. To
                  doskonała okazja, aby dzieci mogły rozwijać swoje talenty w
                  przyjaznym i wspierającym środowisku, co z pewnością zaowocuje
                  w ich dalszym rozwoju.
                </p>
              </div>
              <div className={`${classes.card} ${classes.card6}`}>
                <h3>Posiłki i odpoczynek w naszym żłobku</h3>
                <p>
                  Posiłki w naszym żłobku są starannie planowane i
                  przygotowywane, aby dostarczać dzieciom wszystkich niezbędnych
                  składników odżywczych, wspomagających ich prawidłowy rozwój.
                  Każdy posiłek jest zbilansowany i dostosowany do potrzeb
                  najmłodszych, z uwzględnieniem indywidualnych wymagań
                  dietetycznych, alergii i preferencji.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Places background="true" />
      </main>
    </>
  );
}
