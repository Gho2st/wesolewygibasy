"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { usePathname } from "next/navigation";

import classes from "./Navigation.module.css";

export default function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Sprawdzamy, czy to strona główna
  const isHomePage = pathname === "/";
  return (
    <header>
      <div
        className={classes.nav__container}
        style={{ background: isHomePage ? "#c7eeff" : "white" }}
      >
        <div className={classes.logoContainer}>
          <Link href={"/"}>
            <Image
              src={"/others/logo.png"}
              width={110}
              height={65}
              alt="Logo Wesołych Wygibasów"
              className={classes.logo}
            />
          </Link>
        </div>

        <div className={classes.navigation}>
          <div
            className={classes.navigation__button}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
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
                  href={"/"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>01</span>
                  Strona Główna
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/galeria"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>02</span>
                  Galeria
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/zlobki"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>03</span>
                  Żłobki
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/cennik-i-jadlospis-w-zlobku"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>04</span>
                  Cennik & Jadłospis
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/plan-dnia-w-zlobku"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>05</span>
                  Plan dnia
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/adaptacja-w-zlobku"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>06</span>
                  Adaptacja
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/o-nas"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>07</span>O nas
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/informacje-dla-rodzicow"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>08</span>
                  Informacje
                </Link>
              </li>
              <li className={classes.navigation__item}>
                <Link
                  href={"/zapisy"}
                  className={classes.navigation__link}
                  onClick={closeMenu}
                >
                  <span>09</span>
                  Zapisy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
