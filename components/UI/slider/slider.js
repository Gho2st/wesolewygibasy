"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        Obejrzyj Nasz Żłobek
      </h2>
      <p className="text-xl text-center max-w-4xl mb-12 px-2">
        Zapraszamy do obejrzenia naszej placówki{" "}
        <span className="font-semibold">Wesołe Wygibasy</span> w Krakowie! Nasz
        żłobek oferuje przyjazne i bezpieczne środowisko, w którym dzieci mogą
        swobodnie się rozwijać, bawić i uczyć. Dbamy o to, aby każde dziecko
        czuło się u nas jak w domu – otoczone opieką, ciepłem i troską
        wykwalifikowanego personelu. Poniżej możesz zobaczyć zdjęcia naszego
        żłobka, która pozwoli Ci zapoznać się z wnętrzami, salami zabaw oraz
        przestrzenią, w której codziennie odbywają się ciekawe zajęcia.
      </p>
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
