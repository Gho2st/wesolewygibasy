import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import CardContainer from "@/components/Cards/CardContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Map from "@/components/UI/Map";
import Button2 from "@/components/UI/Button2";
import DayScheduleGlogera from "@/components/Info/DayScheduleGlogera";
import NurseryHeader from "@/components/nursery/header";

export const metadata = {
  title: "Żłobek na Ulicy Glogera w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/glogera",
  },
  keywords:
    "Żłobek na ulicy glogera, glogera, wesołe wygibasy, kraków, miejsca",
  description:
    "Zapraszamy do żłobka Wesołe Wygibasy na ul. Glogera 53/LU2 w Krakowie. Nowoczesne pomieszczenia, pełna troski opieka i bogata oferta zajęć dla maluchów.",
};

const images = [
  {
    src: "/sliders/glogera-slider/g1.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "/sliders/glogera-slider/g2.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "/sliders/glogera-slider/g3.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "/sliders/glogera-slider/g4.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "/sliders/glogera-slider/g6.jpg",
    alt: "Zdjęcie ze środka Żłobka na ulicy Glogera w Krakowie",
  },
  {
    src: "/sliders/glogera-slider/g7.jpg",
    alt: "Zdjęcie trawnika przed Żłobkiem Wesołe Wygibasy na ulicy Glogera w Krakowie",
  },
];

const cardData = [
  {
    title: "Ogródek i plac zabaw",
    description:
      "Żłobek Wesołe Wygibasy przy ul. Glogera posiada również własny ogródek, gdzie dzieci mogą spędzać czas na świeżym powietrzu, bawiąc się na placu zabaw. Oferujemy także pełne zaplecze sanitarne, w tym łazienkę dostosowaną do potrzeb najmłodszych oraz wygodną szatnię.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Druga placówka",
    description:
      "Niepubliczny żłobek Wesołe Wygibasy przy ul. Glogera 53/LU2 w Krakowie to nasza druga placówka, oferująca wysokiej jakości opiekę nad dziećmi w bezpiecznym i przyjaznym otoczeniu.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Historia i lokalizacja",
    description:
      "Nasza placówka została wpisana do rejestru żłobków i klubów malucha 1 czerwca 2021 roku. Lokalizacja przy ul. Glogera w Krakowie była wcześniej znana okolicznym rodzinom jako sala zabaw Kamyczki Patyczki, która cieszyła się dużą popularnością do marca 2021 roku. Dzięki temu, mieszkańcy okolicy już od dawna mają zaufanie do tego miejsca, które teraz przekształciło się w nowoczesny i dobrze wyposażony żłobek.",
    link: { href: "/adaptacja-w-zlobku", text: "Adaptacja w Żłobku" },
  },
];

export default function Glogera() {
  return (
    <main>
      {/* Baner */}
      <section>
        <div
          className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url("/zlobki/glogera.jpg")` }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl text-center px-6 py-12 sm:px-10 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black">
              Żłobek Kraków -{" "}
              <span className="text-blue-700">Wesołe Wygibasy</span> na ul.
              Glogera 53/LU2
            </h1>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button text="O nas" href="/o-nas" />
              <Button2 text="Zapisy" background="#0037FF" href="/zapisy" />
            </div>
          </div>
        </div>
      </section>

      {/* Opis + karty */}
      <section className="pt-20 px-[9%]">
        <div className=" mx-auto">
          <NurseryHeader
            text="Szukasz bezpiecznego, nowoczesnego żłobka w Krakowie? Wesołe
            Wygibasy przy ul. Glogera 53/LU2 oferuje profesjonalną opiekę,
            rozwój oraz bogaty program zajęć w przyjaznej atmosferze.
            Sprawdź szczegóły i zapisz swoje dziecko już dziś!"
          />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="py-16">
        <div className=" mx-auto">
          <SliderComponent images={images} />
        </div>
      </section>

      {/* Plan dnia */}
      <section className="bg-gray-50 py-16">
        <div className=" mx-auto">
          <DayScheduleGlogera header="Plan Dnia i zajęcia dodatkowe" />
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="glogera" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <div className=" mx-auto">
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0746082710157!2d19.92382417646559!3d50.103610471528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8cf00937ed%3A0x39479b7e727e42d3!2sNiepubliczny%20%C5%BB%C5%82obek%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815664167!5m2!1spl!2spl" />
        </div>
      </section>
    </main>
  );
}
