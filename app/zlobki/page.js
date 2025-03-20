import Places from "@/components/homepage/Places";
import classes from "./page.module.css";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import Header from "@/components/UI/Header";
import Image from "next/image";
import CardContainer from "@/components/Cards/CardContainer";

export const metadata = {
  title: "Żłobki Wesołe Wygibasy w Krakowie - Kameralna Opieka",
  alternates: {
    canonical: "/zlobki",
  },
  description:
    "Żłobki Wesołe Wygibasy w Krakowie – kameralne placówki z wykwalifikowaną kadrą, nowoczesnym wyposażeniem i zatwierdzeniem Sanepidu oraz Straży Pożarnej. Sprawdź nasze lokalizacje na Łokietka, Glogera, Vetulaniego, Slicznej i Stańczyka!",
};

export default function Zlobki() {
  const cardData = [
    {
      title: "Placówki z wpisem do rejestru żłobków",
      description:
        "Wszystkie nasze żłobki są oficjalnie zarejestrowane, co potwierdza ich zgodność z wymogami prawnymi i wysokimi standardami opieki nad dziećmi w Krakowie.",
      link: {
        href: "/informacje-dla-rodzicow",
        text: "Informacje dla rodziców",
      },
    },
    {
      title: "Kameralne grupy dla dzieci",
      description:
        "Dzięki małej liczbie dzieci w grupach zapewniamy indywidualną opiekę i rodzinną atmosferę, w której każde dziecko czuje się wyjątkowo i bezpiecznie.",
      link: { href: "/o-nas", text: "O nas" },
    },
    {
      title: "Bezpieczne i komfortowe warunki dla maluchów",
      description:
        "Nasze placówki są zaprojektowane z myślą o najmłodszych – oferują przestronne sale, wygodne miejsca do zabawy i odpoczynku oraz łagodny proces adaptacyjny.",
      link: { href: "/adaptacja-w-zlobku", text: "Adaptacja w Żłobku" },
    },
    {
      title: "Nowoczesne wyposażenie: klimatyzacja i rekuperacja",
      description:
        "Dbamy o komfort dzieci przez cały rok – każda placówka jest wyposażona w klimatyzację i system rekuperacji, zapewniając czyste i świeże powietrze w salach.",
    },
    {
      title: "Bezpieczeństwo zatwierdzone przez Sanepid i Straż Pożarną",
      description:
        "Nasze żłobki przeszły rygorystyczne kontrole Sanepidu i Straży Pożarnej, co gwarantuje najwyższe standardy bezpieczeństwa dla Twojego dziecka.",
    },
    {
      title: "Wykwalifikowany zespół opiekunów",
      description:
        "Nasi opiekunowie to doświadczeni specjaliści z pasją do pracy z dziećmi, posiadający kwalifikacje do wspierania ich rozwoju i codziennej opieki.",
    },
  ];

  return (
    <>
      <main className={classes.container}>
        <section>
          <Header text="Żłobki Wesołe Wygibasy w Krakowie" />
          <div className={classes.textContainer}>
            <div className={classes.text}>
              <h2>Kameralna opieka w sercu Krakowa</h2>
              <p>
                Sieć kameralnych żłobków Wesołe Wygibasy w Krakowie to miejsca
                stworzone z myślą o najmłodszych. Nasze placówki znajdziesz w
                pięciu dogodnych lokalizacjach: ul. Stańczyka, ul. Śliczna, ul.
                Vetulaniego, ul. Glogera oraz ul. Łokietka. Oferujemy
                profesjonalną opiekę, rozwój przez kreatywną zabawę i
                bezpieczne, przytulne warunki, w których Twoje dziecko będzie
                czuło się jak w domu.
                <span>
                  Wesołe Wygibasy – uśmiech i rozwój w każdym zakątku Krakowa!
                </span>
              </p>
              <div className={classes.buttonContainer}>
                <Button text="O nas" href="/o-nas" />
                <Button2 text="Zapisy" href="/zapisy" />
              </div>
            </div>
            <div className={classes.imageContainer}>
              <Image
                src="/others/zlobki.png"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section>
          <div className={classes.intro}>
            <h2>Wesołe Wygibasy – Twój żłobek w Krakowie</h2>
            <p>
              Wesołe Wygibasy to sieć niepublicznych żłobków w Krakowie,
              stworzona z myślą o najmłodszych i ich rodzicach. Nasze placówki
              znajdują się w różnych częściach miasta – abyś mógł wybrać
              lokalizację najbliżej Ciebie. Stawiamy na kameralne grupy,
              wykwalifikowaną kadrę i przyjazną atmosferę, w której dzieci czują
              się jak w domu. Zapewniamy zatwierdzone przez Sanepid i Straż
              Pożarną warunki, dzięki czemu możesz nam zaufać w pełni.
            </p>
          </div>
          <CardContainer cards={cardData} />
        </section>
        <section>
          <Places />
        </section>
      </main>
    </>
  );
}
