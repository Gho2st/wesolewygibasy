import classes from "./page.module.css";
import Places from "@/components/homepage/Places";
import Header from "@/components/UI/Header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Galeria",
  description:
    "Zapraszamy do obejrzenia naszej galerii, w której możesz zobaczyć, jak wygląda codzienne życie w naszym żłobku i przebieg zajęć dodatkowych.",
  alternates: {
    canonical: "/galeria",
  },
};
export default function galeria() {
  return (
    <>
      <div className={classes.container}>
        <Header text="Galeria - Żłobek Wesołe Wygibasy w Krakowie" />

        <p>
          Zapraszamy do zapoznania się z naszą galerią zdjęć, która przeniesie
          Państwa w świat żłobka Wesołe Wygibasy w Krakowie. Nasza placówka to
          miejsce, w którym dzieci w przyjaznej i twórczej atmosferze spędzają
          czas, ucząc się i bawiąc. Zobacz, jak nasz żłobek w Krakowie dba o
          rozwój maluszków.
        </p>

        <h2>Dlaczego warto wybrać nasz żłobek w Krakowie?</h2>
        <p>
          W naszej galerii znajdziesz zdjęcia z różnych wydarzeń, które odbywają
          się w żłobku Wesołe Wygibasy. Oferujemy mnóstwo atrakcji dla
          maluszków, takich jak urodziny, teatrzyki, przedstawienia oraz bale
          przebierańców. To tylko kilka z wielu kategorii, które prezentujemy w
          naszej galerii zdjęć.
        </p>
        <div className={classes.inner}>
          <h3>Codzienne życie w naszym żłobku w Krakowie</h3>
          <p>
            Nasza galeria to także zdjęcia z codziennych aktywności dzieci,
            które uczestniczą w zajęciach rozwijających ich zdolności twórcze i
            społeczne. Zobacz, jak dzieci w naszym żłobku w Krakowie uczą się
            poprzez zabawę i jak ważne są dla nas ich szczęście i rozwój.
          </p>

          <h3>Wyjątkowe wydarzenia w żłobku Wesołe Wygibasy</h3>
          <p>
            W naszej galerii można zobaczyć ujęcia z uroczystości, takich jak
            urodziny, bale przebierańców oraz przedstawienia. Dzieci w naszym
            żłobku w Krakowieuwielbiają uczestniczyć w tych wydarzeniach, co
            widać na zdjęciach pełnych radości i uśmiechów.
          </p>
        </div>
        <h2>Galeria zdjęć z życia żłobka w Krakowie</h2>
        <p>
          Zdjęcia ukazują miłość, radość i rozwój dzieci w żłobku Wesołe
          Wygibasy w Krakowie. Serdecznie zapraszamy do obejrzenia tych pięknych
          chwil, które są dowodem na wyjątkową atmosferę panującą w naszej
          placówce. Zobacz, jak twórczo i radośnie spędzają czas maluszki w
          naszym żłobku w Krakowie.
        </p>
      </div>
      <Places background="true" />
    </>
  );
}
