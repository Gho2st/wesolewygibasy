"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../components/UI/Stars";
import Button from "../UI/Button";
import { IoIosArrowForward } from "react-icons/io";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reviews() {
  const count = useMotionValue(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, 91, { duration: 4 });
    }
  }, [isInView]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",

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
    <section className="py-16 overflow-x-hidden bg-white">
      <div className="px-[9%]">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
            Rodzice nam <span className="text-primary">ufają</span> - ocena
            4.9/5!
          </h2>
          <p className="mt-4 text-lg xl:text-xl font-normal max-w-3xl mx-auto text-gray-700">
            Dzięki troskliwej opiece i wysokiemu standardowi edukacji zdobyliśmy
            uznanie wielu rodzin w Krakowie. Nasze pozytywne opinie są
            najlepszym dowodem na jakość naszych usług.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href="https://g.page/r/CVSRHQIb-HkkEBM/review"
              text="Zostaw opinię!"
            />
          </div>
        </div>

        <div className="mt-12 px-[3%] sm:px-[5%]">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center flex flex-col justify-between h-full">
                  <div className="flex justify-center mb-6">
                    <Stars />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-800">
                    {review.text}
                  </p>
                  <div className="h-px w-full bg-black mt-6"></div>
                  <p className="mt-4 font-semibold text-lg text-[#094d57]">
                    {review.author}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    author: "Marta Bubak",
    text: "Synek zaczal przygode z placowka w wieku 11 miesiecy i chodzil przez rok. Zakonczylismy wspolprace tylko dlatego ze sie przeprowadzalismy. Gorąco polecam to miejsce. Dzieci sa super zaopiekowane a zlobek bardzo dobrze zaopatrzony. Dzieciaki maja mnostwo atrakcji... Polecam!",
  },
  {
    author: "Aleksandra Gaweł",
    text: "Córka uśmiechnięta od ucha do ucha , wyciągająca ręce do Cioć - lepszej rekomendacji nie można sobie zamarzyć. Przyjazna atmosfera, bezpieczeństwo , komfort, indywidualne podejście do każdego dzieciaczki...",
  },
  {
    author: "Anita",
    text: "Wesołe Wygibasy to wspaniałe miejsce dla maluszków. Panie są serdeczne i ciepłe, dziecko szybko się adaptuje i z miłą chęcią biegnie do sali. Są zajęcia dodatkowe, zaplanowana aktywność i pyszne jedzenie.",
  },
  {
    author: "Diana Urszula",
    text: "Wspaniały żlobek, dzięki któremu syn rewelacyjnie się rozwijał! Nigdy nie martwiłam się o jego rozwój ani bezpieczeństwo. Panie bardzo empatyczne i serdeczne do dzieci! Gorąco polecam! ❤",
  },
  {
    author: "Anna Błaszkiewicz",
    text: "Żłobek, któremu daję 6 gwiazdek. Fantastyczne ciocie, bezpieczne miejsce, świetne zajęcia (angielski, rytmika, dogoterapia, dni tematyczne)... Mój synek uwielbia to miejsce!",
  },
  {
    author: "Joanna Godlewska",
    text: "Wspaniałe, opiekuńcze ciocie ❤️ Synek wraca do domu z uśmiechem 🥰 Żłobek zapewnia dużo atrakcji. Posiłki dobrej jakości i bardzo dobrze rozplanowane.",
  },
];
