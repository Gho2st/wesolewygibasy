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
      <h2 className={classes.header}>Jadłospis</h2>
      <p>
        Dbamy o zdrowe odżywianie dzieci i oferujemy starannie zaprojektowany
        jadłospis, który uwzględnia potrzeby żywieniowe najmłodszych. Naszym
        celem jest budowanie dobrych nawyków żywieniowych od najmłodszych lat.
      </p>
      <div className={classes.container}>
        <div className={classes.option} onClick={showStandardMenu}>MENU STANDARDOWE</div>
        <div className={classes.option} onClick={showWegeMenu}>MENU WEGE</div>
        <div className={classes.option} onClick={showMenuWithoutMilk}>MENU BEZ NABIAŁU</div>
      </div>
      {isMenuVisible && <FoodItemTable />}
      {isWegeVisible && <WegeTable />}
      {isMilkVisible && <TableWithoutMilk />}
    </div>
  );
}
