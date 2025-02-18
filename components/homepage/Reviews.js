import classes from "./Reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../components/UI/Stars";
import Link from "next/link";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";
import { IoIosArrowForward } from "react-icons/io";
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
  const rounded = useTransform(count, Math.round);

  // ref for the counter div
  const counterRef = useRef(null);

  // detect when the counter comes into view
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 91, {
        duration: 4,
      });
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
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h2>Rodzice nam ufają – ocena 4.9/5!</h2>
          <p className={classes.description}>
            Dzięki troskliwej opiece i wysokiemu standardowi edukacji zdobyliśmy
            uznanie wielu rodzin w Krakowie. Nasze pozytywne opinie są
            najlepszym dowodem na jakość naszych usług.
          </p>
          <div className={classes.buttonContainer}>
            <Button
              href="https://g.page/r/CVSRHQIb-HkkEBM/review"
              text="Zostaw opinię!"
            />
          </div>
        </div>
        <div className={classes.reviewContainer}>
          <Slider {...settings} className={classes.slider}>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div className={classes.stars}>
                  <Stars />
                </div>
                <p>
                  Synek zaczal przygode z placowka w wieku 11 miesiecy i chodzil
                  przez rok. Zakonczylismy wspolprace tylko dlatego ze sie
                  przeprowadzalismy. Gorąco polecam to miejsce. Dzieci sa super
                  zaopiekowane a zlobek bardzo dobrze zaopatrzony. Dzieciaki
                  maja mnostwo atrakcji (plastyka, zajecia ruchiowe, rytmika,
                  angielski i nieograniczone pomysly niesamowitych cioć ktore
                  serdecznie pozdrawiam ❣️). Polecam!
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Marta Bubak</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Córka uśmiechnięta od ucha do ucha , wyciągająca ręce do Cioć
                  - lepszej rekomendacji nie można sobie zamarzyć. Przyjazna
                  atmosfera, bezpieczeństwo , komfort, indywidualne podejście do
                  każdego dzieciaczki, ogromne serducho i zaangażowanie Cioć .
                  Najlepsze miejsce dla maluszków !
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Aleksandra Gaweł</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Wesołe Wygibasy to wspaniałe miejsce dla maluszków. Myślę, że
                  niejednemu rodzicowi ciężko jest oddać roczne dziecko w
                  ramiona kogoś innego, a to, jak serdeczne i ciepłe są
                  wszystkie Panie pracujące w tym żłobku, sprawia, że dziecko
                  szybko się adaptuje i z miłą chęcią biegnie do sali. Są tutaj
                  dodatkowe zajęcia, na każdy dzień jest zaplanowana inna
                  aktywność, pyszne posiłki. Bardzo polecam! 🤗
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Anita</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  wspaniały żlobek, dzięki któremu syn rewelacyjnie się
                  rozwijał! To właśnie Wygibasy przekonały mnie do słuszności
                  posyłania dziecka do żłobka. Nigdy nie martwiłam się o jego
                  rozwój ani bezpieczeństwo! Panie bardzo empatyczne i serdeczne
                  do dzieci! Gorąco polecam! ❤
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Diana Urszula</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Żłobek, któremu daję 6 gwiazdek. Fantastyczne ciocie,
                  przytulne, bezpieczne miejsce, świetne zajęcia ( m.in.
                  angielski, rytmika, dogoterapia, dni tematyczne) Wiem że moje
                  dziecko jest dobrze zaopiekowane, a ciocie dbają o nabywanie i
                  doskonalenie umiejętności dzieci. Mój synek uwielbia ciocie i
                  Żłobek- uśmiech i biegiem do dzieci. Czego chcieć
                  więcej🙂🙂🙂🙂
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Anna Błaszkiewicz</p>
              </div>
            </div>
            <div className={classes.reviewItem}>
              <div className={classes.review}>
                <div>
                  <Stars />
                </div>
                <p>
                  Wspaniałe, opiekuńcze ciocie ❤️ Synek zostaje w żłobku i wraca
                  do domu z uśmiechem 🥰 W żłobku dzieci mają zapewnione sporo
                  atrakcji. Posiłki różnorodne, dobrej jakości i bardzo dobrze
                  rozplanowane (śniadanie, II śniadanie, obiad dwudaniowy przed
                  drzemką, podwieczorek).
                </p>
                <div className={classes.line}></div>
                <p className={classes.name}>Joanna Godlewska</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
