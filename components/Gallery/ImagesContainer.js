"use client";
import ImagesItem from "./ImageItem";
import classes from "./ImagesContainer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function ImagesContainer() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <Slider {...carouselSettings} className={classes.slider}>
        <ImagesItem
          href="/zlobek-na-ulicy-stanczyka/spotkanie-z-mikolajem"
          src="/galeria/stanczyka/spotkanie-z-mikolajem/mikolaj.jpeg"
          text="Spotkanie z Mikołajem"
        />
        <ImagesItem
          href="/zlobek-na-ulicy-stanczyka/dzien-guzika"
          src="/galeria/stanczyka/dzien-guzika/dzien-guzika.jpeg"
          text="Dzień Guzika"
        />
        <ImagesItem
          src="/galeria/stanczyka/radosc/radosc.jpg"
          text="Radość"
          href="/zlobek-na-ulicy-stanczyka/radosc"
        />
        <ImagesItem
          src="/galeria/stanczyka/dogoterapia/dogoterapia.jpeg"
          text="Dogoterapia"
          href="/zlobek-na-ulicy-stanczyka/dogoterapia"
        />
        <ImagesItem
          src="/galeria/stanczyka/bal-andrzejkowy/bal-andrzejkowy.jpeg"
          text="Bal Andrzejkowy"
          href="/zlobek-na-ulicy-stanczyka/bal-andrzejkowy"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-czarnego-kota/dzien-czarnego-kota.jpeg"
          text="Dzień Czarnego Kota"
          href="/zlobek-na-ulicy-stanczyka/dzien-czarnego-kota"
        />
        <ImagesItem
          src="/galeria/stanczyka/dogoterapia-z-chmurka/dogoterapia-z-chmurka.jpeg"
          text="Dogoterapia z Chmurką"
          href="/zlobek-na-ulicy-stanczyka/dogoterapia-z-chmurka"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-kolorowej-kredki/dzien-kolorowej-kredki.jpeg"
          text="Dzień kolorowej kredki"
          href="/zlobek-na-ulicy-stanczyka/dzien-kolorowej-kredki"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-niepodleglosci/dzien-niepodleglosci.jpg"
          text="Dzień Niepodległości"
          href="/zlobek-na-ulicy-stanczyka/dzien-niepodleglosci"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-puchatka/dzien-puchatka.jpeg"
          text="Dzień Puchatka"
          href="/zlobek-na-ulicy-stanczyka/dzien-puchatka"
        />
        <ImagesItem
          src="/galeria/stanczyka/gordonki/gordonki.jpeg"
          text="Gordonki"
          href="/zlobek-na-ulicy-stanczyka/gordonki"
        />
        <ImagesItem
          src="/galeria/stanczyka/logopedia/logopedia.jpeg"
          text="Logopedia"
          href="/zlobek-na-ulicy-stanczyka/logopedia"
        />
        <ImagesItem
          src="/galeria/stanczyka/muzyczny-swiat/muzyczny-swiat.jpeg"
          text="Muzyczny Świat"
          href="/zlobek-na-ulicy-stanczyka/muzyczny-swiat"
        />
        <ImagesItem
          src="/galeria/stanczyka/pingwinki/pingwinki.jpeg"
          text="Pingwinki"
          href="/zlobek-na-ulicy-stanczyka/pingwinki"
        />
        <ImagesItem
          src="/galeria/stanczyka/rytmika-gordonki/rytmika-gordonki.jpeg"
          text="Rytmika/Gordonki"
          href="/zlobek-na-ulicy-stanczyka/rytmika-gordonki"
        />
        <ImagesItem
          src="/galeria/stanczyka/sesja-swiateczna/sesja-swiateczna.jpeg"
          text="Sesja Świąteczna"
          href="/zlobek-na-ulicy-stanczyka/sesja-swiateczna"
        />
        <ImagesItem
          src="/galeria/stanczyka/zajecia-kulinarne/zajecia-kulinarne.jpeg"
          text="Zajęcia Kulinarne"
          href="/zlobek-na-ulicy-stanczyka/zajecia-kulinarne"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-wiosennych-porzadkow/dzien-wiosennych-porzadkow.jpg"
          text="Dzień Wiosennych Porządków"
          href="/zlobek-na-ulicy-stanczyka/zajecia-kulinarne"
        />

        <ImagesItem
          src="/galeria/stanczyka/maly-ogrodnik/maly-ogrodnik.jpg"
          text="Mały Ogrodnik"
          href="/zlobek-na-ulicy-stanczyka/maly-ogrodnik"
        />
        <ImagesItem
          src="/galeria/stanczyka/angielski/angielski.jpg"
          text="Angielski"
          href="/zlobek-na-ulicy-stanczyka/angielski"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-pandy/dzien-pandy.jpg"
          text="Dzień Pandy"
          href="/zlobek-na-ulicy-stanczyka/dzien-pandy"
        />
        <ImagesItem
          src="/galeria/stanczyka/dbamy-o-zabki/dbamy-o-zabki.jpg"
          text="Dbamy o ząbki"
          href="/zlobek-na-ulicy-stanczyka/dbamy-o-zabki"
        />
        <ImagesItem
          src="/galeria/stanczyka/uczymy-sie-kolorow/uczymy-sie-kolorow.jpg"
          text="Uczymy się kolorów"
          href="/zlobek-na-ulicy-stanczyka/uczymy-sie-kolorow"
        />
        <ImagesItem
          src="/galeria/stanczyka/nasi-marcowi-jubilaci/nasi-marcowi-jubilaci.jpg"
          text="Nasi Marcowi Jubilaci"
          href="/zlobek-na-ulicy-stanczyka/nasi-marcowi-jubilaci"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-konia/dzien-konia.jpg"
          text="Dzień Konia"
          href="/zlobek-na-ulicy-stanczyka/dzien-konia"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-marchewki/dzien-marchewki.jpg"
          text="Dzień Marchewki"
          href="/zlobek-na-ulicy-stanczyka/dzien-marchewki"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-strazaka/dzien-strazaka.jpg"
          text="Dzień Strazaka"
          href="/zlobek-na-ulicy-stanczyka/dzien-strazaka"
        />
        <ImagesItem
          src="/galeria/stanczyka/symbole-narodowe/symbole-narodowe.jpg"
          text="Symbole Narodowe"
          href="/zlobek-na-ulicy-stanczyka/symbole-narodowe"
        />
        <ImagesItem
          src="/galeria/stanczyka/recykling/recykling.jpg"
          text="Recykling"
          href="/zlobek-na-ulicy-stanczyka/recykling"
        />
        <ImagesItem
          src="/galeria/stanczyka/spacerek/spacerek.jpg"
          text="Spacerek"
          href="/zlobek-na-ulicy-stanczyka/spacerek"
        />
        <ImagesItem
          src="/galeria/stanczyka/rytmika/rytmika.jpg"
          text="Rytmika"
          href="/zlobek-na-ulicy-stanczyka/rytmika"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-pielegniarki/dzien-pielegniarki.jpg"
          text="Dzień pielęgniarki"
          href="/zlobek-na-ulicy-stanczyka/dzien-pielegniarki"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-dziecka/dzien-dziecka.jpg"
          text="Dzień dziecka"
          href="/zlobek-na-ulicy-stanczyka/dzien-dziecka"
        />
        <ImagesItem
          src="/galeria/stanczyka/doswiadczenia/doswiadczenia.jpg"
          text="Doświadczenia"
          href="/zlobek-na-ulicy-stanczyka/doswiadczenia"
        />
        <ImagesItem
          src="/galeria/stanczyka/spacer/spacer.jpg"
          text="Spacer"
          href="/zlobek-na-ulicy-stanczyka/spacer"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-taty/dzien-taty.jpg"
          text="Dzień Taty"
          href="/zlobek-na-ulicy-stanczyka/dzien-taty"
        />
        <ImagesItem
          src="/galeria/stanczyka/kwiatowy-ogrod/kwiatowy-ogrod.jpg"
          text="Kwiatowy Ogród"
          href="/zlobek-na-ulicy-stanczyka/kwiatowy-ogrod"
        />
        <ImagesItem
          src="/galeria/stanczyka/meduza-klementyna/meduza-klementyna.jpg"
          text="Meduza Klementyna"
          href="/zlobek-na-ulicy-stanczyka/meduza-klementyna"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-psa/dzien-psa.jpg"
          text="Dzień Psa"
          href="/zlobek-na-ulicy-stanczyka/dzien-psa"
        />
        <ImagesItem
          src="/galeria/stanczyka/sensoplastyka/sensoplastyka.jpg"
          text="Lawendowa Sensoplastyka"
          href="/zlobek-na-ulicy-stanczyka/sensoplastyka"
        />
        <ImagesItem
          src="/galeria/stanczyka/dzien-policjanta/dzien-policjanta.jpg"
          text="Dzień Policjanta"
          href="/zlobek-na-ulicy-stanczyka/dzien-policjanta"
        />
        <ImagesItem
          src="/galeria/stanczyka/zaczytani/zaczytani.jpg"
          text="Zaczytani"
          href="/zlobek-na-ulicy-stanczyka/zaczytani"
        />
      </Slider>
    </div>
  );
}
