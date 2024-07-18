"use client";
import classes from "./Team.module.css";
import TeamMember from "./TeamMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function TeamVetulaniego(props) {
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
      <h3>{props.place}</h3>

      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/vetulaniego/natalia.jpg"
          name="Natalia Swatek"
          role="Kierownik, Opiekunka Dziecięca"
          quote="Uśmiech dzieci potrafi przynieś ulgę nawet w najtrudniejszych momentach."
        />
        <TeamMember
          src="/team/vetulaniego/agnieszka.jpg"
          name="Agnieszka Kluzek"
          role="Opiekunka Dziecięca"
          quote="Uwielbiam obserwować rozwój dziecka i zdobywanie przez nich nowych umiejętności."
        />
        <TeamMember
          src="/team/vetulaniego/anna.jpg"
          name="Anna Jargosz"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi dużo radości, a ich szczery uśmiech sprawia że nie wyobrażam sobie innej pracy."
        />
        <TeamMember
          src="/team/vetulaniego/elzbieta.jpg"
          name="Elzbieta Kotaś"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi od zawsze była moim marzeniem.
Spędzanie czasu z dziećmi oraz uczestnictwo w ich rozwoju przynosi mi wiele radości"
        />
      </Slider>
    </div>
  );
}

export function TeamStanczyka(props) {
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
      <h3>{props.place}</h3>
      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/stanczyka/beata.jpg"
          name="Beata Orczyk"
          role="Kierownik, Opiekunka Dziecięca"
          quote="Wieloletnia praca z dziećmi, daje mi codzienną dawkę energii i optymizmu. Patrzenie jak mały człowiek rośnie i się rozwija jest niezmiennie ogromnie satysfakcjonujące"
        />
        <TeamMember
          src="/team/stanczyka/dorota.jpg"
          name="Dorota Chmielek"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi jest treścią mojego życia, zachwyca mnie ich ciekawość i rozwój."
        />
        <TeamMember
          src="/team/stanczyka/katarzyna.jpg"
          name="Katarzyna Szczodrak"
          role="Opiekunka Dziecięca"
          quote="Możliwość pracy z Maluszkami sprawia mi wiele radości satysfakcji."
        />
        <TeamMember
          src="/team/stanczyka/tetiana.jpg"
          name="Tetiana Shkrab"
          role="Opiekunka Dziecięca"
          quote="Uśmiech dzieci sprawia ,że sama się śmieję. Uwielbiam patrzeć jak rosną i się rozwijają."
        />
        <TeamMember
          src="/team/stanczyka/noemi.jpg"
          name="Noemi Filus"
          role="Opiekunka Dziecięca"
          quote="Od dzieci codziennie zarażam się radością i energią."
        />
      </Slider>
    </div>
  );
}

export function TeamGlogera(props) {
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
      <h3>{props.place}</h3>
      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/glogera/ewa.jpeg"
          name="Ewa Meddour"
          role="Kierownik, Opiekunka, Mama 2 dzieci, Technolog Żywności"
          quote=" W pracy z dziećmi odnajduje wiele satysfakcji oraz radości. Każdego dnia mam możliwość uczestniczenia w bardzo ważnym okresie kształtowania się i rozwoju małego człowieka."
        />
        <TeamMember
          src="/team/glogera/justyna.jpg"
          name="Justyna Panuś-Szymańska"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi energię i radość z życia."
        />
        <TeamMember
          src="/team/glogera/ewelina.jpeg"
          name="Ewelina Bryła"
          role="Opiekunka Dziecięca"
          quote=""
        />
        <TeamMember
          src="/team/glogera/avatar.jpeg"
          name="Wiktoria Klik"
          role="Opiekunka Dziecięca"
          quote=""
        />
        <TeamMember
          src="/team/glogera/ania.jpeg"
          name="Anna Gamrat"
          role="Opiekunka Dziecięca"
          quote="Jestem mamą 2 dzieci ,uwielbiam wędrówki po górach .Wielką radość sprawia mi pokazywanie dzieciom świata ,a bezpieczeństwo i prawidłowy rozwój  mi powierzonych mi dzieci jest dla mnie priorytetem."
        />
      </Slider>
    </div>
  );
}

export function TeamSliczna(props) {
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
      <h3>{props.place}</h3>
      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/sliczna/ewa.jpeg"
          name="Ewa Meddour"
          role="Kierownik, Opiekunka, Mama 2 dzieci, Technolog Żywności"
          quote=" W pracy z dziećmi odnajduje wiele satysfakcji oraz radości. Każdego dnia mam możliwość uczestniczenia w bardzo ważnym okresie kształtowania się i rozwoju małego człowieka."
        />
      </Slider>
    </div>
  );
}
