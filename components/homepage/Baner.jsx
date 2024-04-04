import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Baner.module.css";
import Image from "next/image";

export default function Baner() {
  return (
    <div className={classes.banerContainer}>
      <div className={classes.textContainer}>
        <div>
          <h1>
            Najlepszy <span className={classes.span}>Żłobek</span> dla Twoich
            dzieci.
          </h1>
          <p>
            <span className={classes.wesole}>Wesołe Wygibasy</span> to miejsce,
            które powstało z pasji, wielkiej troski i miłości do dzieci.
          </p>
          <div className={classes.buttonContainer}>
            <Link href="#czytaj-wiecej">
              <Button
                text="Czytaj więcej"
                background="#FFC858"
                fontSize="1rem"
              />
            </Link>
            <Link href="#placowki">
              <Button
                text="Nasze placówki"
                background="#7C99E5"
                fontSize="1rem"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={"/others/girl2.png"}
          width={100}
          height={100}
          layout="responsive"
          alt="małe bawiące się dziecko"
        ></Image>
      </div>
    </div>
  );
}
