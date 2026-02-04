"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../components/UI/Stars";
import Button from "../UI/Button";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reviews() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, 91, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, count]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 overflow-hidden bg-slate-50">
      <div className="px-[6%] max-w-7xl mx-auto">
        {/* Header Sekcji */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Najlepsze Żłobki w Krakowie{" "}
              <span className="text-[#4a71ff]">—</span> Ocena 4.9/5
            </h2>
            <p className="mt-4 text-lg lg:text-xl font-light text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dołączyło do nas już setki zadowolonych rodzin. Naszą najlepszą
              wizytówką jest uśmiech dzieci i spokój ich rodziców.
            </p>
          </motion.div>

          {/* Licznik Animowany */}
          <div
            className="mt-8 flex flex-col items-center justify-center"
            ref={counterRef}
          >
            <div className="text-[#4a71ff] text-5xl font-black flex items-center">
              <motion.span>{rounded}</motion.span>
              <span>+</span>
            </div>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-2">
              Pozytywnych opinii w Google
            </p>
          </div>
        </div>

        {/* Slider Opinii */}
        <div className="mt-12 relative">
          <Slider {...settings} className="reviews-slider">
            {reviews.map((review, index) => (
              <div key={index} className="px-3 pb-12">
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 lg:p-10 flex flex-col justify-between h-[400px] lg:h-[450px] transition-all duration-300 hover:shadow-md">
                  <div>
                    <div className="flex justify-start mb-6">
                      <Stars />
                    </div>
                    <p className="text-slate-600 text-base lg:text-lg italic leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#4a71ff] font-bold">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg leading-none mb-1">
                        {review.author}
                      </p>
                      <p className="text-[#08c6c3] text-sm font-semibold uppercase tracking-tighter">
                        Rodzic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA pod sliderem */}
        <div className="mt-12 flex justify-center">
          <Button
            href="https://g.page/r/CVSRHQIb-HkkEBM/review"
            text="Zostaw swoją opinię"
            target="_blank"
          />
        </div>
      </div>

      {/* Styl dla kropek slidera (dodaj do swojego global.css lub tutaj) */}
      <style jsx global>{`
        .reviews-slider .slick-dots li button:before {
          font-size: 12px;
          color: #4a71ff;
        }
        .reviews-slider .slick-dots li.slick-active button:before {
          color: #4a71ff;
        }
      `}</style>
    </section>
  );
}

const reviews = [
  {
    author: "Marta Bubak",
    text: "Synek zaczął przygodę z placówką w wieku 11 miesięcy. Dzieci są super zaopiekowane, a żłobek bardzo dobrze zaopatrzony. Dzieciaki mają mnóstwo atrakcji. Gorąco polecam to miejsce!",
  },
  {
    author: "Aleksandra Gaweł",
    text: "Córka uśmiechnięta od ucha do ucha, wyciągająca ręce do Cioć - lepszej rekomendacji nie można sobie zamarzyć. Przyjazna atmosfera, bezpieczeństwo, komfort i indywidualne podejście.",
  },
  {
    author: "Anita",
    text: "Wspaniałe miejsce dla maluszków. Panie są serdeczne i ciepłe, dziecko szybko się adaptuje i z miłą chęcią biegnie do sali. Są zajęcia dodatkowe, rytmika i pyszne jedzenie.",
  },
  {
    author: "Diana Urszula",
    text: "Wspaniały żłobek, dzięki któremu syn rewelacyjnie się rozwijał! Nigdy nie martwiłam się o jego bezpieczeństwo. Panie bardzo empatyczne i serdeczne! Gorąco polecam! ❤",
  },
  {
    author: "Anna Błaszkiewicz",
    text: "Żłobek na 6 gwiazdek. Fantastyczne ciocie, bezpieczne miejsce, świetne zajęcia (angielski, dogoterapia, dni tematyczne). Mój synek uwielbia to miejsce!",
  },
  {
    author: "Joanna Godlewska",
    text: "Wspaniałe, opiekuńcze ciocie ❤️ Synek wraca do domu z uśmiechem 🥰 Żłobek zapewnia dużo atrakcji. Posiłki dobrej jakości i bardzo dobrze rozplanowane.",
  },
];
