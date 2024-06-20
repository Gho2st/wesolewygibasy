"use client";
import Image from "next/image";
import classes from "./page.module.css";
import Stanczyka from "./Stanczyka";
import { useState } from "react";
import Others from "./Others";
import FoodContainer from "./FoodContainer";
import { IoCaretDownOutline } from "react-icons/io5";

export default function Pricing() {
  const [isStanczykaVisible, setIsStanczykaVisible] = useState(true);
  const [isOthersVisible, setIsOthersVisible] = useState(false);

  return (
    <>
      <div className={classes.pricingContainer}>
        <h1 className={classes.header}>Cennik</h1>
        <p className={classes.description}>
          Zapraszamy do zapoznania się z naszym cennikiem, gdzie znajdą Państwo
          szczegółowe informacje na temat pełnej kwoty abonamentu, liczby dni
          roboczych, dotacji miesięcznej i jadłospisu. Jesteśmy tu, aby zapewnić
          Państwa dzieciom bezpieczne i kreatywne miejsce do nauki i zabawy.
        </p>
        <h2
          className={classes.pickMe}
          onClick={() => {
            setIsStanczykaVisible(!isStanczykaVisible);
          }}
        >
          Żłobek ul. Stańczyka
          <span>CZESNE 0 ZŁ</span>
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
