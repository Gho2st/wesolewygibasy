"use client";
import classes from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function SliderComponent({ images }) {
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
      <h2>Obejrzyj Nasz Żłobek</h2>
      <p>
        Zapraszamy do obejrzenia naszej placówki <span>Wesołe Wygibasy</span> w
        Krakowie! Nasz żłobek oferuje przyjazne i bezpieczne środowisko, w
        którym dzieci mogą swobodnie się rozwijać, bawić i uczyć. Dbamy o to,
        aby każde dziecko czuło się u nas jak w domu – otoczone opieką, ciepłem
        i troską wykwalifikowanego personelu. Poniżej możesz zobaczyć zdjęcia
        naszego żłobka, która pozwoli Ci zapoznać się z wnętrzami, salami zabaw
        oraz przestrzenią, w której codziennie odbywają się ciekawe zajęcia.
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
