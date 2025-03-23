import Contact from "./Contact";
import classes from "./page.module.css";
import CardContainer from "@/components/Cards/CardContainer";

export const metadata = {
  title: "Żłobek Wesołe Wygibasy Kraków - Zapisy Otworzone!",
  alternates: {
    canonical: "/zapisy",
  },
  keywords: "zapisy, formularz kontaktowy, dostępne miejsca",
  description:
    "Zapisz swoje dziecko do żłobka Wesołe Wygibasy w Krakowie. Sprawdź dostępne miejsca, procedury rekrutacyjne i rozpocznij przygodę malucha w naszym żłobku.",
};

const cardData = [
  {
    title: "Zobaczyć nasze nowoczesne i przyjazne wnętrza",
    description:
      "Przyjdź i przekonaj się, jak komfortowe i bezpieczne warunki zapewniamy Twojemu dziecku. Nasze przestrzenie są zaprojektowane zmyślą o najmłodszych, z dbałością o każdy szczegół – od ergonomicznych mebli po miejsca pełne inspirujących zabaw.",
    link: {
      href: "/galeria",
      text: "Galeria",
    },
  },
  {
    title: "Zobaczyć, jak wygląda codzienny dzień w żłobku",
    description:
      "Zajrzyj za kulisy życia naszej placówki. Spotkaj innych rodziców, zobacz, jak dzieci bawią się i uczą pod opieką naszej kadry, i poczuj atmosferę miejsca, które troszczy się o każdy szczegół.",
    link: { href: "/plan-dnia-w-zlobku", text: "Plan Dnia" },
  },

  {
    title: "Dowiedzieć się więcej o naszym programie edukacyjnym",
    description:
      "Podczas spotkania przedstawimy szczegóły naszego programu dostosowanego do wieku i potrzeb rozwojowych dzieci. Pokażemy, jak łączymy naukę z zabawą, wspierając kreatywność, samodzielność oraz zdolności społeczne Twojego malucha.",
  },
];
export default function Zapisy() {
  return (
    <>
      <main>
        <Contact />
        <section className={classes.infoContainer}>
          <div className={classes.textContainer}>
            <h2>Przyjdź i poznaj nasz żłobek w Krakowie!</h2>
            <p>
              Zanim zdecydujesz, że nasz żłobek to najlepsze miejsce dla Twojego
              dziecka, zapraszamy na indywidualną wizytę. Chcemy, abyś
              samodzielnie przekonał się, dlaczego tak wielu rodziców wybiera
              właśnie nas. Umów się na spotkanie i zobacz, co sprawia, że nasza
              placówka jest wyjątkowa.
            </p>
          </div>
          <CardContainer cards={cardData} />
        </section>
      </main>
    </>
  );
}
