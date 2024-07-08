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
      </Slider>
    </div>
  );
}
