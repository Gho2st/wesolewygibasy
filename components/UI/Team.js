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
    <div className={classes.container}>
      <h3>{props.place}</h3>

      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/vetulaniego/anna.jpg"
          name="Anna Jargosz"
          role="Kierownik, Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi dużo radości, a ich szczery uśmiech sprawia że nie wyobrażam sobie innej pracy."
        />
        <TeamMember
          src="/team/vetulaniego/elzbieta.jpg"
          name="Elzbieta Kotaś"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi od zawsze była moim marzeniem.
                  Spędzanie czasu z dziećmi oraz uczestnictwo w ich rozwoju przynosi mi wiele radości"
        />
        <TeamMember
          src="/team/vetulaniego/gabriela.jpeg"
          name="Gabriela Chamioło"
          role="Opiekunka Dziecięca"
          quote="Lubię pracę z dziećmi ,daje mi dużo satysfakcji i moc energi. Te małe istotki mają w sobie tyle radości ,że a miło z nimi pracować ."
        />
        <TeamMember
          src="/team/vetulaniego/hajduga.jpeg"
          name="Elżbieta Hajduga"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi od zawsze była dla mnie inspiracją i ciekawościa... Dzieci daja mi  energię siłę do działania."
        />
      </Slider>
    </div>
  );
}

export function TeamStanczyka(props) {
  const carouselSettings = {
    dots: true,
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
        <TeamMember
          src="/team/stanczyka/teresa.jpeg"
          name="Teresa Ibek"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi z parawami wiele radości i daje ogromną satysfakcję"
        />
      </Slider>
    </div>
  );
}

export function TeamGlogera(props) {
  const carouselSettings = {
    dots: true,
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
          name="Justyna Gąsiorek"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi energię i radość z życia."
        />
        <TeamMember
          src="/team/glogera/ewelina.jpeg"
          name="Ewelina Bryła"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi jest moją pasją. Dużo satysfakcji przynosi mi obserwowanie jak każdy z tych małych ludzi na moich oczach rozwija się, poznaje nowe pojęcia, nawyki. Im więcej z siebie daję, tym więcej otrzymuję. W dzieciach zachwyca mnie ich szczerość i ciekawość świata."
        />
        <TeamMember
          src="/team/glogera/ania.jpeg"
          name="Anna Gamrat"
          role="Opiekunka Dziecięca"
          quote="Jestem mamą 2 dzieci ,uwielbiam wędrówki po górach .Wielką radość sprawia mi pokazywanie dzieciom świata ,a bezpieczeństwo i prawidłowy rozwój  mi powierzonych mi dzieci jest dla mnie priorytetem."
        />
        <TeamMember
          src="/team/glogera/marzena.jpeg"
          name="Marzena Kruczek"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi wiele satysfakcji przede wszystkim wtedy, gdy dzieci odwdzieczają się radością i zaufaniem."
        />
        <TeamMember
          src="/team/glogera/wiktoria.jpeg"
          name="Wiktoria Kik"
          role="Opiekunka Dziecięca"
          quote=""
        />
      </Slider>
    </div>
  );
}

export function TeamSliczna(props) {
  const carouselSettings = {
    dots: true,
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
    <div className={classes.container}>
      <h3>{props.place}</h3>
      <Slider {...carouselSettings} className={classes.slider}>
        <TeamMember
          src="/team/sliczna/natalia.jpeg"
          name="Natalia Swatek"
          role="Kierownik, Opiekunka Dziecięca"
          quote="Uśmiech dzieci potrafi przynieść ulgę w nawet najtrudniejszych momentach."
        />
        <TeamMember
          src="/team/sliczna/alicja.jpeg"
          name="Alicja Pacułt"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi jest dla mnie pasjonującym wyzwaniem, które każdego dnia przynosi nowe doświadczenia i radość. Obserwowanie, jak dzieci rozwijają swoje umiejętności i zyskują pewność siebie, daje mi ogromną satysfakcję i motywację do dalszej pracy. Staram się tworzyć środowisko, w którym każde dziecko czuje się bezpieczne, kochane i zainspirowane do odkrywania świata."
        />
        <TeamMember
          src="/team/sliczna/monika.jpeg"
          name="Monika Gruszecka"
          role="Opiekunka Dziecięca"
          quote="Praca z dziećmi daje mi dużo radości a ich uśmiech jest dla mnie codzienną dawka energii."
        />
        <TeamMember
          src="/team/sliczna/zuzanna.jpeg"
          name="Zuzanna Białek"
          role="Opiekunka Dziecięca"
          quote="Jestem pełna entuzjazmu opiekunką, która uwielbia spędzać czas z dziećmi i wspierać ich rozwój. Każdego dnia uczę się czegoś nowego od naszych maluchów i staram się wprowadzać do ich życia radość i uśmiech. Moim celem jest tworzenie ciepłego i bezpiecznego środowiska, w którym dzieci mogą się rozwijać i być szczęśliwe."
        />
        <TeamMember
          src="/team/sliczna/joanna.jpeg"
          name="Joanna Dyląg"
          role="Opiekunka Dziecięca"
          quote="Uwielbiam prace z dziećmi. Radość dziecka jest dla mnie wielka nagrodą. W dzieciach zachwyca mnie ich szczerosc i ciekawosc swiata."
        />
      </Slider>
    </div>
  );
}
