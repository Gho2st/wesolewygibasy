"use client";
import classes from "./FoodContainer.module.css";
import FoodItemTable from "./FoodItemTable";
import TableWithoutMilk from "./TableWithoutMilk";
import WegeTable from "./WegeTable";
import { useState } from "react";

export default function FoodContainer() {
  const [isWegeVisible, setIsWegeVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMilkVisible, setIsMilkVisible] = useState(false);

  function showStandardMenu() {
    setIsMenuVisible(true);
    setIsWegeVisible(false);
    setIsMilkVisible(false);
  }

  function showWegeMenu() {
    setIsMenuVisible(false);
    setIsWegeVisible(true);
    setIsMilkVisible(false);
  }

  function showMenuWithoutMilk() {
    setIsMenuVisible(false);
    setIsWegeVisible(false);
    setIsMilkVisible(true);
  }

  return (
    <div className={classes.foodContainer}>
      <h2 className={classes.header}>
        Jadłospis - Zdrowe Odżywianie w Żłobku Wesołe Wygibasy w Krakowie
      </h2>
      <p>
        W żłobku Wesołe Wygibasy w Krakowie szczególną uwagę przykładamy do
        zdrowego odżywiania dzieci. Oferujemy starannie zaprojektowany
        jadłospis, który uwzględnia potrzeby żywieniowe najmłodszych,
        zapewniając im odpowiednią ilość składników odżywczych na każdy dzień.
        Naszym celem jest budowanie dobrych nawyków żywieniowych już od
        najmłodszych lat. <br></br>
        <br></br> Każdy posiłek w naszym żłobku w Krakowie jest przygotowywany z
        myślą o zdrowiu i rozwoju dzieci, z uwzględnieniem różnorodności i
        smaku. Wierzymy, że właściwe odżywianie to klucz do zdrowego wzrostu i
        energii na cały dzień pełen zabawy i nauki.
      </p>
      <div className={classes.container}>
        <div className={classes.option} onClick={showStandardMenu}>
          MENU STANDARDOWE
        </div>
        <div className={classes.option} onClick={showWegeMenu}>
          MENU WEGE
        </div>
        <div className={classes.option} onClick={showMenuWithoutMilk}>
          MENU BEZ NABIAŁU
        </div>
      </div>
      {isMenuVisible && <FoodItemTable />}
      {isWegeVisible && <WegeTable />}
      {isMilkVisible && <TableWithoutMilk />}
    </div>
  );
}
