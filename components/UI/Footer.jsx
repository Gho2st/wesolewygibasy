import classes from "./Footer.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Numbers from "./Numbers";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footerTopContainer}>
        <div className={classes.text}>
          <h4>
            <span>Wesołe Wygibasy</span> są wpisane do rejestru krakowskich
            złobków i klubów dziecięcych.
          </h4>
          <p>
            Oznacza to, ze jesteśmy miejscem bezpiecznym, przyjaznym dzieciom i
            rodzicom!
          </p>
          <div className={classes.line}></div>
        </div>
        <div className={classes.numbersContainer}>
          <Numbers />
        </div>
      </div>
      <div className={classes.footerInfoContainer}>
        <div>
          <h5>Godziny otwarcia</h5>
          <ul>
            <li>Pon - Pt: 6:30 - 17:30</li>
            <li>Sob: nieczynne</li>
            <li>Ndz: nieczynne</li>
          </ul>
        </div>
        <div>
          <h5>Kontakt z Nami i Zapisy</h5>
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
              <Link href="/zapisy-i-formularz-kontaktowy">
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
        <div className={classes.facebook}>
          <h5>Social media</h5>
          <Link href="https://www.facebook.com/wesolewygibasy">
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div className={classes.footerDownContainer}>
        <p className={classes.description}>
          <span className={classes.copy}>&copy;</span> 2024 Wesołe Wygibasy |
          Projekt i realizacja:
          <span className={classes.FooterSpan}>
            <Link href={"https://www.domiweb.pl/"}> Domiweb </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
