"use client";
import Image from "next/image";
import classes from "./page.module.css";
import Stanczyka from "./Stanczyka";
import Sliczna from "./Sliczna";
import { useState } from "react";
import Others from "./Others";
import FoodContainer from "./FoodContainer";
import { IoCaretDownOutline } from "react-icons/io5";
import Header from "@/components/UI/Header";

export default function Pricing() {
  const [isStanczykaVisible, setIsStanczykaVisible] = useState(false);
  const [isSlicznaVisible, setIsSlicznaVisible] = useState(true);
  const [isOthersVisible, setIsOthersVisible] = useState(false);

  return (
    <>
      <div className={classes.pricingContainer}>
        <Header text="Cennik - Żłobek Wesołe Wygibasy w Krakowie" />
        <p className={classes.description}>
          Zapraszamy do zapoznania się z naszym cennikiem dla żłobka Wesołe
          Wygibasy w Krakowie. Znajdą Państwo tutaj szczegółowe informacje na
          temat pełnej kwoty abonamentu, liczby dni roboczych, miesięcznej
          dotacji oraz jadłospisu. Nasz żłobek w Krakowie oferuje konkurencyjne
          ceny, które obejmują wszystko, czego potrzebują Państwa dzieci do
          bezpiecznej i kreatywnej nauki oraz zabawy. <br></br> <br></br>{" "}
          Jesteśmy dumni, że możemy zapewnić Państwa maluchom opiekę na
          najwyższym poziomie w przystępnych cenach. Dbamy o to, aby każdy dzień
          w naszym żłobku był pełen radości, nauki i zdrowego rozwoju.
        </p>
        <h2
          className={classes.pickMe}
          onClick={() => {
            setIsSlicznaVisible(!isSlicznaVisible);
          }}
        >
          Żłobek ul. Śliczna <IoCaretDownOutline />
        </h2>
        {isSlicznaVisible && <Sliczna />}

        <h2
          className={classes.pickMe}
          onClick={() => {
            setIsStanczykaVisible(!isStanczykaVisible);
          }}
        >
          Żłobek ul. Stańczyka <IoCaretDownOutline />
        </h2>
        {isStanczykaVisible && <Stanczyka />}
        <h2
          className={classes.pickMe}
          onClick={() => {
            setIsOthersVisible(!isOthersVisible);
          }}
        >
          Żłobek ul. Vetulaniego & ul. Glogera <IoCaretDownOutline />
        </h2>
        {isOthersVisible && <Others />}
      </div>
      <FoodContainer />
    </>
  );
}
