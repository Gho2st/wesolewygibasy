"use client";
import classes from "./page.module.css";
import Second from "./Second";
import { useState } from "react";
import Others from "./Others";
import FoodContainer from "./food/FoodContainer";
import Header from "@/components/UI/Header";
import Link from "next/link";

export default function Pricing() {
  const [isSecondVisible, setIsSecondVisible] = useState(true);
  const [isOthersVisible, setIsOthersVisible] = useState(false);

  return (
    <>
      <main>
        <div className={classes.textContainer}>
          <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />
          <div className={classes.description}>
            <p>
              Zapraszamy do zapoznania się z naszym cennikiem dla żłobka Wesołe
              Wygibasy w Krakowie. Znajdą Państwo tutaj szczegółowe informacje
              na temat pełnej kwoty abonamentu, liczby dni roboczych,
              miesięcznej dotacji oraz jadłospisu. Nasz żłobek w Krakowie
              oferuje konkurencyjne ceny, które obejmują wszystko, czego
              potrzebują Państwa dzieci do bezpiecznej i kreatywnej nauki oraz
              zabawy. Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę
              na najwyższym poziomie w przystępnych cenach. Dbamy o to, aby
              każdy dzień w naszym żłobku był pełen radości, nauki i zdrowego
              rozwoju.
            </p>
            <Link href={"/plan-dnia-w-zlobku"}>
              Zobacz jak wygląda plan dnia w naszym żłobku
            </Link>
            <p>
              W dniu zawarcia umowy Rodzic/Opiekun Prawny zobowiązany jest do
              wniesienia opłaty wpisowej (administracyjnej) w wysokości 600,00
              zł (słownie: sześćset złotych). Opłata ta obejmuje:
            </p>
            <ul>
              <li>
                koszt zakupu podstawowych pomocy dydaktycznych, edukacyjnych i
                plastycznych
              </li>
              <li>
                koszt zakupu niezbędnych przedmiotów osobistych dla Dziecka na
                czas pobytu w żłobku (mokre chusteczki, ręcznik papierowy,
                nocnik itp.)
              </li>
              <li>
                koszt zakupu prezentów okolicznościowych (Mikołajki, Dzień
                Dziecka, Urodziny Dziecka).
              </li>
              <li>Zakup pościeli dla dziecka.</li>
            </ul>
            <p>
              W przypadku dodatkowych pytań lub wątpliwości zapraszamy do
              kontaktu z naszą placówką – chętnie udzielimy wszelkich
              informacji.
            </p>
          </div>
        </div>
        <div className={classes.pricingContainer}>
          <h2
            className={classes.pickMe}
            onClick={() => {
              setIsSecondVisible(!isSecondVisible);
            }}
          >
            Żłobki ul. Śliczna & ul. Stańczyka - Czesne 0zł
          </h2>
          {isSecondVisible && <Second />}
          <h2
            className={classes.pickMe}
            onClick={() => {
              setIsOthersVisible(!isOthersVisible);
            }}
          >
            Żłobki ul. Vetulaniego & ul. Glogera
          </h2>
          {isOthersVisible && <Others />}
        </div>

        <FoodContainer />
      </main>
    </>
  );
}
