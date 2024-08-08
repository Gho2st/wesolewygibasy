"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={classes.navigation}>
      <div className={classes.navigation__button} onClick={toggleMenu}>
        {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
      <div
        className={`${classes.navigation__background} ${
          menuOpen ? classes.navigation__background_open : ""
        }`}
      ></div>
      <nav
        className={`${classes.navigation__nav} ${
          menuOpen ? classes.navigation__nav_open : ""
        }`}
      >
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/"}>
              <span>01</span>
              Strona Główna
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/galeria"}>
              <span>02</span>
              Galeria
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link
              className={classes.navigation__link}
              href={"/cennik-i-jadlospis-w-zlobku"}
            >
              <span>03</span>
              Cennik & Jadłospis
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link
              className={classes.navigation__link}
              href={"/plan-dnia-w-zlobku"}
            >
              <span>04</span>
              Plan dnia
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link
              className={classes.navigation__link}
              href={"/jak-przebiega-adaptacja-w-zlobku"}
            >
              <span>05</span>
              Adaptacja
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/o-nas"}>
              <span>06</span>O nas
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link
              className={classes.navigation__link}
              href={"/informacje-dla-rodzicow"}
            >
              <span>07</span>
              Informacje
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link
              className={classes.navigation__link}
              href={"/zapisy-i-formularz-kontaktowy"}
            >
              <span>08</span>
              Zapisy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
