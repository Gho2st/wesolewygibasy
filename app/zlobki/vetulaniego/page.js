import ImagesContainer from "@/components/Gallery/ImagesContainer";
import Button from "@/components/UI/Button";
import CardContainer from "@/components/Cards/CardContainer";
import SliderComponent from "@/components/UI/slider/slider";
import Map from "@/components/UI/Map";
import Button2 from "@/components/UI/Button2";
import DayScheduleVetulaniego from "@/components/Info/DayScheduleVetulaniego";
import NurseryHeader from "@/components/nursery/header";

export const metadata = {
  title: "Żłobek na ulicy Vetulaniego w Krakowie - Wesołe Wygibasy",
  alternates: {
    canonical: "/zlobki/vetulaniego",
  },
  keywords:
    "Żłobek na Vetulaniego, klub malucha,  bronowice, zielonki, dotacja, aktywny maluch, kameralny, własny ogród",
  description:
    "Szukasz żłobka w Krakowie? Żłobek Wesołe Wygibasy na ul. Vetulaniego oferuje troskliwą opiekę, rozwijające zajęcia oraz ogród z placem zabaw. Zapisz swoje dziecko już dziś!",
};

const images = [
  {
    src: "/sliders/klub-malucha-slider/k1.jpg",
    alt: "zdjęcie z wnętrza żłobka",
  },
  {
    src: "/sliders/klub-malucha-slider/k2.jpg",
    alt: "zdjęcie z wnętrza żłobka",
  },
  {
    src: "/sliders/klub-malucha-slider/k3.jpg",
    alt: "zdjęcie z wnętrza żłobka",
  },
  {
    src: "/sliders/klub-malucha-slider/k4.jpg",
    alt: "zdjęcie z wnętrza żłobka",
  },
];

const cardData = [
  {
    title: "Klub Malucha Wesołe Wygibasy",
    description:
      "Kameralny żłobek w domu jednorodzinnym z pięknym ogrodem, z dala od miejskiego zgiełku. Spokojna atmosfera, natura i indywidualna opieka.",
    link: { href: "/informacje-dla-rodzicow", text: "Informacje dla rodziców" },
  },
  {
    title: "Ogród i spacery na świeżym powietrzu",
    description:
      "Duży ogród z placem zabaw, otoczony drzewami. Dzieci codziennie wychodzą na spacery i kontakt z naturą.",
    link: { href: "/o-nas", text: "O nas" },
  },
  {
    title: "Opieka nad dziećmi w wieku od 1 do 3 lat",
    description:
      "Grupa max. 20 dzieci, 3–4 opiekunki. Indywidualna troska, ciepło i bezpieczeństwo. Dzieci szczęśliwe, najedzone i zadbane.",
    link: { href: "/adaptacja-w-zlobku", text: "Adaptacja w Żłobku" },
  },
];

export default function VetulaniegoPage() {
  return (
    <main>
      {/* Baner */}
      <section>
        <div
          className="w-full min-h-screen bg-cover bg-bottom relative flex items-center justify-center"
          style={{ backgroundImage: `url("/zlobki/vetulaniego.webp")` }}
        >
          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl text-center px-6 py-12 sm:px-10 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold text-black">
              Klub Malucha Kraków – Wesołe Wygibasy na Vetulaniego
            </h1>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Button text="O nas" href="/o-nas" />
              <Button2 text="Zapisy" href="/zapisy" />
            </div>
          </div>
        </div>
      </section>

      {/* Karty i opis */}
      <section className="pt-20 px-[9%]">
        <div className="mx-auto">
          <NurseryHeader text="Jeśli szukasz bezpiecznego, kameralnego i inspirującego żłobka w Krakowie, zapraszamy do Klubu Malucha Wesołe Wygibasy na ulicy Vetulaniego 8. Nasza placówka oferuje profesjonalną opiekę nad dziećmi w wieku od 1 do 3 lat, zapewniając im rozwój w ciepłej i przyjaznej atmosferze, z dala od miejskiego zgiełku." />
          <div className="mt-12">
            <CardContainer cards={cardData} />
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="bg-white">
        <div className="">
          <SliderComponent images={images} />
        </div>
      </section>

      {/* Plan dnia */}
      <section className=" bg-gray-50">
        <DayScheduleVetulaniego header="Plan Dnia i zajęcia dodatkowe" />
      </section>

      {/* Galeria */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Galeria zdjęć</h2>
          <ImagesContainer folder="vetulaniego" />
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.531008552978!2d19.922438176465064!3d50.09506707152642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a446e9d3211%3A0x2479f81b021d9154!2s%C5%BB%C5%82obek%20Klub%20Malucha%20-%20Weso%C5%82e%20Wygibasy!5e0!3m2!1spl!2spl!4v1711815573472!5m2!1spl!2spl" />
      </section>
    </main>
  );
}
