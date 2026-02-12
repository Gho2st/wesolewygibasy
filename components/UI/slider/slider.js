"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SliderComponent({ images, title, description }) {
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
    <div className="px-[7%] pb-16">
      <h2 className="text-3xl sm:text-4xl font-medium mb-12 pt-16 text-center">
        {title}
      </h2>
      <p className="text-xl text-center max-w-4xl mb-12 px-2">{description}</p>
      <div className="w-full mt-16">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <Image
                src={image.src}
                height={image.height || 550}
                width={image.width || 450}
                layout="responsive"
                className="rounded-2xl"
                alt={image.alt || "Slider Image"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
