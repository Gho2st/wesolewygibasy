"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Nowa funkcja do zamykania menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={classes.back}>
        <div className={classes.logoContainer}>
          <Link className={classes.logo} href={"/"}>
            <Image
              src={"/others/zlobek-wesole-wygibasy-krakow-logo.png"}
              width={140}
              height={85}
              alt="Loga z małpkami Żłobka Wesołe Wygibasy w Krakowie"
            ></Image>
          </Link>
        </div>
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
                <Link
                  className={classes.navigation__link}
                  href={"/"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>01</span>
                  Strona Główna
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/galeria"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>02</span>
                  Galeria
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/cennik-i-jadlospis-w-zlobku"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>03</span>
                  Cennik & Jadłospis
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/plan-dnia-w-zlobku"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>04</span>
                  Plan dnia
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/adaptacja-w-zlobku"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>05</span>
                  Adaptacja
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/o-nas"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>06</span>O nas
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/informacje-dla-rodzicow"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>07</span>
                  Informacje
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  className={classes.navigation__link}
                  href={"/zapisy"}
                  onClick={closeMenu} // Dodano zamykanie menu
                >
                  <span>08</span>
                  Zapisy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
