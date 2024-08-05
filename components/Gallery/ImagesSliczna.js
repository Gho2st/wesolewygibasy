"use client";
import ImagesItem from "./ImageItem";
import classes from "./ImagesSliczna.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function ImagesSliczna() {
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
          href="/zlobek-na-ulicy-slicznej/adaptacja"
          src="/galeria/sliczna/adaptacja/adaptacja.jpg"
          text="Adaptacja"
        />

        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/dzien-morza"
          src="/galeria/sliczna/dzien-morza/dzien-morza.jpg"
          text="Dzień Morza"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/plac-zabaw"
          src="/galeria/sliczna/plac-zabaw/plac-zabaw.jpg"
          text="Plac Zabaw"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/dogoterapia"
          src="/galeria/sliczna/dogoterapia/dogoterapia.jpg"
          text="Dogoterapia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/dzien-policjanta"
          src="/galeria/sliczna/dzien-policjanta/dzien-policjanta.jpg"
          text="Dzień Policjanta"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/gordonki"
          src="/galeria/sliczna/gordonki/gordonki.jpg"
          text="Gordonki"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/lodziarnia"
          src="/galeria/sliczna/lodziarnia/lodziarnia.jpg"
          text="Lodziarnia"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/logorytmika"
          src="/galeria/sliczna/logorytmika/logorytmika.jpg"
          text="Logorytmika"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/muzyka-klasyczna"
          src="/galeria/sliczna/muzyka-klasyczna/muzyka-klasyczna.jpg"
          text="Muzyka Klasyczna"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/rytmika-instrumenty"
          src="/galeria/sliczna/rytmika-instrumenty/rytmika-instrumenty.jpg"
          text="Rytmika i Instrumenty"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/spacerujemy"
          src="/galeria/sliczna/spacerujemy/spacerujemy.jpg"
          text="Spacerujemy"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-slicznej/teatrzyk"
          src="/galeria/sliczna/teatrzyk/teatrzyk.jpg"
          text="Teatrzyk"
        />
      </Slider>
    </div>
  );
}
