"use client";
import ImagesItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
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
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <Slider {...carouselSettings} className={classes.slider}>
        <ImagesItem
          href="/zlobek-na-ulicy-stanczyka/spotkanie-z-mikolajem"
          src="/galeria/stanczyka/spotkanie-z-mikolajem/mikolaj.jpeg"
          text="Spotkanie z Mikołajem"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-stanczyka/Dzien-Guzika"
          src="/galeria/stanczyka/Dzien-Guzika/Dzien-Guzika.jpeg"
          text="Dzień Guzika"
        />
        <ImagesItem
          src="/galeria/stanczyka/radosc/radosc.jpg"
          text="Radość"
          href="/zlobek-na-ulicy-stanczyka/radosc"
        />
        <ImagesItem
          src="/galeria/stanczyka/dogoterapia/dogoterapia.jpeg"
          text="Dogoterapia"
          href="/zlobek-na-ulicy-stanczyka/dogoterapia"
        />
        <ImagesItem
          src="/galeria/stanczyka/bal-andrzejkowy/bal-andrzejkowy.jpeg"
          text="Bal Andrzejkowy"
          href="/zlobek-na-ulicy-stanczyka/bal-andrzejkowy"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-czarnego-kota/dzien-czarnego-kota.jpeg"
          text="Dzień Czarnego Kota"
          href="/zlobek-na-ulicy-stanczyka/dzien-czarnego-kota"
        />
        <ImagesItem
          src="/galeria/stanczyka/dogoterapia-z-chmurka/dogoterapia-z-chmurka.jpeg"
          text="Dogoterapia z Chmurką"
          href="/zlobek-na-ulicy-stanczyka/dogoterapia-z-chmurka"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-kolorowej-kredki/dzien-kolorowej-kredki.jpeg"
          text="Dzień kolorowej kredki"
          href="/zlobek-na-ulicy-stanczyka/dzien-kolorowej-kredki"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-niepodleglosci/dzien-niepodleglosci.jpg"
          text="Dzień Niepodległości"
          href="/zlobek-na-ulicy-stanczyka/dzien-niepodleglosci"
        />
        <ImagesItem
          src="/galeria/stanczyka/Dzien-puchatka/Dzien-puchatka.jpeg"
          text="Dzień Puchatka"
          href="/zlobek-na-ulicy-stanczyka/Dzien-Puchatka"
        />
        <ImagesItem
          src="/galeria/stanczyka/gordonki/gordonki.jpeg"
          text="Gordonki"
          href="/zlobek-na-ulicy-stanczyka/gordonki"
        />
        <ImagesItem
          src="/galeria/stanczyka/logopedia/logopedia.jpeg"
          text="Logopedia"
          href="/zlobek-na-ulicy-stanczyka/logopedia"
        />
        <ImagesItem
          src="/galeria/stanczyka/muzyczny-swiat/muzyczny-swiat.jpeg"
          text="Muzyczny Świat"
          href="/zlobek-na-ulicy-stanczyka/muzyczny-świat"
        />
        <ImagesItem
          src="/galeria/stanczyka/pingwinki/pingwinki.jpeg"
          text="Pingwinki"
          href="/zlobek-na-ulicy-stanczyka/pingwinki"
        />
        <ImagesItem
          src="/galeria/stanczyka/rytmika-gordonki/rytmika-gordonki.jpeg"
          text="Rytmika/Gordonki"
          href="/zlobek-na-ulicy-stanczyka/rytmika-gordonki"
        />
        <ImagesItem
          src="/galeria/stanczyka/sesja-swiateczna/sesja-swiateczna.jpeg"
          text="Sesja Świąteczna"
          href="/zlobek-na-ulicy-stanczyka/sesja-swiateczna"
        />
        <ImagesItem
          src="/galeria/stanczyka/zajecia-kulinarne/zajecia-kulinarne.jpeg"
          text="Zajęcia Kulinarne"
          href="/zlobek-na-ulicy-stanczyka/zajecia-kulinarne"
        />
      </Slider>
    </div>
  );
}
