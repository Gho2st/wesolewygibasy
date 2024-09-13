import classes from "./page.module.css";
import Image from "next/image";
import Team, { TeamGlogera, TeamStanczyka } from "@/components/UI/Team";
import TeamVetulaniego from "@/components/UI/Team";
import { FaPeopleGroup } from "react-icons/fa6";
import { Metadata } from "next";
import Header from "@/components/UI/Header";

export const metadata = {
  title: "O nas",
  alternates: {
    canonical: "/o-nas",
  },
  description:
    "Poznaj żłobek Wesołe Wygibasy w Krakowie. Oferujemy opiekę nad dziećmi w przyjaznej atmosferze, kreatywne zajęcia i profesjonalną kadrę pedagogiczną.",
};

export default function oNas() {
  return (
    <>
      <div className={classes.container}>
        <Header text="O Nas - Żłobek Wesołe Wygibasy w Krakowie" />
        <div className={classes.info}>
          <div className={classes.text}>
            <p>
              Nazywam się Agnieszka Ciołkowska i jestem pedagogiem,
              resocjalizatorem oraz właścicielką Wesołych Wygibasów — żłobka w
              Krakowie, który powstał z pasji i miłości do dzieci.
            </p>
            <h2>Moja Droga do Żłobka w Krakowie</h2>
            <p>
              Marzenia o pracy z dziećmi towarzyszyły mi od najmłodszych lat.
              Już jako dziecko opiekowałam się rodzeństwem, a później dziećmi
              sąsiadów. Posiadanie własnych dzieci tylko wzmocniło moją pasję.
              Po ukończeniu studiów pedagogicznych, które były moim celem od
              zawsze, zdecydowałam się na dalszy rozwój.
            </p>
            <p>
              Mimo że życie rodzinne i praca były priorytetem przez wiele lat,
              nigdy nie zapomniałam o marzeniu o pracy z dziećmi. Gdy na świecie
              pojawiło się moje trzecie dziecko, postanowiłam zrealizować swoje
              ambicje edukacyjne, kończąc studia z zakresu pedagogiki
              przedszkolnej i wczesnoszkolnej oraz resocjalizacji.
            </p>
            <h2>Historia Wesołych Wygibasów</h2>
            <p>
              W 2015 roku, wspólnie z rodziną, zdecydowaliśmy się na
              przeprowadzkę i założenie w Krakowie Wesołych Wygibasów — centrum
              zajęć rozwojowo-rozrywkowych dla dzieci. Nasza wizja zrealizowała
              się i w 2017 roku przekształciliśmy naszą placówkę w Klub Malucha,
              oferujący opiekę nad dziećmi w wieku 1-3 lata.
            </p>
            <p>
              W 2021 roku, z powodu rosnącego zainteresowania i braku miejsc,
              otworzyliśmy nową placówkę — żłobek Wesołe Wygibasy na ulicy Glogera, zlokalizowany
              900 metrów od Klubu Malucha. Z czasem powstały kolejne żłobki w
              Krakowie — na ulicach Stańczyka i Ślicznej.
            </p>
            <h2>Nasze Założenia Pedagogiczne</h2>
            <p>
              Moim celem jest zapewnienie dzieciom najwyższej jakości opieki.
              Rozumiem, jak ważne jest zaufanie rodziców, którzy powierzają nam
              swoje największe skarby. Dlatego kładę duży nacisk na
              bezpieczeństwo i komfort maluchów, a także na rozwój ich
              umiejętności w przyjaznym i wspierającym środowisku.
            </p>
            <p>
              Przez lata opracowałam metody pracy z dziećmi, które przekazuję
              mojej kadrze. Każda nasza placówka jest miejscem, w którym dzieci
              mogą rozwijać swoje umiejętności w kreatywny sposób, a rodzice
              mogą być pewni, że ich pociechy są w dobrych rękach.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <Image
              src={"/others/aga3.png"}
              width={100}
              height={100}
              layout="responsive"
              alt="Agnieszka Ciołkowska - Właścicielka Żłobek Wesołe Wygibasy w Krakowie"
            ></Image>
            <h2>Agnieszka Ciołkowska</h2>
            <p>Właściciel, Pedagog, Mama 3 dzieci</p>
          </div>
        </div>
        <div className={classes.teamContainer}>
          <h3 className={classes.header}>Nasza Kadra</h3>
          <div className={classes.icon}>
            <FaPeopleGroup />
          </div>
          <TeamVetulaniego place="Żłobek, Ulica Vetulaniego 8, Kraków 31-226" />
          <TeamGlogera place="Żłobek, Ulica Glogera 53/LU2, Kraków 31-222" />
          <TeamStanczyka place="Żłobek, Ulica Stańczyka/LU3 8, Kraków 31-126" />
        </div>
      </div>
    </>
  );
}
