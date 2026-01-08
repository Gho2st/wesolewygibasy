import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";
import Map from "@/components/UI/Map";
import DayScheduleLokietka from "@/components/Info/DayScheduleLokietka";
import CardContainer from "@/components/Cards/CardContainer";
import NurseryHeader from "@/components/nursery/header";
import ParkSlider from "@/components/UI/slider/parkSlider";

export const metadata = {
  title: "Żłobek na Ulicy Łokietka w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/lokietka",
  },
  description:
    "Żłobek Wesołe Wygibasy na ulicy Łokietka 23 w Krakowie – kameralna placówka z małą liczbą dzieci, blisko parku, dotowana i oferująca profesjonalną opiekę oraz adaptację od 19 maja. Sprawdź nasz program i zapisz dziecko już dziś!",
};

const images = [
  { src: "/sliders/lokietka-slider/1.webp", alt: "Park Łokietka w Krakowie 1" },
  { src: "/sliders/lokietka-slider/2.webp", alt: "Park Łokietka w Krakowie 2" },
  { src: "/sliders/lokietka-slider/3.webp", alt: "Park Łokietka w Krakowie 3" },
  { src: "/sliders/lokietka-slider/4.webp", alt: "Park Łokietka w Krakowie 4" },
  { src: "/sliders/lokietka-slider/5.webp", alt: "Park Łokietka w Krakowie 5" },
  { src: "/sliders/lokietka-slider/6.webp", alt: "Park Łokietka w Krakowie 6" },
  { src: "/sliders/lokietka-slider/7.webp", alt: "Park Łokietka w Krakowie 7" },
  { src: "/sliders/lokietka-slider/8.webp", alt: "Park Łokietka w Krakowie 8" },
];

const cardData = [
  {
    title: "Bliskość Parku Łokietka",
    description:
      "Nasza lokalizacja w Bronowicach gwarantuje codzienne spacery i kontakt z naturą w pobliskim Parku Łokietka – idealne miejsce na zabawę i odpoczynek.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Adaptacja",
    description:
      "Rozpoczynamy proces adaptacyjny, aby Twoje dziecko mogło łagodnie i bez stresu rozpocząć przygodę z nami.",
    link: { href: "/adaptacja-w-zlobku", text: "Adaptacja w Żłobku" },
  },
  {
    title: "Otwarty w październiku 2025",
    description:
      "Oficjalne otwarcie żłobka październik 2025 - zapraszamy do zapoznania się z naszą ofertą i zapisów!",
    link: { href: "/o-nas", text: "O Nas" },
  },
  {
    title: "Opieka jest darmowa!",
    description:
      "Jesteśmy placówką dotowaną, co oznacza przystępne ceny bez kompromisów w jakości opieki i programu edukacyjnego. Rodzice płacą tylko za wyżywienie.",
    link: { href: "/cennik-i-jadlospis-w-zlobku", text: "Cennik i Jadłospis" },
  },
  {
    title: "Zajęcia Rozwojowe",
    description:
      "Oferujemy różnorodne zajęcia, takie jak rytmika, dogoterapia, angielski, plastyka i zabawy sensoryczne, wspierające rozwój Twojego malucha.",
    link: { href: "/plan-dnia-w-zlobku", text: "Plan Dnia w Żłobku" },
  },
  {
    title: "Mała Ilość Dzieci",
    description:
      "W placówce pod opieką docelowo będzie 25 dzieci. Dzięki kameralnym grupom zapewniamy indywidualną opiekę i rodzinną atmosferę, w której każde dziecko czuje się wyjątkowo.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
];

export default function Lokietka() {
  return (
    <main>
      {/* Baner */}
      <section>
        <div
          className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url("/sliders/lokietka-slider/4.webp")` }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl text-center px-6 py-12 sm:px-10 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold text-black">
              Żłobek Kraków Prądnik Biały - Wesołe Wygibasy na Łokietka
            </h1>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button text="O nas" href="/o-nas" />
              <Button2 text="Zapisy" href="/zapisy" />
            </div>
          </div>
        </div>
      </section>

      {/* Karty + Header */}
      <section className="pt-20 px-[9%]">
        <div className=" mx-auto">
          <NurseryHeader
            text="W żłobku Wesołe Wygibasy na Łokietka w Krakowie stawiamy na indywidualne
            podejście, rozwój przez zabawę i komfort dzieci. Poznaj nasze atuty i
            dołącz do nas! Kameralna placówka dla najmłodszych w sercu Bronowic –
            zapewniamy profesjonalną opiekę, rozwój i radość Twojego dziecka!"
          />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Slider */}
      <section>
        <ParkSlider images={images} />
      </section>

      {/* Plan Dnia */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto">
          <DayScheduleLokietka
            header="Plan Dnia i zajęcia dodatkowe"
            time="17:30"
          />
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
        <div className="mx-auto">
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3950908862935!2d19.92613357625054!3d50.078889314047764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab3657246b%3A0x5be9f5ae07b4cb78!2zV8WCYWR5c8WCYXdhIMWBb2tpZXRrYSAyMywgMzAtMDEwIEtyYWvDs3c!5e0!3m2!1sen!2spl!4v1742315529506!5m2!1sen!2spl" />
        </div>
      </section>
    </main>
  );
}
