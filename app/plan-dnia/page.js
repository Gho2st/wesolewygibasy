import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Footer from "@/components/UI/Footer";
import Places from "@/components/homepage/Places";
export default function plan() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1>Plan Dnia</h1>
        <p>
          Dla każdej z naszych placówek przygotowaliśmy szczegółowy plan dnia,
          który uwzględnia potrzeby i wiek dzieci. Nasz plan zapewnia
          zrównoważone połączenie czasu na zabawę, naukę, posiłki, odpoczynek i
          inne ważne czynności. Dzięki temu stwarzamy maluchom sprzyjające
          środowisko do rozwoju ich umiejętności i zainteresowań. <br></br> <br></br> Nasze zajęcia
          są zorganizowane w harmonogramie, który obejmuje różnorodne
          aktywności, takie jak zajęcia edukacyjne, artystyczne, ruchowe i
          muzyczne. Dbamy o to, aby zapewnić dzieciom różnorodne doświadczenia i
          możliwości rozwijania ich zainteresowań w przyjaznej i bezpiecznej
          atmosferze. <br></br> <br></br> Dodatkowo, oferujemy także zajęcia dodatkowe, które
          pozwalają dzieciom na poszerzanie swoich umiejętności i zainteresowań
          w specyficznych obszarach, takich jak języki obce, taniec, sport czy
          nauka przez zabawę.
        </p>
      </div>
      <Places />
      <Footer />
    </>
  );
}
