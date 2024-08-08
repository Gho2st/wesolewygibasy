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
          href="/zlobek-na-ulicy-glogera/angielski"
          src="/galeria/glogera/angielski/angielski.jpg"
          text="Angielski"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/balwanki"
          src="/galeria/glogera/balwanki/balwanki.jpeg"
          text="Bałwanki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/czapki-i-maski"
          src="/galeria/glogera/czapki-i-maski/czapki-i-maski.jpeg"
          text="Czapki i Maski"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/deszczowa-chmura"
          src="/galeria/glogera/deszczowa-chmura/deszczowa-chmura.jpeg"
          text="Deszczowa Chmura"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dogoterapia"
          src="/galeria/glogera/dogoterapia/dogoterapia.jpg"
          text="Dogoterapia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dzien-pizzy"
          src="/galeria/glogera/dzien-pizzy/dzien-pizzy.jpg"
          text="Dzień Pizzy"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dzien-przyjazni"
          src="/galeria/glogera/dzien-przyjazni/dzien-przyjazni.jpg"
          text="Dzień Przyjaźni"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/kolorowe-kredki"
          src="/galeria/glogera/kolorowe-kredki/kolorowe-kredki.jpeg"
          text="Kolorowe Kredki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/kuleczki-babeczki"
          src="/galeria/glogera/kuleczki-babeczki/kuleczki-babeczki.jpg"
          text="Kuleczki i Babeczki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/mikolaj"
          src="/galeria/glogera/mikolaj/mikolaj.jpeg"
          text="Mikołaj"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/muzyka-klasyczna"
          src="/galeria/glogera/muzyka-klasyczna/muzyka-klasyczna.jpeg"
          text="Muzyka Klasyczna"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/nalesniki"
          src="/galeria/glogera/nalesniki/nalesniki.jpg"
          text="Naleśniki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/pani-choinka"
          src="/galeria/glogera/pani-choinka/pani-choinka.jpeg"
          text="Pani Choinka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/pierniczki"
          src="/galeria/glogera/pierniczki/pierniczki.jpeg"
          text="Pierniczki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/ptaszki-zima"
          src="/galeria/glogera/ptaszki-zima/ptaszki-zima.jpeg"
          text="Ptaszki Zimą"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/rytmika"
          src="/galeria/glogera/rytmika/rytmika.jpg"
          text="Rytmika"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/ulubiona-zabawa"
          src="/galeria/glogera/ulubiona-zabawa/ulubiona-zabawa.jpeg"
          text="Ulubiona Zabawa"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/zimowa-kraina"
          src="/galeria/glogera/zimowa-kraina/zimowa-kraina.jpeg"
          text="Zimowa Kraina"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/zyczenia"
          src="/galeria/glogera/zyczenia/zyczenia.jpeg"
          text="Życzenia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/uczymy-sie-kolorow"
          src="/galeria/glogera/uczymy-sie-kolorow/uczymy-sie-kolorow.jpg"
          text="Uczymy się kolorów"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/nasi-marcowi-jubilaci"
          src="/galeria/glogera/nasi-marcowi-jubilaci/nasi-marcowi-jubilaci.jpg"
          text="Nasi marcowi Jubilaci"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/pani-wiosna"
          src="/galeria/glogera/pani-wiosna/pani-wiosna.jpg"
          text="Pani Wiosna"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dbamy-o-zabki"
          src="/galeria/glogera/dbamy-o-zabki/dbamy-o-zabki.jpg"
          text="Dbamy o Ząbki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/zajecia-muzyczne"
          src="/galeria/glogera/zajecia-muzyczne/zajecia-muzyczne.jpg"
          text="Zajęcia Muzyczne"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dzien-strazaka"
          src="/galeria/glogera/dzien-strazaka/dzien-strazaka.jpg"
          text="Dzień Strazaka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/zajecia-kulinarne"
          src="/galeria/glogera/zajecia-kulinarne/zajecia-kulinarne.jpg"
          text="Zajęcia Kulinarne"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/bieganie"
          src="/galeria/glogera/bieganie/bieganie.jpg"
          text="Bieganie"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/teatrzyk"
          src="/galeria/glogera/teatrzyk/teatrzyk.jpg"
          text="Teatrzyk"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dyplom-samodzielnosci"
          src="/galeria/glogera/dyplom-samodzielnosci/dyplom-samodzielnosci.jpg"
          text="Dyplom Samodzielności"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dzien-dziecka"
          src="/galeria/glogera/dzien-dziecka/dzien-dziecka.jpg"
          text="Dzień Dziecka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/spacer"
          src="/galeria/glogera/spacer/spacer.jpg"
          text="Spacer"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/cuda-natury"
          src="/galeria/glogera/cuda-natury/cuda-natury.jpg"
          text="Cuda Natury"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/robaczki"
          src="/galeria/glogera/robaczki/robaczki.jpg"
          text="Robaczki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/motoryka"
          src="/galeria/glogera/motoryka/motoryka.jpg"
          text="Motoryka"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/swiatla-drogowe"
          src="/galeria/glogera/swiatla-drogowe/swiatla-drogowe.jpg"
          text="Światła Drogowe"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-glogera/dzien-transportu"
          src="/galeria/glogera/dzien-transportu/dzien-transportu.jpg"
          text="Dzień Transportu"
        />
      </Slider>
    </div>
  );
}
