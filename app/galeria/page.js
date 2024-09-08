import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import Header from "@/components/UI/Header";
import { Metadata } from "next";

export const metadata = {
  title: "Galeria",
  alternates: {
    canonical: "/galeria",
  },
};
export default function galeria() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Galeria - Żłobek Wesołe Wygibasy w Krakowie" />
        <h2>
          Zapraszamy do zapoznania się z naszą galerią zdjęć, która przeniesie
          Państwa w świat naszego żłobka dla dzieci w Krakowie.
        </h2>
        <p>
          W naszej galerii można zobaczyć różnorodne wydarzenia i niezapomniane
          chwile z życia maluszków w żłobku Wesołe Wygibasy. Znajdziecie tu
          urocze zdjęcia z urodzin, kiedy nasze dzieciaki cieszą się tortem i
          uśmiechami, teatrzyki i przedstawienia, gdzie maluchy wcielają się w
          role małych aktorów, a także bale przebierańców, podczas których
          dzieci błyszczą w wymyślnych kostiumach. To tylko kilka z wielu
          kategorii, które czekają na Państwa w naszej galerii.
          <br></br>
          <br></br> Przekonajcie się sami, jak radośnie i twórczo spędzają czas
          Wasze maluszki w naszym żłobku w Krakowie. Zdjęcia te ukazują miłość,
          radość i rozwój dzieci w Wesołych Wygibasach. Serdecznie zapraszamy do
          obejrzenia tych pięknych chwil, które są dowodem na wyjątkową
          atmosferę panującą w naszej placówce.
        </p>
      </div>
      <Places background="true" />
    </>
  );
}
