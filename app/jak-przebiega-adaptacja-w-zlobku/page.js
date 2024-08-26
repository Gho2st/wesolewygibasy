import H1 from "@/components/UI/H1";
import classes from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata = {
  title: "Adaptacja",
  alternates: {
    canonical: "/jak-przebiega-adaptacja-w-zlobku",
  },
};
export default function adaptacja() {
  return (
    <>
      <div className={classes.container}>
        <H1 text="Proces Adaptacji w Żłobku Wesołe Wygibasy w Krakowie" />
        <p>
          Adaptacja w żłobku to kluczowy element naszego pedagogicznego
          podejścia do opieki nad dziećmi w żłobku Wesołe Wygibasy w Krakowie.
          Rozumiemy, jak ważny jest komfort i bezpieczeństwo maluchów w nowym
          środowisku, dlatego oferujemy 8 bezpłatnych spotkań adaptacyjnych, aby
          ułatwić dziecku i rodzicom ten ważny krok.
        </p>
        <h2>Ważne Uwagi Przed Rozpoczęciem Adaptacji:</h2>
        <ul>
          <li>
            Zaangażowanie Rodziców: Adaptacja zaczyna się od Państwa. Jeśli
            decydujecie się Państwo zapisać dziecko do żłobka, ważne jest, aby
            być pewnym tej decyzji. Proszę obdarzyć nas zaufaniem i pamiętać, że
            nasze ciocie i my jesteśmy tu, aby Państwa dziecko było szczęśliwe i
            dobrze zaopiekowane. Pozytywne nastawienie rodziców ma ogromny wpływ
            na samopoczucie dziecka.
          </li>
          <li>
            Wsparcie Rodziny: Jeśli to możliwe, warto, aby w adaptacji brało
            udział dwóch rodziców lub inny członek rodziny. Pomaga to dziecku w
            łatwiejszym przejściu do żłobka i szybciej przystosować się do
            nowego środowiska.
          </li>
        </ul>
        <h2>Plan Adaptacji:</h2>
        <p>
          Adaptację rozpoczynamy zazwyczaj miesiąc lub 2 tygodnie przed
          planowanym przyjęciem dziecka do żłobka. Spotkania adaptacyjne
          odbywają się w godzinach 7:00-8:30 lub 14:30-16:00, kiedy w żłobku
          jest mniej dzieci, co ułatwia nowe dzieciakom wchodzenie w grupę.
        </p>
        <ul>
          <li>
            Spotkanie 1: Rodzic przychodzi z dzieckiem i pozostaje obecny na
            sali, umożliwiając dziecku zapoznanie się z salą, zabawkami i
            obserwację innych dzieci. Ten dzień traktujemy jako czas obserwacji,
            bez nawiązywania jeszcze relacji z opiekunkami.
          </li>
          <li>
            Spotkania 2-4: Rodzic nadal jest obecny, ale pozwala dziecku na
            większą samodzielność. Opiekunki stopniowo budują więź z dzieckiem,
            proponując wspólne zabawy i zachęcając do interakcji z innymi
            maluchami.
          </li>
          <li>
            Spotkania 5-6: Rodzic zaczyna powoli wycofywać się z sali i czeka w
            sali obok lub na zewnątrz, będąc dostępnym telefonicznie w razie
            potrzeby.
          </li>
          <li>
            Spotkania 7-8: Dziecko zostaje w żłobku samo na 1,5 godziny, a
            rodzic odbiera je po tym czasie.
          </li>
        </ul>
        <h2>Personalizacja Procesu:</h2>
        <p>
          Adaptacja jest sprawą bardzo indywidualną. Dzieci reagują na różne
          sposoby — niektóre mogą nie potrzebować adaptacji, podczas gdy inne
          mogą wymagać dodatkowego czasu. W przypadku, gdy dziecko potrzebuje
          więcej czasu, prosimy rodziców o stopniowe wydłużanie pobytu w żłobku,
          o 2 godziny dziennie w pierwszym tygodniu.
        </p>
        <h2>Nasz Cel:</h2>
        <p>
          Naszym celem jest zapewnienie spokojnego i bezstresowego przejścia do
          nowego środowiska, co pozwoli dziecku na naturalny rozwój w
          bezpiecznym i wspierającym miejscu.
        </p>
      </div>
    </>
  );
}
