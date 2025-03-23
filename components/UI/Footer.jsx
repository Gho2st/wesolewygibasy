"use client";
import classes from "./Footer.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Numbers from "./Numbers";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a71ff"
          fill-opacity="1"
          d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <footer className={classes.container}>
        <div className="">
          <div className={classes.topContainer}>
            <div className={classes.textContainer}>
              <h2>
                <span>Wesołe Wygibasy</span> są wpisane do rejestru krakowskich
                złobków i klubów dziecięcych
              </h2>
              <p>
                Oznacza to, że jesteśmy miejscem bezpiecznym oraz przyjaznym
                dzieciom i rodzicom!
              </p>
              <div className={classes.line}></div>
            </div>
            <div className={classes.numbers}>
              <Numbers />
            </div>
          </div>
          <div className={classes.footerInfoContainer}>
            <div className={classes.hoursContainer}>
              <h3>Godziny otwarcia</h3>
              <ul>
                <li>
                  <span>Pon - Pt</span>{" "}
                </li>
                <li>Vetulaniego - 7:00 - 17:00 </li>
                <li>Glogera - 6:30 - 17:00 </li>
                <li>Stańczyka - 6:30 - 17:30 </li>
                <li>Śliczna - 7:00 - 17:30 </li>
                <li>
                  <span>Sob:</span> nieczynne
                </li>
                <li>
                  <span>Ndz:</span> nieczynne
                </li>
              </ul>
            </div>
            <div>
              <h3>Kontakt z Nami i Zapisy</h3>
              <ul className={classes.contactInfo}>
                <li>
                  <Link href={"tel:+48697560022"}>
                    <div className={classes.iconContainer}>
                      <FaPhone />
                    </div>
                    <div className={classes.linkContainer}>+48 697 560 022</div>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:wesolewygibasy@onet.pl">
                    <div className={classes.iconContainer}>
                      <MdEmail />
                    </div>
                    <div className={classes.linkContainer}>
                      wesolewygibasy@onet.pl
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/zapisy">
                    <div className={classes.iconContainer}>
                      <FaMessage />
                    </div>
                    <div className={classes.linkContainer}>
                      Formularz kontaktowy
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={classes.socialmedia}>
              <h3>Social media</h3>
              <div className={classes.socialContainer}>
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
          </div>
          <div className={classes.footerDownContainer}>
            <p className={classes.description}>
              <span className={classes.copy}>&copy;</span> {currentYear} Wesołe
              Wygibasy | Projekt i realizacja:
              <Link href={"https://www.domiweb.pl/"}> Domiweb </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
