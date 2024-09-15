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
  keywords:
    "żłobek, Wesołe Wygibasy, Kraków, galeria zdjęć, codzienne życie żłobka, wydarzenia dziecięce",
};

export default function Galeria() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Galeria - Żłobek Wesołe Wygibasy Kraków" />

        <p>
          Witamy w galerii żłobka Wesołe Wygibasy w Krakowie. Zapraszamy do
          zapoznania się z codziennym życiem naszej placówki, gdzie dzieci
          rozwijają swoje umiejętności w przyjaznej i inspirującej atmosferze.
        </p>

        <h2>Dlaczego warto wybrać Wesołe Wygibasy?</h2>
        <p>
          Nasza galeria przedstawia fotografie z różnorodnych wydarzeń
          organizowanych w żłobku. Oferujemy bogaty program atrakcji, takich jak
          urodziny, teatrzyki, przedstawienia i bale przebierańców. Zachęcamy do
          sprawdzenia, jak wiele radości przynoszą te momenty najmłodszym.
        </p>

        <div className={classes.inner}>
          <h3>Codzienne życie w żłobku</h3>
          <p>
            Zdjęcia dokumentują codzienne aktywności dzieci, które biorą udział
            w zajęciach rozwijających ich zdolności twórcze i społeczne. Zobacz,
            jak uczymy przez zabawę i dbamy o szczęście oraz rozwój
            najmłodszych.
          </p>

          <h3>Wyjątkowe wydarzenia</h3>
          <p>
            W galerii znajdziesz fotografie z uroczystości, takich jak urodziny,
            bale przebierańców i przedstawienia. Dzieci chętnie uczestniczą w
            tych radosnych momentach, co widać na pełnych uśmiechów zdjęciach.
          </p>
        </div>

        <h2>Galeria pełna radości i rozwoju</h2>
        <p>
          Zapraszamy do obejrzenia zdjęć, które ukazują codzienność maluszków w
          naszej placówce. Odkryj, jak twórczo i radośnie spędzają czas w
          Wesołych Wygibasach!
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
