"use client";
import classes from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function ParkSlider({ images }) {
  const carouselSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
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
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
      <h2>Bliskość Parku i Natury</h2>
      <p>
        Nasz żłobek znajduje się w bezpośrednim sąsiedztwie Parku Łokietka w
        Krakowie, w otoczeniu zieleni i spokoju. To idealne miejsce, gdzie
        dzieci mogą codziennie obcować z naturą, bawić się na świeżym powietrzu
        i korzystać z uroków pobliskiego parku. Bliskość zielonych terenów
        sprawia, że każdy dzień w żłobku to mała przygoda na łonie natury.
      </p>
      <Slider {...carouselSettings} className={classes.slider}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            height={image.height || 550}
            width={image.width || 450}
            layout="responsive"
            alt={image.alt || "Slider Image"}
          />
        ))}
      </Slider>
    </div>
  );
}
