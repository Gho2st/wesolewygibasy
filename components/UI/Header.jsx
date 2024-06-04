"use client";
import Link from "next/link";
import Button from "./Button";
import classes from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Link href="/">
              <div className={classes.logoContainer}>
                <Image
                  src={"/others/logo.png"}
                  width={130}
                  height={85}
                  alt="logo"
                ></Image>
              </div>
            </Link>
          </motion.div>
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
                <Link href="/cennik-i-jadlospis-w-zlobku">
                  Cennik & Jadłospis
                </Link>
              </li>
              <li>
                <Link href="/plan-dnia-w-zlobku">Plan Dnia</Link>
              </li>
              <li>
                <Link href="/jak-przebiega-adaptacja-w-zlobku">Adaptacja</Link>
              </li>
              <li>
                <Link href="/o-nas">O nas</Link>
              </li>
              <li>
                <Link href="/informacje-dla-rodzicow">Informacje</Link>
              </li>
            </ul>
          )}

          {!isBurgerMenuVisible && (
            <div className={classes.buttonContainer}>
              <Link href="/zapisy-i-formularz-kontaktowy">
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
                <Link href="/cennik-i-jadlospis-w-zlobku">
                  Cennik & Jadłospis
                </Link>
              </li>
              <li>
                <Link href="/plan-dnia-w-zlobku">Plan Dnia</Link>
              </li>
              <li>
                <Link href="/jak-przebiega-adaptacja-w-zlobku">Adaptacja</Link>
              </li>
              <li>
                <Link href="/o-nas">O nas</Link>
              </li>
              <li>
                <Link href="/informacje-dla-rodzicow">Informacje</Link>
              </li>
            </ul>
            <Link
              href="/zapisy-i-formularz-kontaktowy"
              className={classes.buttonMobile}
            >
              <Button text="Zapisy" fontSize="1rem" />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
