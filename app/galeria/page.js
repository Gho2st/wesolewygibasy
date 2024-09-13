import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import Header from "@/components/UI/Header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Galeria - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Przeglądaj naszą galerię zdjęć i zobacz, jak wygląda codzienne życie oraz wyjątkowe wydarzenia w żłobku Wesołe Wygibasy w Krakowie.",
  alternates: {
    canonical: "/galeria",
  },
};

export default function Galeria() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Galeria - Żłobek Wesołe Wygibasy Kraków" />

        <p>
          Witamy w galerii zdjęć żłobka Wesołe Wygibasy w Krakowie. Zapraszamy
          do zapoznania się z codziennym życiem naszej placówki, gdzie dzieci
          rozwijają swoje umiejętności w przyjaznej i inspirującej atmosferze.
        </p>

        <h2>Dlaczego warto wybrać żłobek Wesołe Wygibasy w Krakowie?</h2>
        <p>
          Nasza galeria przedstawia zdjęcia z wydarzeń organizowanych w żłobku
          Wesołe Wygibasy. Oferujemy bogaty program atrakcji dla dzieci, w tym
          urodziny, teatrzyki, przedstawienia oraz bale przebierańców. Sprawdź
          różnorodność wydarzeń, które organizujemy dla maluszków.
        </p>

        <div className={classes.inner}>
          <h3>Codzienne życie w żłobku Wesołe Wygibasy</h3>
          <p>
            Nasze zdjęcia dokumentują codzienne aktywności dzieci, które biorą
            udział w zajęciach rozwijających ich zdolności twórcze i społeczne.
            Zobacz, jak dzieci uczą się poprzez zabawę i jak dbamy o ich
            szczęście i rozwój w naszym żłobku w Krakowie.
          </p>

          <h3>Wyjątkowe wydarzenia w żłobku Wesołe Wygibasy</h3>
          <p>
            W galerii znajdziesz fotografie z uroczystości takich jak urodziny,
            bale przebierańców i przedstawienia. Dzieci w naszym żłobku w
            Krakowie chętnie uczestniczą w tych wydarzeniach, co widać na
            zdjęciach pełnych radości i uśmiechów.
          </p>
        </div>

        <h2>Galeria zdjęć z życia żłobka Wesołe Wygibasy</h2>
        <p>
          Obejrzysz tu zdjęcia ukazujące miłość, radość i rozwój dzieci w żłobku
          Wesołe Wygibasy w Krakowie. Serdecznie zapraszamy do zobaczenia, jak
          maluszki twórczo i radośnie spędzają czas w naszej placówce.
        </p>
        <div className={classes.buttonContainer}>
          <Link href="/zapisy">
            <Button text="Zapisy" fontSize="1rem" />
          </Link>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Jadłospis" background="#7C99E5" fontSize="1rem" />
          </Link>
        </div>
      </div>
      <Places background="true" />
    </>
  );
}
