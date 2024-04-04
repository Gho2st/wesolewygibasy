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
          href="/zlobki/vetulaniego/angielski"
          src="/galeria/vetulaniego/angielski/angielski.jpg"
          text="Angielski"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/choinka"
          src="/galeria/vetulaniego/choinka/choinka.jpeg"
          text="Choinka"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/dogoterapia"
          src="/galeria/vetulaniego/dogoterapia/dogoterapia.jpg"
          text="Dogoterapia"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/dzien-niepodleglosci"
          src="/galeria/vetulaniego/dzien-niepodleglosci/dzien-niepodleglosci.jpeg"
          text="Dzień niepodległości"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/dzien-pizzy"
          src="/galeria/vetulaniego/dzien-pizzy/dzien-pizzy.jpg"
          text="Dzień Pizzy"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/dzien-spaghetti"
          src="/galeria/vetulaniego/dzien-spaghetti/dzien-spaghetti.jpeg"
          text="Dzień Spaghetti"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/gordonki"
          src="/galeria/vetulaniego/gordonki/gordonki.jpg"
          text="Gordonki"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/kolory"
          src="/galeria/vetulaniego/kolory/kolory.jpg"
          text="Kolory"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/logopedia"
          src="/galeria/vetulaniego/logopedia/logopedia.jpg"
          text="Logopedia"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/muzyka-klasyczna"
          src="/galeria/vetulaniego/muzyka-klasyczna/muzyka-klasyczna.jpeg"
          text="Muzyka Klasyczna"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/pierniczki"
          src="/galeria/vetulaniego/pierniczki/pierniczki.jpeg"
          text="Pierniczki"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/prezenciki"
          src="/galeria/vetulaniego/prezenciki/prezenciki.jpeg"
          text="Prezenciki"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/sniezne-zabawy"
          src="/galeria/vetulaniego/sniezne-zabawy/sniezne-zabawy.jpeg"
          text="Śniezne Zabawy"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/spacerek"
          src="/galeria/vetulaniego/spacerek/spacerek.jpeg"
          text="Spacerek"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/tlusty-czwartek"
          src="/galeria/vetulaniego/tlusty-czwartek/tlusty-czwartek.jpg"
          text="Tłusty Czwartek"
        />
        <ImagesItem
          href="/zlobki/vetulaniego/walentynki"
          src="/galeria/vetulaniego/walentynki/walentynki.jpg"
          text="Walentynki"
        />
      </Slider>
    </div>
  );
}
