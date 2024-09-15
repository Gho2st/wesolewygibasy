import classes from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Link from "next/link";
import DaySchedule from "@/components/Info/DaySchedule";
import { Metadata } from "next";
import SliderComponent from "../../components/UI/slider/slider";
import ImagesContainer from "@/components/Gallery/ImagesContainer";

export const metadata = {
  title: "Żłobek na Ulicy Ślicznej w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobek-na-ulicy-slicznej",
  },
  description:
    "Poznaj żłobek Wesołe Wygibasy na ul. Ślicznej w Krakowie. Komfortowa lokalizacja, własny plac zabaw i różnorodne zajęcia dla najmłodszych.",
};

const images = [
  {
    src: "/sliders/sliczna-slider/sl1.jpg",
    alt: "Zdjęcie ze środka Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl2.jpg",
    alt: "Zdjęcie ze środka Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl3.jpg",
    alt: "Zdjęcie ze środka Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl5.jpg",
    alt: "Zdjęcie Placu zabaw Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl6.jpg",
    alt: "Zdjęcie ze środka Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl7.jpg",
    alt: "Zdjęcie Placu zabaw Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl8.jpg",
    alt: "Zdjęcie Placu zabaw Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl9.jpg",
    alt: "Zdjęcie Placu zabaw Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl10.jpg",
    alt: "Zdjęcie ze środka Żłobka Wesołych Wygibasów na ulicy Ślicznej w Krakowie",
  },
];

export default function sliczna() {
  return (
    <>
      <div className={classes.outsideContainer}>
        <div className={classes.baner}>
          <div className={classes.leftContainer}>
            <div>
              <h1>Żłobek Wesołe Wygibasy na Ślicznej 36A w Krakowie</h1>
              <p>
                Szukasz nowoczesnego i bezpiecznego żłobka w Krakowie? Wesołe
                Wygibasy na ul. Ślicznej 36A oferują profesjonalną opiekę,
                troskliwy zespół oraz własny plac zabaw do rozwoju Twojego
                dziecka. Skontaktuj się z nami i zapisz malucha już dziś!
              </p>
              <div className={classes.buttonContainer}>
                <Link href="/o-nas">
                  <Button
                    background="#fa7070"
                    text="O nas"
                    fontSize="1rem"
                  />
                </Link>
                <Link href="/zapisy">
                  <Button background="#7C99E5" text="Zapisy" fontSize="1rem" />
                </Link>
              </div>
            </div>
            <div className={classes.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7235912933816!2d19.971400476463828!3d50.07273797152256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b12ffd809d1%3A0xb7bd3a74fd82210c!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711814374339!5m2!1spl!2spl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.description}>
          <h2>Żłobek Wesołe Wygibasy - ul. Śliczna 36A, Kraków</h2>
          <p>
            <span>Wesołe Wygibasy</span> to nasza czwarta placówka
            niepublicznych żłobków w Krakowie, zlokalizowana przy{" "}
            <span> ul. Ślicznej 36A, 31-444 Kraków</span>. Tworzymy przyjazne i
            bezpieczne miejsca dla dzieci, kierując się pasją oraz
            zaangażowaniem, aby zapewnić Twojemu maluchowi jak najlepszą opiekę.
            Nasz nowoczesny żłobek oferuje 39 miejsc w przestronnych,
            komfortowych i bezpiecznych warunkach.
          </p>
          <h2>Komfort i nowoczesność w Żłobku Wesołe Wygibasy</h2>
          <p>
            Otwartą w 2024 roku placówkę zaprojektowaliśmy z myślą o
            bezpieczeństwie i wygodzie najmłodszych. Nasz żłobek przy ul.
            Ślicznej dysponuje dwiema dużymi salami o powierzchni
            <span> 54 m² i 57 m²</span>, które są wyposażone w nowoczesne
            systemy, takie jak <span> rekuperacja </span> zapewniająca dzieciom
            dostęp do świeżego i czystego powietrza przez cały dzień.
          </p>
          <h3>Grupy wiekowe w naszym Żłobku</h3>
          <ul>
            <li>
              <span>Tuptusie</span> - młodsza grupa dla dzieci do ok. 22
              miesiąca życia.
            </li>
            <li>
              <span>Wygibaski</span> - starsza grupa dla dzieci do 3 lat.
            </li>
            <p>
              Nad bezpieczeństwem i rozwojem maluchów czuwa zespół{" "}
              <span> 6 wykwalifikowanych opiekunów</span>, którzy zapewniają
              troskliwą opiekę i dbają o wszechstronny rozwój każdego dziecka.
            </p>
          </ul>
          <h2>Atrakcje i udogodnienia</h2>
          <ul>
            <li>
              Nowoczesny, ogrodzony <span> plac zabaw</span>, który zapewnia
              bezpieczną zabawę na świeżym powietrzu.
            </li>
            <li>
              Zielony <span>teren rekreacyjny</span>, idealny na spacery i
              zabawy na świeżym powietrzu.
            </li>
            <li>
              Bezpieczne, <span>6-osobowe wózki spacerowe</span>, dzięki którym
              codzienne spacery z dziećmi są komfortowe i bezpieczne.
            </li>
          </ul>
        </div>
        <SliderComponent images={images} />

        <h3>
          Czesne w całości pokrywane z projektu maluch + 2022 2029 oraz dotacji
          urzędu miasta Kraków
        </h3>
        <div className={classes.buttonContainer}>
          <Link href="/cennik-i-jadlospis-w-zlobku">
            <Button text="Cennik & Jadłospis" fontSize="1rem" />
          </Link>
          <Link href="/zapisy">
            <Button text="Zapisy" fontSize="1rem" background="#7C99E5" />
          </Link>
        </div>
        <DaySchedule header="Plan Dnia" time="17:30" />
        <div className={classes.galleryContainer}>
          <h2>Galeria</h2>
          <p className={classes.galleryText}>
            Przekonajcie się sami, jak radośnie i twórczo spędzają czas Wasze
            maluszki w naszym żłobku „Wesołe Wygibasy” w Krakowie.
            <br></br>
            Zapraszamy do obejrzenia tych pięknych chwil, które pokazują miłość,
            radość i rozwój naszych dzieci. <br></br> Zdjęcia ukazują różnorodne
            wydarzenia i chwile z życia maluszków w naszej placówce.
          </p>

          <ImagesContainer folder="sliczna" />
        </div>
      </div>
    </>
  );
}
