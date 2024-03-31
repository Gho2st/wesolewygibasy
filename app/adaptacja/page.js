import Footer from "@/components/UI/Footer";
import H1 from "@/components/UI/H1";
import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Image from "next/image";
export default function adaptacja() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <H1 text="Adaptacja" />
        {/* <div className={classes.imageContainer}>
          <Image
            src={"/others/adaptacja.png"}
            width={100}
            height={100}
            layout="responsive"
          />
        </div> */}
        <p>
          Adaptacja jest w moim pedagogicznym podejściu do opieki nad dziećmi
          tematem bardzo istotnym. Tak naprawdę to nie wyobrażam sobie aby tej
          adaptacji zabrakło. Krótszej lub dłuższej ale jednak.
        </p>
        <p>
          <span>Każdej rodzinie</span> zgłaszającej się do mnie z chęcią zapisu
          dziecka do żłobka proponuje
          <span> 8 bezpłatnych spotkań adaptacyjnych.</span> Nim opiszę Państwu
          cały proces adaptacyjny to 2 bardzo ważne uwagi.
        </p>
        <ul>
          <li>
            Adaptacje rodzice muszą zacząć od siebie. Jeśli decydujecie się
            Państwo zapisać dziecko do żłobka musicie być tego pewni! Zapisując
            dziecko do mojego żłobka, proszę aby obdarzyć mnie i ciocie
            opiekujące się dziećmi zaufaniem.
            <span>
              Jesteśmy po to aby Państwa dziecko było u nas szczęśliwe i dobrze
              zaopiekowane.
            </span>
            W końcu oddajecie w nasze ręce swój największy skarb, jest
            naturalnym ,że macie obawy. Proszę pamiętać, że dziecko widząc Wasze
            uśmiechnięte buzie i pozytywne nastawienie również takie ma
            odczucia. Tak więc przychodzimy na adaptację z uśmiechem na ustach i
            pewni nowej, wspaniałej przygody jaką fundujecie dziecku.
          </li>
          <li>
            Wiadomo ,że dziecko zawsze silniej jest związane z jednym rodzicem i
            zazwyczaj jest to mama. Widzimy jak bardzo sprawdza się gdy w miarę
            możliwości w adaptacji bierze udział 2 rodzic lub inny członek
            rodziny. Dziecku wówczas o wiele łatwiej jest przejść proces
            adaptacji i pierwsze dni w żłobku.
          </li>
        </ul>
        <p>
          Adaptacje rozpoczynamy zazwyczaj miesiąc lub 2 tygodnie przed
          planowanym przyjęciem dziecka do żłobka. Spotkania adaptacyjne
          odbywają się w godzinach 7:00-8:30 lub 14:30-16:00. W tych godzinach
          jest mniej dzieci chodzących do żłobka i nowym dzieciom jest łatwiej
          wchodzić w grupę.
        </p>
        <p>
          Godziny adaptacje są dla państwa do wyboru. Dobrze jest gdy czasem
          przychodzicie Państwo rano, a czasem po południu.
        </p>
        <h2>1 Spotkanie</h2>
        <p>
          Rodzic przychodzi z dzieckiem i jest obecny na sali wraz z innymi
          dziećmi i z ciociami. W tym pierwszym dniu pozwalamy dziecko zapoznać
          się z salą, zabawkami, pooglądać jak bawią się dzieci. Ten dzień
          traktujemy jako obserwacje, opiekunki nie nawiązują jeszcze relacji z
          dzieckiem.
        </p>
        <h2>2-4 Spotkanie</h2>
        <p>
          Rodzic wciąż jest obecny na sali lecz pozwala dziecku na
          samodzielność. Ciocie powoli budują więź z dzieckiem, proponują
          wspólne zabawy i zachęcają do kontaktu z innymi dziećmi.
        </p>
        <h2>5-6 Spotkanie</h2>
        <p>
          Rodzic powoli wycofuje się z sali i czeka w sali obok lub wychodzi ze
          żłobka ale jest pod telefonem i może zostać wezwany przez opiekunkę
          gdy jest taka potrzeba.
        </p>
        <h2>2-4 Spotkanie</h2>
        <p>
          Dziecko zostaje w żłobku samo i rodzic odbiera je po 1,5 godziny{" "}
          <br></br> <br></br>Jest to proces adaptacji sprawdzony, pozwalający
          dziecku na spokojny i bezstresowy czas zapoznania się z nowym
          miejscem.<br></br>
          <br></br> Adaptacja jest sprawą bardzo indywidualną. Zdarzają się
          dzieci, które wcale tej adaptacji nie potrzebują, są gotowe, odważne i
          spragnione zabawy z innymi dziećmi.<br></br>
          <br></br>Są również dzieci dla których nawet te 8 spotkań jest za
          mało. Wówczas prosimy rodziców aby pierwszy tydzień stałego pobytu
          dziecka w żłobku dziecko mogło powoli wchodzić w grupę, codziennie
          przedłużając pobyt o 2 godz.
        </p>
      </div>
      <Footer />
    </>
  );
}
