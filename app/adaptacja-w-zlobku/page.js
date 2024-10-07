import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
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
      <main>
        <section>
          <div className={classes.container}>
            <Header text="Proces Adaptacji w Żłobku Wesołe Wygibasy w Krakowie" />
            <Adaptacja />
          </div>
        </section>
        <section>
          <div className={classes.cloudContainer}>
            <div className={classes.head}>
              <h3>Szczęśliwe dzieciństwo zaczyna się tutaj</h3>
              <p>
                Naszym celem jest zapewnienie spokojnego i bezstresowego
                przejścia do nowego środowiska, co pozwoli dziecku na naturalny
                rozwój w bezpiecznym i wspierającym miejscu.
              </p>
            </div>
            <div className={classes.cardContainer}>
              <div className={classes.card}>
                <article>
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
                      Zaangażowanie Rodziców: Adaptacja zaczyna się od Państwa.
                      Jeśli decydujecie się Państwo zapisać dziecko do żłobka,
                      ważne jest, aby być pewnym tej decyzji. <br></br>{" "}
                      <br></br> Proszę obdarzyć nas zaufaniem i pamiętać, że
                      nasze ciocie i my jesteśmy tu, aby Państwa dziecko było
                      szczęśliwe i dobrze zaopiekowane. Pozytywne nastawienie
                      rodziców ma ogromny wpływ na samopoczucie dziecka.
                    </p>
                  </div>
                  <Link href="/galeria">Galeria</Link>
                </article>
              </div>
              <div className={classes.card}>
                <article>
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
                      Adaptacja jest sprawą bardzo indywidualną. Dzieci reagują
                      na różne sposoby — niektóre mogą nie potrzebować
                      adaptacji, podczas gdy inne mogą wymagać dodatkowego
                      czasu. <br></br> <br></br> W przypadku, gdy dziecko
                      potrzebuje więcej czasu, prosimy rodziców o stopniowe
                      wydłużanie pobytu w żłobku, o 2 godziny dziennie w
                      pierwszym tygodniu.
                    </p>
                  </div>
                  <Link href="/o-nas">O nas</Link>
                </article>
              </div>
              <div className={classes.card}>
                <article>
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
                      Jeśli to możliwe, warto, aby w adaptacji brało udział
                      dwóch rodziców lub inny członek rodziny. Pomaga to dziecku
                      w łatwiejszym przejściu do żłobka i szybciej przystosować
                      się do nowego środowiska. <br></br> <br></br> Żłobek
                      Wesołe Wygibasy w Krakowie to druga rodzina!
                    </p>
                  </div>
                  <Link href="/zapisy">Zapisy</Link>
                </article>
              </div>
            </div>

            <div className={classes.head}>
              <h3>Plan Adaptacji</h3>
              <p>
                Adaptację rozpoczynamy zazwyczaj miesiąc lub 2 tygodnie przed
                planowanym przyjęciem dziecka do żłobka. Spotkania adaptacyjne
                odbywają się w godzinach
                <strong> 7:00-8:30 lub 14:30-16:00</strong>, kiedy w żłobku jest
                mniej dzieci, co ułatwia nowe dzieciakom wchodzenie w grupę.
              </p>
            </div>
            <div className={classes.planContainer}>
              <div className={classes.planCard}>
                <strong>1</strong>
                <h4>Spotkanie 1</h4>
                <p>
                  Rodzic przychodzi z dzieckiem i pozostaje obecny na sali,
                  umożliwiając dziecku zapoznanie się z salą, zabawkami i
                  obserwację innych dzieci. Ten dzień traktujemy jako czas
                  obserwacji, bez nawiązywania jeszcze relacji z opiekunkami.
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
                  Rodzic zaczyna powoli wycofywać się z sali i czeka w sali obok
                  lub na zewnątrz, będąc dostępnym telefonicznie w razie
                  potrzeby.
                </p>
                <FaLongArrowAltRight className={classes.arrow} />
              </div>
              <div className={classes.planCard}>
                <strong>7-8</strong>
                <h4>Spotkania 7-8:</h4>
                <p>
                  Dziecko zostaje w żłobku samo na 1,5 godziny, a rodzic odbiera
                  je po tym czasie.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={classes.textContainer}>
            <article>
              <h3>Zabawa jako narzędzie adaptacji</h3>
              <p>
                Zabawa jest najważniejszym elementem dnia w żłobku. W ramach
                adaptacji wykorzystujemy gry i zabawy integracyjne, które
                pomagają dzieciom w nawiązywaniu kontaktów z rówieśnikami oraz
                poznawaniu opiekunów. Dzięki zabawie dzieci łatwiej
                przystosowują się do nowego środowiska, a także rozwijają swoje
                umiejętności społeczne i emocjonalne.
              </p>
              <Link href="/galeria">Zobacz galerię</Link>
            </article>
            <article>
              <h3>Wsparcie Emocjonalne Dla Rodziców</h3>
              <p>
                Adaptacja to nie tylko ważny proces dla dziecka, ale również dla
                rodziców. Rozumiemy, że pozostawienie malucha w nowym miejscu
                może budzić wiele emocji i wątpliwości. Dlatego nasi opiekunowie
                są zawsze gotowi do rozmowy, oferując wsparcie i odpowiedzi na
                wszystkie pytania. Wspólnie budujemy zaufanie, które przekłada
                się na spokój i bezpieczeństwo Państwa dziecka.
              </p>
              <Link href="/o-nas">Poczytaj o Nas</Link>
            </article>
            <article>
              <h3>Tworzenie Przyjaznej i Wspierającej Atmosfery</h3>
              <p>
                Bezpieczne i przyjazne otoczenie to podstawa udanego procesu
                adaptacji. Wesołe Wygibasy to miejsce, w którym dzieci mogą
                poczuć się jak w domu. Dbamy o to, aby maluchy miały możliwość
                eksplorowania przestrzeni żłobka, zabawek i zajęć w tempie,
                które jest dla nich komfortowe. Naszym celem jest, aby każde
                dziecko zyskało poczucie, że żłobek to drugi dom.
              </p>
              <Link href="/informacje-dla-rodzicow">
                Informacje dla rodziców
              </Link>
            </article>
            <article>
              <h3>Korzyści Z Procesu Adaptacji</h3>
              <p>
                Adaptacja w żłobku to kluczowy moment w rozwoju dziecka, który
                przynosi wiele korzyści. Maluchy uczą się samodzielności,
                zdobywają nowe umiejętności społeczne i poznawcze, a także
                rozwijają swoje zainteresowania. Udział w zajęciach grupowych
                oraz indywidualnych pozwala na harmonijny rozwój w bezpiecznym i
                wspierającym otoczeniu.
              </p>
              <Link href="/zapisy">Zapisy do żłobka </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
