import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import Button from "@/components/UI/Button";
import Link from "next/link";
import Adaptacja from "./adaptacja";
import { FaLongArrowAltRight } from "react-icons/fa";

export const metadata = {
  title: "Adaptacja w Żłobku - Wesołe Wygibasy",
  alternates: {
    canonical: "/adaptacja-w-zlobku",
  },
  keywords:
    "adaptacja w Żłobku, jak przebiega adaptacja, wprowadzenie dziecka, opieka",
  description:
    "Dowiedz się, jak przebiega adaptacja w żłobku Wesołe Wygibasy w Krakowie. Wspieramy dzieci i rodziców w procesie łagodnego wejścia do nowego środowiska.",
};
export default function adaptacja() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Proces Adaptacji w Żłobku Wesołe Wygibasy w Krakowie" />
        <Adaptacja />
      </div>
      <div className={classes.cloudContainer}>
        <div className={classes.head}>
          <h3>Szczęśliwe dzieciństwo zaczyna się tutaj</h3>
          <p>
            Naszym celem jest zapewnienie spokojnego i bezstresowego przejścia
            do nowego środowiska, co pozwoli dziecku na naturalny rozwój w
            bezpiecznym i wspierającym miejscu.
          </p>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <Image
              src={
                "https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/6.jpg"
              }
              width={200}
              height={200}
            ></Image>
            <div className={classes.cardText}>
              <h4>Zaangażowanie rodziców</h4>
              <p>
                Zaangażowanie Rodziców: Adaptacja zaczyna się od Państwa. Jeśli
                decydujecie się Państwo zapisać dziecko do żłobka, ważne jest,
                aby być pewnym tej decyzji. <br></br> <br></br> Proszę obdarzyć
                nas zaufaniem i pamiętać, że nasze ciocie i my jesteśmy tu, aby
                Państwa dziecko było szczęśliwe i dobrze zaopiekowane. Pozytywne
                nastawienie rodziców ma ogromny wpływ na samopoczucie dziecka.
              </p>
            </div>
            <Link href="/galeria">Galeria</Link>
          </div>
          <div className={classes.card}>
            <Image
              src={
                "https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/16.jpg"
              }
              width={200}
              height={200}
            ></Image>
            <div className={classes.cardText}>
              <h4>Personalizacja procesu</h4>
              <p>
                Adaptacja jest sprawą bardzo indywidualną. Dzieci reagują na
                różne sposoby — niektóre mogą nie potrzebować adaptacji, podczas
                gdy inne mogą wymagać dodatkowego czasu. <br></br> <br></br> W
                przypadku, gdy dziecko potrzebuje więcej czasu, prosimy rodziców
                o stopniowe wydłużanie pobytu w żłobku, o 2 godziny dziennie w
                pierwszym tygodniu.
              </p>
            </div>
            <Link href="/o-nas">O nas</Link>
          </div>
          <div className={classes.card}>
            <Image
              src={
                "https://wesolewygibasy.s3.eu-central-1.amazonaws.com/sliczna/adaptacja/adaptacja.jpg"
              }
              width={200}
              height={200}
            ></Image>
            <div className={classes.cardText}>
              <h4>Wsparcie rodziny</h4>
              <p>
                Jeśli to możliwe, warto, aby w adaptacji brało udział dwóch
                rodziców lub inny członek rodziny. Pomaga to dziecku w
                łatwiejszym przejściu do żłobka i szybciej przystosować się do
                nowego środowiska. <br></br> <br></br> Żłobek Wesołe Wygibasy w
                Krakowie to druga rodzina!
              </p>
            </div>
            <Link href="/zapisy">Zapisy</Link>
          </div>
        </div>
        <div className={classes.head}>
          <h3>Plan Adaptacji</h3>
          <p>
            Adaptację rozpoczynamy zazwyczaj miesiąc lub 2 tygodnie przed
            planowanym przyjęciem dziecka do żłobka. Spotkania adaptacyjne
            odbywają się w godzinach <strong> 7:00-8:30 lub 14:30-16:00</strong>
            , kiedy w żłobku jest mniej dzieci, co ułatwia nowe dzieciakom
            wchodzenie w grupę.
          </p>
        </div>
        <div className={classes.planContainer}>
          <div className={classes.planCard}>
            <strong>1</strong>
            <h4>Spotkanie 1</h4>
            <p>
              Rodzic przychodzi z dzieckiem i pozostaje obecny na sali,
              umożliwiając dziecku zapoznanie się z salą, zabawkami i obserwację
              innych dzieci. Ten dzień traktujemy jako czas obserwacji, bez
              nawiązywania jeszcze relacji z opiekunkami.
            </p>
            <FaLongArrowAltRight className={classes.arrow} />
          </div>

          <div className={classes.planCard}>
            <strong>2-4</strong>
            <h4>Spotkania 2-4:</h4>
            <p>
              Rodzic nadal jest obecny, ale pozwala dziecku na większą
              samodzielność. Opiekunki stopniowo budują więź z dzieckiem,
              proponując wspólne zabawy i zachęcając do interakcji z innymi
              maluchami.
            </p>
            <FaLongArrowAltRight className={classes.arrow} />
          </div>
          <div className={classes.planCard}>
            <strong>5-6</strong>
            <h4>Spotkania 5-6:</h4>
            <p>
              Rodzic zaczyna powoli wycofywać się z sali i czeka w sali obok lub
              na zewnątrz, będąc dostępnym telefonicznie w razie potrzeby.
            </p>
            <FaLongArrowAltRight className={classes.arrow} />
          </div>
          <div className={classes.planCard}>
            <strong>7-8</strong>
            <h4>Spotkania 7-8:</h4>
            <p>
              Dziecko zostaje w żłobku samo na 1,5 godziny, a rodzic odbiera je
              po tym czasie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
