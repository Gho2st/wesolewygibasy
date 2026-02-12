import ImagesContainer from "@/components/Gallery/ImagesContainer";
import DaySchedule from "@/components/Info/DayScheduleSliczna";
import SliderComponent from "@/components/UI/slider/slider";
import CardContainer from "@/components/Cards/CardContainer";
import Maluch from "@/components/UI/Maluch";
import Map from "@/components/UI/Map";
import NurseryHeader from "@/components/zlobki/header";
import ZlobkiBaner from "@/components/zlobki/Baner";

export const metadata = {
  title: "Żłobek na Ulicy Ślicznej w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/sliczna",
  },
  description:
    "Żłobek Wesołe Wygibasy w Krakowie – profesjonalna opieka, własny plac zabaw, dofinansowanie Maluch Plus. Zapisz swoje dziecko już dziś!",
};

const images = [
  {
    src: "/sliders/sliczna-slider/sl1.jpg",
    alt: "Wnętrze Żłobka Wesołe Wygibasy na ulicy Ślicznej w Krakowie, placówka dla dzieci",
  },
  {
    src: "/sliders/sliczna-slider/sl2.jpg",
    alt: "Sala zabaw Żłobka Wesołe Wygibasy na Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl3.jpg",
    alt: "Nowoczesne wnętrze Żłobka na ulicy Ślicznej w Krakowie",
  },
  {
    src: "/sliders/sliczna-slider/sl5.jpg",
    alt: "Zielony plac zabaw Żłobka Wesołe Wygibasy w Krakowie na Ślicznej",
  },
  {
    src: "/sliders/sliczna-slider/sl6.jpg",
    alt: "Pokój dziecięcy w Żłobku Wesołe Wygibasy na Ślicznej w Krakowie",
  },
];

const cardData = [
  {
    title: "Komfortowa lokalizacja",
    description:
      "Żłobek przy ul. Ślicznej 36A to idealne miejsce w centrum Krakowa, zapewniające łatwy dostęp oraz doskonałe warunki do rozwoju dziecka w spokojnym otoczeniu. Placówka znajduje się w pobliżu takich dzielnic jak Prądnik Czerwony, Grzegórzki oraz Rakowice, co czyni ją wygodnym wyborem dla rodzin mieszkających w tych okolicach.",
    link: {
      href: "/informacje-dla-rodzicow",
      text: "Informacje dla rodziców",
    },
  },
  {
    title: "Własny plac zabaw z zielonym terenem",
    description:
      "Nowoczesny, ogrodzony plac zabaw zapewnia bezpieczną zabawę na świeżym powietrzu. Posiadamy zielony teren rekreacyjny oraz 6-osobowe wózki spacerowe, które sprawiają, że codzienne spacery z dziećmi są komfortowe i bezpieczne.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Nasza czwarta placówka",
    description:
      "Wesołe Wygibasy przy ul. Ślicznej 36A to nasza czwarta placówka żłobkowa w Krakowie. Oferujemy miejsca dla maluchów w nowoczesnych i bezpiecznych warunkach, z troską o najwyższe standardy opieki oraz edukacji.",
    link: {
      href: "/adaptacja",
      text: "Adaptacja w Żłobku",
    },
  },
];

export default function Sliczna() {
  return (
    <main>
      <ZlobkiBaner
        title="Śliczna"
        subtitle="Olsza"
        bgImage="/sliders/sliczna-slider/sl1.jpg"
        description="Codzienna zabawa na świeżym powietrzu – własny plac zabaw i ogród do dyspozycji dzieci"
      />

      {/* Opis i karty */}
      <section className="pt-20 px-[9%]">
        <div className=" mx-auto">
          <NurseryHeader
            text="Szukasz żłobka z własnym placem zabaw w Krakowie? Wesołe
              Wygibasy na ul. Ślicznej 36A oferują profesjonalną opiekę,
              troskliwy zespół oraz własny plac zabaw do rozwoju Twojego
              dziecka. Skontaktuj się z nami i zapisz malucha już dziś!"
          />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Maluch komponent */}
      <section className="py-16">
        <div className="mx-auto">
          <Maluch />
        </div>
      </section>

      {/* Slider */}
      <section className="bg-white">
        <SliderComponent images={images} />
      </section>

      {/* Plan dnia */}
      <section className="bg-gray-50 py-16">
        <div className=" mx-auto">
          <DaySchedule header="Plan Dnia i zajęcia dodatkowe" time="17:30" />
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="sliczna" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20483.285915179342!2d19.857841410839853!3d50.07859630000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b843d4ce5%3A0xfe8741522eb108da!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy%203%20Bronowice!5e0!3m2!1spl!2spl!4v1711475564872!5m2!1spl!2spl" />
      </section>
    </main>
  );
}
