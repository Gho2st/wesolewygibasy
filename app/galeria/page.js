import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
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
        <h1>Galeria</h1>
        <p>
          Zapraszamy do zapoznania się z naszą galerią zdjęć, która przeniesie
          Państwa w świat naszego żłobka dla dzieci w Krakowie.<br></br>
          <br></br> Zdjęcia ukazują różnorodne wydarzenia i chwile z życia
          maluszków w naszej placówce. Można zobaczyć urocze urodziny, kiedy
          nasze dzieciaki cieszą się tortem i uśmiechami, teatrzyki i
          przedstawienia, gdzie maluchy wcielają się w role małych aktorów, czy
          też bale przebierańców, gdzie maluchy błyszczą w swoich wymyślnych
          kostiumach. To tylko kilka z wielu kategorii, które można znaleźć w
          naszej galerii. <br></br>
          <br></br> Przekonajcie się sami, jak radośnie i twórczo spędzają czas
          Wasze maluszki w naszym żłobku „Wesołe Wygibasy” w Krakowie.
          Zapraszamy do obejrzenia tych pięknych chwil, które pokazują miłość,
          radość i rozwój naszych dzieci.
        </p>
      </div>
      <Places />
    </>
  );
}
