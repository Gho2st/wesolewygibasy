"use client";
import Link from "next/link";
import classes from "./Navigation.module.css";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleLinkClick = () => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    };

    const links = document.querySelectorAll(`.${classes.navigation__link}`);
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  return (
    <>
      <div className={classes.navigation}>
        <input
          ref={checkboxRef}
          type="checkbox"
          className={classes.navigation__checkbox}
          id="navi-toggle"
        ></input>
        <label htmlFor="navi-toggle" className={classes.navigation__button}>
          <span className={classes.navigation__icon}>&nbsp;</span>
        </label>
        <div className={classes.navigation__background}>&nbsp;</div>
        <nav className={classes.navigation__nav}>
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
    </>
  );
}
