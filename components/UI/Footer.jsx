"use client";
import classes from "./Footer.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Numbers from "./Numbers";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    console.log("Kliknięto strzałkę, przewijam w górę");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.footerTopContainer}>
          <div className={classes.text}>
            <h2>
              <span>Wesołe Wygibasy</span> są wpisane do rejestru krakowskich
              złobków i klubów dziecięcych.
            </h2>
            <p>
              Oznacza to, ze jesteśmy miejscem bezpiecznym, przyjaznym dzieciom
              i rodzicom!
            </p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.numbersContainer}>
            <Numbers />
          </div>
        </div>
        <div className={classes.footerInfoContainer}>
          <div>
            <h3>Godziny otwarcia</h3>
            <ul>
              <li>Pon - Pt: 6:30 - 17:30</li>
              <li>Sob: nieczynne</li>
              <li>Ndz: nieczynne</li>
            </ul>
          </div>
          <div>
            <h3>Kontakt z Nami i Zapisy</h3>
            <ul className={classes.contactInfo}>
              <li className={classes.phone}>
                <Link href={"tel:+48697560022"}>
                  <FaPhone />
                  697 560 022
                </Link>
              </li>
              <li>
                <MdEmail /> wesolewygibasy@onet.pl
              </li>
              <li className={classes.form}>
                <Link href="/zapisy">
                  <div className={classes.formContainer}>
                    <div className={classes.icon}>
                      <FaMessage />
                    </div>
                    <div>Formularz kontaktowy</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.socialmedia}>
            <h3>Social media</h3>
            <Link
              href="https://www.facebook.com/wesolewygibasy"
              aria-label="Poczytaj więcej na naszym facebooku Wesołe Wygibasy"
            >
              <FaFacebook className={classes.facebook} />
            </Link>
            <Link
              href="https://www.instagram.com/wesolewygibasy"
              aria-label="Poczytaj więcej na naszym instagramie Wesołe Wygibasy"
            >
              <FaInstagram className={classes.instagram} />
            </Link>
          </div>
        </div>
        <div className={classes.footerDownContainer}>
          <p className={classes.description}>
            <span className={classes.copy}>&copy;</span> {currentYear} Wesołe
            Wygibasy | Projekt i realizacja:
            <span className={classes.FooterSpan}>
              <Link href={"https://www.domiweb.pl/"}> Domiweb </Link>
            </span>
          </p>
          <span onClick={scrollToTop} className={classes.arrow}>
            <FaArrowUp />
          </span>
        </div>
      </div>
    </footer>
  );
}
