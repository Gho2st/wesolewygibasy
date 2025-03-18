import classes from "./adaptacja.module.css";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
export default function Adaptacja() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.adaptacjaContainer}>
          <div className={classes.imageContainer}>
            <Image
              src={"/adaptacja/adaptacja.webp"}
              width={200}
              height={100}
              alt="Krąg dzieci podczas Adaptacji w Żłobku Wesołe Wygibasy w Krakowie"
              layout="responsive"
            ></Image>
          </div>
          <div className={classes.textContainer}>
            <div>
              <article>
                <p>Poznaj. Odkryj. Proces.</p>
                <h2>Adaptacja to kluczowy moment dla dziecka w Żłobku.</h2>

                <p className={classes.text}>
                  Rozumiemy, jak ważne są komfort i poczucie bezpieczeństwa w
                  nowym otoczeniu, dlatego oferujemy
                  <span> 8 bezpłatnych spotkań</span> adaptacyjnych, które
                  ułatwią zarówno dziecku, jak i rodzicom ten ważny krok. Wesołe
                  Wygibasy czekają na Was.
                </p>

                <div className={classes.buttonContainer}>
                  <Button text="Plan dnia" href="/plan-dnia-w-zlobku" />
                  <Button2 text="Cennik" href="/cennik-i-jadlospis-w-zlobku" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
