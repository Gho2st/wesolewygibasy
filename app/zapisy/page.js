import Contact from "./Contact";
import { Metadata } from "next";
import classes from "./page.module.css";

export const metadata = {
  title: "Żłobek Wesołe Wygibasy Kraków - Zapisy Otworzone!",
  alternates: {
    canonical: "/zapisy",
  },
  keywords: "zapisy, formularz kontaktowy, dostępne miejsca",
  description:
    "Zapisz swoje dziecko do żłobka Wesołe Wygibasy w Krakowie. Sprawdź dostępne miejsca, procedury rekrutacyjne i rozpocznij przygodę malucha w naszym żłobku.",
};
export default function Zapisy() {
  return (
    <>
      <main>
        <Contact />
        <section className={classes.infoContainer}>
          <h2>Przyjdź i poznaj nasz żłobek w Krakowie!</h2>
          <p>
            Zanim zdecydujesz, że nasz żłobek to najlepsze miejsce dla Twojego
            dziecka, zapraszamy na indywidualną wizytę. Chcemy, abyś
            samodzielnie przekonał się, dlaczego tak wielu rodziców wybiera
            właśnie nas. Umów się na spotkanie i zobacz, co sprawia, że nasza
            placówka jest wyjątkowa.
          </p>
          <ul className={classes.listContainer}>
            <li>
              <strong>Zobaczyć nasze nowoczesne i przyjazne wnętrza</strong>
              Przyjdź i przekonaj się, jak komfortowe i bezpieczne warunki
              zapewniamy Twojemu dziecku. Nasze przestrzenie są zaprojektowane z
              myślą o najmłodszych, z dbałością o każdy szczegół – od
              ergonomicznych mebli po miejsca pełne inspirujących zabaw.
            </li>
            <li>
              <strong>Poznać naszych wykwalifikowanych opiekunów</strong> Zespół
              doświadczonych specjalistów z przyjemnością odpowie na wszystkie
              Twoje pytania. Opowiemy o naszych metodach pracy, podejściu do
              dzieci i wartości, jakie przyświecają nam każdego dnia.
            </li>
            <li>
              <strong>
                Dowiedzieć się więcej o naszym programie edukacyjnym
              </strong>
              Podczas spotkania przedstawimy szczegóły naszego programu
              dostosowanego do wieku i potrzeb rozwojowych dzieci. Pokażemy, jak
              łączymy naukę z zabawą, wspierając kreatywność, samodzielność oraz
              zdolności społeczne Twojego malucha.
            </li>
            <li>
              <strong>Zobaczyć, jak wygląda codzienny dzień w żłobku</strong>
              Zajrzyj za kulisy życia naszej placówki. Spotkaj innych rodziców,
              zobacz, jak dzieci bawią się i uczą pod opieką naszej kadry, i
              poczuj atmosferę miejsca, które troszczy się o każdy szczegół.
            </li>
          </ul>
          <h2>Dlaczego warto nas odwiedzić?</h2>
          <p>
            Wiemy, że wybór żłobka dla Twojego dziecka to ważna decyzja. Dlatego
            chcemy, abyś mógł na własne oczy zobaczyć, jak dbamy o
            bezpieczeństwo, rozwój i szczęście każdego malucha. Nie musisz
            podejmować decyzji od razu – z przyjemnością pokażemy Ci wszystko,
            co wyróżnia naszą placówkę.
          </p>
          <h2>Umów się na wizytę już dziś!</h2>
          <p>
            Nie czekaj – zrób pierwszy krok w stronę zapewnienia swojemu dziecku
            najlepszego startu w życiu. Wypełnij formularz kontaktowy dostępny
            powyżej lub zadzwoń do nas. Razem ustalimy dogodny termin wizyty.
            <br></br>
            Przekonaj się, dlaczego jesteśmy najlepszym żłobkiem w Krakowie!
            Czekamy na Ciebie i Twoje dziecko – pozwól nam pokazać, jak możemy
            wspólnie zadbać o jego przyszłość. 😊 <br></br> Zapewnij swojemu
            dziecku bezpieczne, przyjazne i inspirujące środowisko do rozwoju
            już dziś!
          </p>
        </section>
      </main>
    </>
  );
}
