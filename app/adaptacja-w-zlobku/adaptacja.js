import classes from "./adaptacja.module.css";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
export default function Adaptacja() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.adaptacjaContainer}>
          <div className={classes.imageContainer}>
            <Image
              src={"/others/adaptacja.png"}
              width={200}
              height={100}
              layout="responsive"
            ></Image>
          </div>
          <div className={classes.textContainer}>
            <div>
              <p>Poznaj. Odkryj. Proces.</p>
              <h2>Adaptacja to kluczowy moment dla dziecka w Żłobku.</h2>
              <p className={classes.text}>
                Adaptacja dziecka w żłobku to kluczowy moment w jego rozwoju.
                Rozumiemy, jak ważne są komfort i poczucie bezpieczeństwa w
                nowym otoczeniu, dlatego oferujemy
                <span> 8 bezpłatnych spotkań</span> adaptacyjnych, które ułatwią
                zarówno dziecku, jak i rodzicom ten ważny krok. Wesołe Wygibasy
                czekają na Was.
              </p>
              <Link href="/zapisy" className={classes.link}>
                <Button text="Zapisy" fontSize="1rem" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
