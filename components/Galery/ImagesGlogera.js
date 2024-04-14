"use client";
import ImagesItem from "./ImageItem";
import classes from "./ImagesGlogera.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function ImagesContainer() {
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
          href="/zlobki/glogera/angielski"
          src="/galeria/glogera/angielski/angielski.jpg"
          text="Angielski"
        />
        <ImagesItem
          href="/zlobki/glogera/balwanki"
          src="/galeria/glogera/balwanki/balwanki.jpeg"
          text="Bałwanki"
        />
        <ImagesItem
          href="/zlobki/glogera/czapki-i-maski"
          src="/galeria/glogera/czapki-i-maski/czapki-i-maski.jpeg"
          text="Czapki i Maski"
        />
        <ImagesItem
          href="/zlobki/glogera/deszczowa-chmura"
          src="/galeria/glogera/deszczowa-chmura/deszczowa-chmura.jpeg"
          text="Deszczowa Chmura"
        />
        <ImagesItem
          href="/zlobki/glogera/dogoterapia"
          src="/galeria/glogera/dogoterapia/dogoterapia.jpg"
          text="Dogoterapia"
        />
        <ImagesItem
          href="/zlobki/glogera/dzien-pizzy"
          src="/galeria/glogera/dzien-pizzy/dzien-pizzy.jpg"
          text="Dzień Pizzy"
        />
        <ImagesItem
          href="/zlobki/glogera/dzien-przyjazni"
          src="/galeria/glogera/dzien-przyjazni/dzien-przyjazni.jpg"
          text="Dzień Przyjaźni"
        />
        <ImagesItem
          href="/zlobki/glogera/kolorowe-kredki"
          src="/galeria/glogera/kolorowe-kredki/kolorowe-kredki.jpeg"
          text="Kolorowe Kredki"
        />
        <ImagesItem
          href="/zlobki/glogera/kuleczki-babeczki"
          src="/galeria/glogera/kuleczki-babeczki/kuleczki-babeczki.jpg"
          text="Kuleczki i Babeczki"
        />
        <ImagesItem
          href="/zlobki/glogera/mikolaj"
          src="/galeria/glogera/mikolaj/mikolaj.jpeg"
          text="Mikołaj"
        />
        <ImagesItem
          href="/zlobki/glogera/muzyka-klasyczna"
          src="/galeria/glogera/muzyka-klasyczna/muzyka-klasyczna.jpeg"
          text="Muzyka Klasyczna"
        />
        <ImagesItem
          href="/zlobki/glogera/nalesniki"
          src="/galeria/glogera/nalesniki/nalesniki.jpg"
          text="Naleśniki"
        />
        <ImagesItem
          href="/zlobki/glogera/pani-choinka"
          src="/galeria/glogera/pani-choinka/pani-choinka.jpeg"
          text="Pani Choinka"
        />
        <ImagesItem
          href="/zlobki/glogera/pierniczki"
          src="/galeria/glogera/pierniczki/pierniczki.jpeg"
          text="Pierniczki"
        />
        <ImagesItem
          href="/zlobki/glogera/ptaszki-zima"
          src="/galeria/glogera/ptaszki-zima/ptaszki-zima.jpeg"
          text="Ptaszki Zimą"
        />
        <ImagesItem
          href="/zlobki/glogera/rytmika"
          src="/galeria/glogera/rytmika/rytmika.jpg"
          text="Rytmika"
        />
        <ImagesItem
          href="/zlobki/glogera/ulubiona-zabawa"
          src="/galeria/glogera/ulubiona-zabawa/ulubiona-zabawa.jpeg"
          text="Ulubiona Zabawa"
        />
        <ImagesItem
          href="/zlobki/glogera/zimowa-kraina"
          src="/galeria/glogera/zimowa-kraina/zimowa-kraina.jpeg"
          text="Zimowa Kraina"
        />
        <ImagesItem
          href="/zlobki/glogera/zyczenia"
          src="/galeria/glogera/zyczenia/zyczenia.jpeg"
          text="Życzenia"
        />
        <ImagesItem
          href="/zlobki/glogera/uczymy-sie-kolorow"
          src="/galeria/glogera/uczymy-sie-kolorow/uczymy-sie-kolorow.jpg"
          text="Uczymy się kolorów"
        />
        <ImagesItem
          href="/zlobki/glogera/nasi-marcowi-jubilaci"
          src="/galeria/glogera/nasi-marcowi-jubilaci/nasi-marcowi-jubilaci.jpg"
          text="Nasi marcowi Jubilaci"
        />
        <ImagesItem
          href="/zlobki/glogera/pani-wiosna"
          src="/galeria/glogera/pani-wiosna/pani-wiosna.jpg"
          text="Pani Wiosna"
        />
        <ImagesItem
          href="/zlobki/glogera/dbamy-o-zabki"
          src="/galeria/glogera/dbamy-o-zabki/dbamy-o-zabki.jpg"
          text="Dbamy o Ząbki"
        />
      </Slider>
    </div>
  );
}
