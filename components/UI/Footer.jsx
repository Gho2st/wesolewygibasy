import classes from "./Footer.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Numbers from "./Numbers";
import Button from "./Button";
import PlaceItem from "./PlaceItem";

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
            <li>
              <FaPhone /> 697 560 022
            </li>
            <li>
              <MdEmail /> wesole.wygibasy@onet.pl
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
        <div className={classes.facebook}>
          <h5>Social media</h5>
          <FaFacebook />
        </div>
      </div>
      <div className={classes.footerDownContainer}>
        <p className={classes.description}>
          Wesołe Wygibasy 2024 &
          <span className={classes.span}>
            <Link href={"https://www.djj-software.pl/"}> DJJ Software </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
