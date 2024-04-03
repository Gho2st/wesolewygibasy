import Header from "@/components/UI/Header";
import classes from "./page.module.css";
import Footer from "@/components/UI/Footer";
import Image from "next/image";
import Team, { TeamGlogera, TeamStanczyka } from "@/components/UI/Team";
import TeamVetulaniego from "@/components/UI/Team";
import { FaPeopleGroup } from "react-icons/fa6";


export default function oNas() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1>O Nas</h1>
        <div className={classes.info}>
          <div className={classes.text}>
            <p>
              Nazywam się Agnieszka Ciołkowska, jestem pedagogiem,
              resocjalizatorem oraz twórcą i właścicielem Wesołych Wygibasów.
              <br></br> <br></br>
              Wesołe Wygibasy powstały z pasji, wielkiej troski i miłości do
              dzieci.<br></br>
              <br></br> Marzenia o tym aby być Panią nauczycielką towarzyszyły
              mi od najmłodszych lat. Zawsze odkąd pamiętam opiekowałam się
              dziećmi, najpierw rodzeństwem, potem dziećmi sąsiadów aż wreszcie
              3 własnych. Ukończenie studiów pedagogicznych było zawsze moim
              celem, osiągnęłam go, lecz troszkę później! <br></br> <br></br> W
              moim przypadku najpierw było dorosłe życie, rodzina i dzieci. Lecz
              wciąż pamiętałam o swoim marzeniu. I tak gdy pojawiło się na
              świecie 3 dziecko, pojawiły się też wyczekiwane studia i to od
              razu na 2 kierunkach: pedagogika przedszkolna i wczesnoszkolna
              oraz resocjalizacja. Cóż nie do końca byłam pewna czy chce
              rozwijać czy ratować młodych ludzi. W mojej głowie było wiele
              pomysłów jak fajnie prowadzić dzieci, jak w sposób ciekawy je
              rozwijać i poprzez zabawę edukować. <br></br> <br></br> Jako
              rodzina postawiliśmy wszystko na jedną kartę.<br></br> <br></br> –
              W 2015 kupiliśmy dom gdzie mieliśmy mieszkać i prowadzić Wesołe
              Wygibasy centrum zajęć rozwojowo-rozrywkowe dla dzieci. Tak się
              też stało. <br></br> – W 2017 roku przekształciliśmy się w Klub
              Malucha czyli miejsce opieki nad dziećmi w wieku 1-3 lata.{" "}
              <br></br> <br></br>
              Moim założeniem pedagogicznym jest opieka nad dziećmi na
              najwyższym poziomie. Jako mama wiedziałam ,że rodzice powierzają
              nam swój największy skarb i musimy dać im poczucie bezpieczeństwa.
              <br></br>
              <br></br>
              Przez lata wypracowałam metody pracy z dzieckiem i przekazuje je
              swojej kadrze. 14 czerwca 2021 powstał żłobek Wesołe wygibasy ,
              stworzony w odległości 900 m od klubu malucha. Przyczyna była
              prosta. Nie mogliśmy przyjąć wszystkich chętnych dzieciaczków z
              powodu braku miejsc.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <Image
              src={"/others/aga3.png"}
              width={100}
              height={100}
              layout="responsive"
              alt=""
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
          <TeamGlogera place="Żłobek, Ulica Glogera 53/LU2" />
          <TeamStanczyka place="Żłobek, Ulica Stanczyka/LU3 8, Kraków 31-126" />
        </div>
      </div>
      <Footer />
    </>
  );
}
