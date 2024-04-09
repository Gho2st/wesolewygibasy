"use client";
import Link from "next/link";
import Button from "./Button";
import classes from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
  function clickHandler() {
    setIsBurgerMenuVisible(!isBurgerMenuVisible);
    console.log(isBurgerMenuVisible);
  }

  function hideMenu() {
    setIsBurgerMenuVisible(false);
  }
  return (
    <>
      <nav>
        <div className={classes.navContainer}>
          <Link href="/">
            <div className={classes.logoContainer}>
              <Image src={"/others/logo.png"} width={130} height={75} alt="logo"></Image>
            </div>
          </Link>
          <div className={classes.burgerContainer}>
            <RxHamburgerMenu
              onClick={clickHandler}
              className={classes.burgerMenu}
            />
          </div>
          {!isBurgerMenuVisible && (
            <ul className={classes.listContainer}>
              <li>
                <Link href="/">Strona Główna</Link>
              </li>
              <li>
                <Link href="/galeria">Galeria</Link>
              </li>
              <li>
                <Link href="/cennik">Cennik & Jadłospis</Link>
              </li>
              <li>
                <Link href="/plan-dnia">Plan Dnia</Link>
              </li>
              <li>
                <Link href="/adaptacja">Adaptacja</Link>
              </li>
              <li>
                <Link href="/o-nas">O nas</Link>
              </li>
              <li>
                <Link href="/informacje">Informacje</Link>
              </li>
            </ul>
          )}

          {!isBurgerMenuVisible && (
            <div className={classes.buttonContainer}>
              <Link href="/zapisy">
                <Button text="Zapisy" fontSize="1rem" />
              </Link>
            </div>
          )}
        </div>
        {isBurgerMenuVisible && (
          <div className={classes.mobileMenu}>
            <ul className={classes.listContainerMobile}>
              <li>
                <Link href="/">Strona Główna</Link>
              </li>
              <li>
                <Link href="/galeria">Galeria</Link>
              </li>
              <li>
                <Link href="/cennik">Cennik & Jadłospis</Link>
              </li>
              <li>
                <Link href="/plan-dnia">Plan Dnia</Link>
              </li>
              <li>
                <Link href="/adaptacja">Adaptacja</Link>
              </li>
              <li>
                <Link href="/o-nas">O nas</Link>
              </li>
              <li>
                <Link href="/informacje">Informacje</Link>
              </li>
            </ul>
            <Link href="/zapisy" className={classes.buttonMobile}>
              <Button text="Zapisy" fontSize="1.5rem" />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
