import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import Header from "@/components/UI/Header";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import CardContainer from "@/components/Cards/CardContainer";

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

const cardData = [
  {
    title: "Codzienne życie",
    description:
      "Nasze zdjęcia dokumentują codzienne aktywności dzieci, które biorą udział w różnorodnych zajęciach, rozwijających ich zdolności twórcze, intelektualne i społeczne. Każde zajęcia są dostosowane do ich potrzeb rozwojowych. Zobacz, jak dbamy o szczęście i harmonijny rozwój najmłodszych w Krakowie.",
  },
  {
    title: "Wyjątkowe wydarzenia i uroczystości",
    description:
      "Nasz żłobek regularnie organizuje specjalne wydarzenia, takie jak urodziny, bale przebierańców, teatrzyki i przedstawienia, które dostarczają dzieciom wielu pozytywnych emocji. Galeria zdjęć ukazuje te magiczne chwile pełne uśmiechu i radości, w których każde dziecko ma okazję do integracji i wspólnej zabawy z rówieśnikami.",
  },
  {
    title: "Rozwój dziecka przez zabawę",
    description:
      "Wierzymy, że nauka przez zabawę jest kluczem do wszechstronnego rozwoju dziecka. Codzienne aktywności są dostosowane do indywidualnych potrzeb maluchów, tak aby rozwijały ich zdolności poznawcze, motoryczne i emocjonalne. Zobacz w galerii, jak kreatywne i angażujące zajęcia wspierają rozwój Twojego dziecka w bezpiecznej i pełnej miłości atmosferze.",
  },
  {
    title: "Przygotowanie do przedszkola",
    description:
      "Żłobek nie tylko dba o bieżący rozwój dzieci, ale również przygotowuje je do przyszłej edukacji przedszkolnej. Nasze zajęcia rozwijają samodzielność, zdolności interpersonalne oraz umiejętność pracy w grupie, co ułatwia adaptację w późniejszych etapach edukacji. W galerii możesz zobaczyć, jak poprzez zabawę uczymy dzieci ważnych umiejętności, które pomogą im w dalszym życiu.",
  },
  {
    title: "Współpraca z rodzicami",
    description:
      "Aktywnie współpracujemy z rodzicami, aby zapewnić dzieciom najlepszą opiekę i wsparcie w rozwoju. Regularnie organizujemy spotkania, podczas których rodzice mogą dowiedzieć się więcej o postępach swoich dzieci oraz wziąć udział w warsztatach i zajęciach integracyjnych. Nasza galeria dokumentuje takie spotkania, pokazując, jak ważna jest dla nas współpraca na linii żłobek-rodzice.",
  },
  {
    title: "Zajęcia z języka angielskiego",
    description:
      "Od najmłodszych lat wprowadzamy dzieci w świat języka angielskiego. Poprzez zabawę i piosenki uczymy podstawowych słów i zwrotów, które wspierają rozwój lingwistyczny maluchów. Nasze zajęcia są dostosowane do wieku i poziomu rozwoju dzieci, a efekty możesz zobaczyć w naszej galerii, gdzie uchwyciliśmy, jak dzieci bawią się i uczą w trakcie zajęć z języka angielskiego.",
  },
];

export default function Galeria() {
  return (
    <>
      <main>
        <section>
          <div className={classes.container}>
            <Header text="Galeria z życia codziennego i wydarzeń w Żłobku Wesołe Wygibasy Kraków" />
            <div className={classes.banerContainer}>
              <div className={classes.imageContainer}>
                <Image
                  src={"/monkeys/7.gif"}
                  width={100}
                  height={100}
                  alt="Wyskakująca małpka z patykiem w łapce "
                  layout="responsive"
                />
              </div>
              <div className={classes.textContainer}>
                <div>
                  <p>Zobacz. Oceń. Zapisz.</p>
                  <h2>Zobacz jak spędzamy czas!</h2>
                  <p className={classes.text}>
                    Nasza galeria zdjęć pozwala uchwycić najpiękniejsze momenty
                    z życia dzieci w żłobku <span>Wesołe Wygibasy</span> w
                    Krakowie. Dzięki niej, każdy rodzic może zobaczyć, jak
                    wygląda nasza codzienna praca: od zabaw i nauki po wyjątkowe
                    wydarzenia i uroczystości. Oferujemy szeroki wachlarz zajęć
                    wspierających rozwój emocjonalny, społeczny i intelektualny
                    dzieci. Regularnie organizujemy atrakcje, takie jak
                    teatrzyki, bale przebierańców czy urodziny, które na długo
                    pozostają w pamięci najmłodszych.
                  </p>
                  <p className={classes.text}>
                    Zapraszamy do obejrzenia zdjęć, które ukazują codzienność
                    maluszków w naszej placówce. Odkryj, jak twórczo i radośnie
                    spędzają czas.
                  </p>
                  <div className={classes.buttonContainer}>
                    <Button text="Zapisy" href="/zapisy" />
                    <Button2 text="Galeria" href="#placówki" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.container}>
          <div className={classes.head}>
            <h2>Odkryj, co czyni nas wyjątkowym miejscem!</h2>
            <p>
              W żłobku Wesołe Wygibasy w Krakowie dbamy o wszechstronny rozwój
              każdego dziecka, oferując bogaty program zajęć i wydarzeń. Nasza
              galeria zdjęć przedstawia codzienne aktywności maluszków oraz
              wyjątkowe momenty, takie jak urodziny, teatrzyki, przedstawienia i
              bale przebierańców. Zobacz, jak wiele radości przynoszą te chwile
              najmłodszym w naszym żłobku.
            </p>
          </div>

          <CardContainer cards={cardData} />
        </section>
        <div className={classes.places}>
          <Places background="true" />
        </div>
      </main>
    </>
  );
}
