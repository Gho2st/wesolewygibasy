"use client";
import TeamMember from "./TeamMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

const CustomArrow = ({
  className,
  onClick,
  rotate = false,
  position = "left",
}) => (
  <div
    className={`absolute cursor-pointer top-1/2 transform -translate-y-1/2 z-10 ${
      position === "left" ? "left-4" : "right-4"
    } 
      max-[1215px]:${position === "left" ? "left-1" : "right-1"} 
      max-[465px]:${position === "left" ? "left-2" : "right-2"}`}
    onClick={onClick}
    style={{ transform: `translateY(-50%) ${rotate ? "rotate(180deg)" : ""}` }}
  >
    <IoIosArrowForward className="text-black text-3xl" />
  </div>
);

const commonSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  nextArrow: <CustomArrow position="right" />,
  prevArrow: <CustomArrow rotate={true} position="left" />,
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

function TeamSection({ place, members }) {
  return (
    <div className="mb-24">
      <h3 className="text-center font-bold text-xl mt-12 mb-12 xl:text-3xl">
        {place}
      </h3>
      <div className="w-full relative mx-auto ">
        <Slider {...commonSettings}>
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function TeamVetulaniego(props) {
  return (
    <TeamSection
      place={props.place}
      members={[
        {
          src: "/team/vetulaniego/anna.jpg",
          name: "Anna Jargosz",
          role: "Kierownik, Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi daje mi dużo radości, a ich szczery uśmiech sprawia że nie wyobrażam sobie innej pracy.",
        },
        {
          src: "/team/vetulaniego/elzbieta.jpg",
          name: "Elzbieta Kotaś",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi od zawsze była moim marzeniem. Spędzanie czasu z dziećmi oraz uczestnictwo w ich rozwoju przynosi mi wiele radości",
        },
        {
          src: "/team/vetulaniego/gabriela.jpeg",
          name: "Gabriela Chamioło",
          role: "Opiekunka Dziecięca",
          quote:
            "Lubię pracę z dziećmi ,daje mi dużo satysfakcji i moc energi. Te małe istotki mają w sobie tyle radości ,że a miło z nimi pracować .",
        },
      ]}
    />
  );
}

export function TeamStanczyk(props) {
  return (
    <TeamSection
      place={props.place}
      members={[
        {
          src: "/team/stanczyka/beata.jpg",
          name: "Beata Orczyk",
          role: "Kierownik, Opiekunka Dziecięca",
          quote:
            "Wieloletnia praca z dziećmi, daje mi codzienną dawkę energii i optymizmu. Patrzenie jak mały człowiek rośnie i się rozwija jest niezmiennie ogromnie satysfakcjonujące",
        },
        {
          src: "/team/stanczyka/dorota.jpg",
          name: "Dorota Chmielek",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi jest treścią mojego życia, zachwyca mnie ich ciekawość i rozwój.",
        },
        {
          src: "/team/stanczyka/tetiana.jpg",
          name: "Tetiana Shkrab",
          role: "Opiekunka Dziecięca",
          quote:
            "Uśmiech dzieci sprawia ,że sama się śmieję. Uwielbiam patrzeć jak rosną i się rozwijają.",
        },
        {
          src: "/team/stanczyka/noemi.jpg",
          name: "Noemi Filus",
          role: "Opiekunka Dziecięca",
          quote: "Od dzieci codziennie zarażam się radością i energią.",
        },
        {
          src: "/team/stanczyka/teresa.jpeg",
          name: "Teresa Ibek",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi z parawami wiele radości i daje ogromną satysfakcję",
        },
      ]}
    />
  );
}

export function TeamGlogera(props) {
  return (
    <TeamSection
      place={props.place}
      members={[
        {
          src: "/team/glogera/ewa.jpeg",
          name: "Ewa Meddour",
          role: "Kierownik, Opiekunka, Mama 2 dzieci, Technolog Żywności",
          quote:
            "W pracy z dziećmi odnajduje wiele satysfakcji oraz radości. Każdego dnia mam możliwość uczestniczenia w bardzo ważnym okresie kształtowania się i rozwoju małego człowieka.",
        },
        {
          src: "/team/glogera/justyna.jpg",
          name: "Justyna Gąsiorek",
          role: "Opiekunka Dziecięca",
          quote: "Praca z dziećmi daje mi energię i radość z życia.",
        },
        {
          src: "/team/glogera/ewelina.jpeg",
          name: "Ewelina Bryła",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi jest moją pasją. Dużo satysfakcji przynosi mi obserwowanie jak każdy z tych małych ludzi na moich oczach rozwija się, poznaje nowe pojęcia, nawyki. Im więcej z siebie daję, tym więcej otrzymuję. W dzieciach zachwyca mnie ich szczerość i ciekawość świata.",
        },
        {
          src: "/team/glogera/ania.jpeg",
          name: "Anna Gamrat",
          role: "Opiekunka Dziecięca",
          quote:
            "Jestem mamą 2 dzieci ,uwielbiam wędrówki po górach .Wielką radość sprawia mi pokazywanie dzieciom świata ,a bezpieczeństwo i prawidłowy rozwój  mi powierzonych mi dzieci jest dla mnie priorytetem.",
        },
        {
          src: "/team/glogera/marzena.jpeg",
          name: "Marzena Kruczek",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi daje mi wiele satysfakcji przede wszystkim wtedy, gdy dzieci odwdzieczają się radością i zaufaniem.",
        },
        {
          src: "/team/glogera/wiktoria.jpeg",
          name: "Wiktoria Kik",
          role: "Opiekunka Dziecięca",
          quote: "",
        },
      ]}
    />
  );
}

export function TeamSliczna(props) {
  return (
    <TeamSection
      place={props.place}
      members={[
        {
          src: "/team/sliczna/natalia.jpeg",
          name: "Natalia Swatek",
          role: "Kierownik, Opiekunka Dziecięca",
          quote:
            "Uśmiech dzieci potrafi przynieść ulgę w nawet najtrudniejszych momentach.",
        },
        {
          src: "/team/sliczna/alicja.jpeg",
          name: "Alicja Pacułt",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi jest dla mnie pasjonującym wyzwaniem, które każdego dnia przynosi nowe doświadczenia i radość...",
        },
        {
          src: "/team/sliczna/monika.jpeg",
          name: "Monika Gruszecka",
          role: "Opiekunka Dziecięca",
          quote:
            "Praca z dziećmi daje mi dużo radości a ich uśmiech jest dla mnie codzienną dawka energii.",
        },
        {
          src: "/team/sliczna/zuzanna.jpeg",
          name: "Zuzanna Białek",
          role: "Opiekunka Dziecięca",
          quote:
            "Jestem pełna entuzjazmu opiekunką, która uwielbia spędzać czas z dziećmi i wspierać ich rozwój...",
        },
        {
          src: "/team/sliczna/joanna.jpeg",
          name: "Joanna Dyląg",
          role: "Opiekunka Dziecięca",
          quote:
            "Uwielbiam prace z dziećmi. Radość dziecka jest dla mnie wielka nagrodą. W dzieciach zachwyca mnie ich szczerosc i ciekawosc swiata.",
        },
      ]}
    />
  );
}
