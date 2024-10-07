import classes from "./Maluch.module.css";
import Link from "next/link";
import Button from "./Button";
import Button2 from "./Button2";
import Image from "next/image";
export default function Maluch() {
  return (
    <section>
      <div className={classes.dotation}>
        <div className={classes.dotation__text}>
          <h2>
            Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz
            dotacji urzędu miasta Kraków
          </h2>
          <p>
            Nasz żłobek bierze udział w programie „Aktywny Maluch” (wcześniej
            znanym jako „Maluch Plus”), co oznacza, że czesne jest w pełni
            pokrywane dzięki wsparciu rządowemu oraz dotacjom od Urzędu Miasta
            Krakowa. To doskonała okazja, aby zapewnić swojemu dziecku
            profesjonalną opiekę, nie martwiąc się o dodatkowe koszty.
          </p>
          <p>
            Program ten został stworzony, aby ułatwić rodzicom godzenie
            obowiązków zawodowych z rodzicielstwem, jednocześnie zapewniając
            maluchom najlepsze warunki do rozwoju w bezpiecznym i przyjaznym
            środowisku. Dzięki dofinansowaniu, opłaty za żłobek są minimalne lub
            całkowicie zniesione, co czyni naszą ofertę jedną z najbardziej
            atrakcyjnych w Krakowie!
          </p>
          <p>
            Nie zwlekaj! Liczba miejsc w ramach dofinansowania jest ograniczona,
            dlatego zapisz swoje dziecko już dziś i skorzystaj z wyjątkowej
            oferty. Zapewnij swojemu maluchowi najlepszy start, a sobie spokój i
            pewność, że znajduje się pod opieką profesjonalistów.
          </p>
          <div className={classes.dotation__buttons}>
            <Button text="Cennik" href="/cennik-i-jadlospis-w-zlobku" />
            <Button2 text="Zapisy" href="/zapisy" />
          </div>
        </div>
        <Image
          src={"/others/maluch+.webp"}
          width={100}
          height={100}
          layout="responsive"
          alt="Logo programu rządowego Aktywny Maluch"
        />
      </div>
    </section>
  );
}
