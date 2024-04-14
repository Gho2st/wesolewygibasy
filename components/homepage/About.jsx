import Link from "next/link";
import Button from "../UI/Button";
import classes from "./About.module.css";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function About() {
  return (
    <div className={classes.container} id="czytaj-wiecej">
      <div className={classes.imageContainer}>
        <Image
          src={"/others/about4.png"}
          width={100}
          height={100}
          layout="responsive"
          alt="logo"
        ></Image>
      </div>
      <div className={classes.textContainer}>
        <h2>Poczytaj o Naszej Pracy i Zapisz Swoje Dziecko.</h2>
        <p className={classes.text}>
          Naszym założeniem pedagogicznym jest opieka nad dziećmi na najwyższym
          poziomie. Wiemy, że rodzice powierzają nam swój największy skarb i
          musimy dać im poczucie bezpieczeństwa.
        </p>
        <div className={classes.itemContainer}>
          <div className={classes.item}>
            <div className={classes.checkContainer}>
              <FaCircleCheck
                className={classes.icon}
                style={{ color: "#FDCB56" }}
              />
            </div>
            <p>Wykwalifikowana Kadra</p>
          </div>
          <div className={classes.item}>
            <div className={classes.checkContainer}>
              <FaCircleCheck
                className={classes.icon}
                style={{ color: "#7C9BE6" }}
              />
            </div>
            <p>Czas na zabawę</p>
          </div>
          <div className={classes.item}>
            <div className={classes.checkContainer}>
              <FaCircleCheck
                className={classes.icon}
                style={{ color: "#04C9C8" }}
              />
            </div>
            <p>Bezpieczeństwo</p>
          </div>
          <div className={classes.item}>
            <div className={classes.checkContainer}>
              <FaCircleCheck
                className={classes.icon}
                style={{ color: "#FC7E05" }}
              />
            </div>
            <p>Rodzinna atmosfera</p>
          </div>
        </div>
        <div className={classes.contactInfoContainer}>
          <Link href="/o-nas">
            <Button text="O nas" fontSize="0.9rem" />
          </Link>
          <div className={classes.ownerContainer}>
            <Image
              className={classes.aga}
              src={"/others/aga.png"}
              width={55}
              height={55}
              alt="zdjęcie profilowe Agnieszki Ciołkowskiej - właścicielki Wesołych Wygibasów"
            ></Image>
            <div className={classes.phoneContainer}>
              <p className={classes.phone}>576 985 894</p>
              <p className={classes.ownerDescription}>
                Właścicielka Wesołych Wygibasów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
