import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import Header from "@/components/UI/Header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";


export const metadata = {
  title: "Galeria - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Przeglądaj naszą galerię zdjęć i zobacz, jak wygląda codzienne życie oraz wyjątkowe wydarzenia w żłobku Wesołe Wygibasy w Krakowie.",
  alternates: {
    canonical: "/galeria",
  },
  keywords:
    "żłobek, Wesołe Wygibasy, Kraków, galeria zdjęć, codzienne życie żłobka, wydarzenia dziecięce, opieka nad dziećmi, rozwój dziecka przez zabawę",
};

export default function Galeria() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Galeria z życia codziennego i wydarzeń w Żłobku Wesołe Wygibasy Kraków" />
        <div className={classes.banerContainer}>
          <div className={classes.imageContainer}>
            <Image
              src={"/others/galeria.png"}
              width={100}
              height={100}
              alt="Żłobek Wesołe Wygibasy - galeria zdjęć z codziennego życia dzieci w Krakowie"
              layout="responsive"
            />
          </div>
          <div className={classes.textContainer}>
            <div>
              <p>Zobacz. Oceń. Zapisz.</p>
              <h2>Zobacz jak spędzamy czas!</h2>
              <p className={classes.text}>
                Nasza galeria zdjęć pozwala uchwycić najpiękniejsze momenty z
                życia dzieci w żłobku <span>Wesołe Wygibasy</span> w Krakowie.
                Dzięki niej, każdy rodzic może zobaczyć, jak wygląda nasza
                codzienna praca: od zabaw i nauki po wyjątkowe wydarzenia i
                uroczystości. Oferujemy szeroki wachlarz zajęć wspierających
                rozwój emocjonalny, społeczny i intelektualny dzieci. Regularnie
                organizujemy atrakcje, takie jak teatrzyki, bale przebierańców
                czy urodziny, które na długo pozostają w pamięci najmłodszych.
              </p>
              <p className={classes.text}>
                Zapraszamy do obejrzenia zdjęć, które ukazują codzienność
                maluszków w naszej placówce. Odkryj, jak twórczo i radośnie
                spędzają czas w <span>Wesołych Wygibasach!</span>
              </p>
              <div className={classes.buttonContainer}>
                <Link href="/zapisy" className={classes.link}>
                  <Button text="Zapisy" />
                </Link>
                <Link href="#placowki">
                  <Button2 text="Galeria" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cloudContainer}>
        <div className={classes.head}>
          <h2>
            Odkryj, co czyni Żłobek <span>Wesołe Wygibasy</span> wyjątkowym!
          </h2>
          <p>
            W żłobku Wesołe Wygibasy w Krakowie dbamy o wszechstronny rozwój
            każdego dziecka, oferując bogaty program zajęć i wydarzeń. Nasza
            galeria zdjęć przedstawia codzienne aktywności maluszków oraz
            wyjątkowe momenty, takie jak urodziny, teatrzyki, przedstawienia i
            bale przebierańców. Zobacz, jak wiele radości przynoszą te chwile
            najmłodszym w naszym żłobku.
          </p>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <h3>Codzienne życie w żłobku Wesołe Wygibasy</h3>
            <p>
              Nasze zdjęcia dokumentują codzienne aktywności dzieci, które biorą
              udział w różnorodnych zajęciach, rozwijających ich zdolności
              twórcze, intelektualne i społeczne. Żłobek Wesołe Wygibasy to
              miejsce, gdzie dzieci uczą się poprzez zabawę, a każde zajęcia są
              dostosowane do ich potrzeb rozwojowych. Zobacz, jak dbamy o
              szczęście i harmonijny rozwój najmłodszych w Krakowie.
            </p>
          </div>
          <div className={classes.card}>
            <h3>Wyjątkowe wydarzenia i uroczystości w naszym żłobku</h3>
            <p>
              Nasz żłobek regularnie organizuje specjalne wydarzenia, takie jak
              urodziny, bale przebierańców, teatrzyki i przedstawienia, które
              dostarczają dzieciom wielu pozytywnych emocji. Galeria zdjęć
              ukazuje te magiczne chwile pełne uśmiechu i radości, w których
              każde dziecko ma okazję do integracji i wspólnej zabawy z
              rówieśnikami.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.places}>
        <Places background="true" />
      </div>
    </>
  );
}
