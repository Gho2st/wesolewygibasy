"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
    <div className="min-h-screen px-8 sm:px-12 py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-medium mb-12 pt-16 text-center">
        Bliskość Parku i Natury
      </h2>
      <p className="text-xl text-center max-w-4xl mb-12 px-2">
        Nasz żłobek znajduje się w bezpośrednim sąsiedztwie{" "}
        <span className="font-semibold">Parku Łokietka</span> w Krakowie, w
        otoczeniu zieleni i spokoju. To idealne miejsce, gdzie dzieci mogą
        codziennie obcować z naturą, bawić się na świeżym powietrzu i korzystać
        z uroków pobliskiego parku. Bliskość zielonych terenów sprawia, że każdy
        dzień w żłobku to mała przygoda na łonie natury.
      </p>

      <div className="w-full mt-16 relative">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <Image
                src={image.src}
                height={image.height || 550}
                width={image.width || 450}
                layout="responsive"
                className="rounded-2xl"
                alt={image.alt || "Zdjęcie parku"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
