"use client";
import ImagesItem from "./ImageItem";
import classes from "./ImagesVetulaniego.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function ImagesVetulaniego() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    nextArrow: (
      <div>
        <div className={classes.rightArrow}>
          <IoIosArrowForward />
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className={classes.rotate}>
          <IoIosArrowForward />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <Slider {...carouselSettings} className={classes.slider}>
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/angielski"
          src="/galeria/vetulaniego/angielski/angielski.jpg"
          text="Angielski"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/choinka"
          src="/galeria/vetulaniego/choinka/choinka.jpeg"
          text="Choinka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dogoterapia"
          src="/galeria/vetulaniego/dogoterapia/dogoterapia.jpg"
          text="Dogoterapia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-niepodleglosci"
          src="/galeria/vetulaniego/dzien-niepodleglosci/dzien-niepodleglosci.jpeg"
          text="Dzień niepodległości"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-pizzy"
          src="/galeria/vetulaniego/dzien-pizzy/dzien-pizzy.jpg"
          text="Dzień Pizzy"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-spaghetti"
          src="/galeria/vetulaniego/dzien-spaghetti/dzien-spaghetti.jpeg"
          text="Dzień Spaghetti"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/gordonki"
          src="/galeria/vetulaniego/gordonki/gordonki.jpg"
          text="Gordonki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/kolory"
          src="/galeria/vetulaniego/kolory/kolory.jpg"
          text="Kolory"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/logopedia"
          src="/galeria/vetulaniego/logopedia/logopedia.jpg"
          text="Logopedia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/muzyka-klasyczna"
          src="/galeria/vetulaniego/muzyka-klasyczna/muzyka-klasyczna.jpeg"
          text="Muzyka Klasyczna"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/pierniczki"
          src="/galeria/vetulaniego/pierniczki/pierniczki.jpeg"
          text="Pierniczki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/prezenciki"
          src="/galeria/vetulaniego/prezenciki/prezenciki.jpeg"
          text="Prezenciki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/sniezne-zabawy"
          src="/galeria/vetulaniego/sniezne-zabawy/sniezne-zabawy.jpeg"
          text="Śniezne Zabawy"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/spacerek"
          src="/galeria/vetulaniego/spacerek/spacerek.jpeg"
          text="Spacerek"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/tlusty-czwartek"
          src="/galeria/vetulaniego/tlusty-czwartek/tlusty-czwartek.jpg"
          text="Tłusty Czwartek"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/walentynki"
          src="/galeria/vetulaniego/walentynki/walentynki.jpg"
          text="Walentynki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/motylkowo"
          src="/galeria/vetulaniego/motylkowo/motylkowo.jpg"
          text="Motylkowo"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dbamy-o-zabki"
          src="/galeria/vetulaniego/dbamy-o-zabki/dbamy-o-zabki.jpg"
          text="Dbamy o Ząbki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/zegnamy-zime"
          src="/galeria/vetulaniego/zegnamy-zime/zegnamy-zime.jpg"
          text="Żegnamy Zimę"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/swieta-wielkanocne"
          src="/galeria/vetulaniego/swieta-wielkanocne/swieta-wielkanocne.jpg"
          text="Święta Wielkanocne"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/wiosna"
          src="/galeria/vetulaniego/wiosna/wiosna.jpg"
          text="Wiosna"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/maly-ogrodnik"
          src="/galeria/vetulaniego/maly-ogrodnik/maly-ogrodnik.jpg"
          text="Mały Ogrodnik"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-kosmosu"
          src="/galeria/vetulaniego/dzien-kosmosu/dzien-kosmosu.jpg"
          text="Dzień Kosmosu"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-ziemii"
          src="/galeria/vetulaniego/dzien-ziemii/dzien-ziemii.jpeg"
          text="Dzień Ziemii"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/wlasny-ogrod"
          src="/galeria/vetulaniego/wlasny-ogrod/wlasny-ogrod.jpg"
          text="Własny Ogród"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-strazaka"
          src="/galeria/vetulaniego/dzien-strazaka/dzien-strazaka.jpg"
          text="Dzień Strazaka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-pszczoly"
          src="/galeria/vetulaniego/dzien-pszczoly/dzien-pszczoly.jpg"
          text="Dzień Pszczoły"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-dziecka"
          src="/galeria/vetulaniego/dzien-dziecka/dzien-dziecka.jpg"
          text="Dzień Dziecka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/doswiadczenia"
          src="/galeria/vetulaniego/doswiadczenia/doswiadczenia.jpg"
          text="Doświadczenia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-taty"
          src="/galeria/vetulaniego/dzien-taty/dzien-taty.jpg"
          text="Dzień Taty"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/sensoplastyka"
          src="/galeria/vetulaniego/sensoplastyka/sensoplastyka.jpg"
          text="Sensoplastyka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-vetulaniego/dzien-wiatru"
          src="/galeria/vetulaniego/dzien-wiatru/dzien-wiatru.jpg"
          text="Dzień Wiatru"
        />
      </Slider>
    </div>
  );
}
