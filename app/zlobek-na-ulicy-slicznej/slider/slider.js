"use client";
import classes from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function SliderSliczna() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
      <Slider {...carouselSettings} className={classes.slider}>
        <Image
          src={"/sliczna-slider/sl1.jpg"}
          height={550}
          width={450}
          layout="responsive"
          alt="zdjecie ze srodka zlobka na ulicy slicznej w krakowie"
        />
        <Image
          src={"/sliczna-slider/sl2.jpg"}
          height={550}
          width={450}
          layout="responsive"
          alt="zdjecie ze srodka zlobka na ulicy slicznej w krakowie"
        />
        <Image
          src={"/sliczna-slider/sl3.jpg"}
          height={550}
          width={450}
          layout="responsive"
          alt="zdjecie ze srodka zlobka na ulicy slicznej w krakowie"
        />

        <Image
          src={"/sliczna-slider/sl5.jpg"}
          height={550}
          width={450}
          layout="responsive"
          alt="zdjecie ze srodka zlobka na ulicy slicznej w krakowie"
        />
      </Slider>
    </div>
  );
}
