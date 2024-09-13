import classes from "./Reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../components/UI/Stars";
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
    <article className={classes.wrapper}>
      <div className={classes.container}>
        <h2>
          <span>Żłobek Wesołe Wygibasy</span> w Krakowie - ponad
          <motion.div ref={counterRef} className={classes.counter}>
            {rounded === 0 ? 91 : rounded}
          </motion.div>
          zadowolonych klientów! Ocena 4.9/5!
        </h2>
        <p className={classes.description}>
          Dołącz do grona naszych zadowolonych klientów. Sprawdź, co mówią o nas
          inni!
        </p>
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
                <h6>Marta Bubak</h6>
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
                <h6>Aleksandra Gaweł</h6>
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
                <h6>Anita</h6>
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
                <h6>Diana Urszula</h6>
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
                <h6>Anna Błaszkiewicz</h6>
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
                <h6>Joanna Godlewska</h6>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </article>
  );
}
