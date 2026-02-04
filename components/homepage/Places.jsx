"use client";
import PlaceItem from "../UI/PlaceItem";

export default function Places() {
  const items = [
    {
      image: "/sliders/lokietka-slider/5.webp",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka na ulicy Łokietka",
      title: "Żłobek na Łokietka!",
      location: "Żłobek, Kraków",
      street: "ul. Łokietka 23",
      link: "zlobki/lokietka",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku",
    },
    {
      image: "sliders/sliczna-slider/sl4.jpg",
      alt: "Własny plac zabaw Żłobka Wesołe Wygibasy na ulicy Ślicznej",
      title: "Żłobek na Ślicznej",
      location: "Żłobek, Kraków",
      street: "ul. Śliczna 36/A",
      link: "zlobki/sliczna",
      add: "Program Aktywny Maluch \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/stanczyka.jpg",
      alt: "Zdjęcie z zewnątrz budynku Żłobka Wesołe Wygibasy na ulicy Stańczyka",
      title: "Żłobek na Stańczyka",
      location: "Żłobek, Kraków",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobki/stanczyka",
      add: "Program Aktywny Maluch  \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/glogera.jpg",
      alt: "Zdjęcie z wewnątrz Żłobka Wesołe Wygibasy na ulicy Glogera",
      title: "Żłobek na Glogera",
      location: "Żłobek, Kraków",
      street: "ul. Glogera 53/LU2",
      link: "zlobki/glogera",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/sliders/klub-malucha-slider/k2.jpg",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka Klubu Malucha na ulicy Vetulaniego",
      title: "Klub Malucha",
      location: "Żłobek, Kraków",
      street: "ul. Vetulaniego 8",
      link: "zlobki/vetulaniego",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku",
    },
  ];

  return (
    <section
      id="placówki"
      className="min-h-screen flex items-center justify-center overflow-x-hidden bg-white py-16 px-[9%] 2xl:px-[16%]"
    >
      <div className="w-full max-w-7xl  flex flex-col items-center">
        {/* Opis */}
        <div className="text-center mb-12 2xl:mb-20">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4 xl:mb-8">
            Nasze Placówki
          </h2>
          <p className="text-base sm:text-lg xl:text-xl font-normal text-gray-700 max-w-3xl mx-auto">
            Prowadzimy 5 nowoczesnych punktów w dogodnych lokalizacjach Krakowa.
            Sprawdź szczegóły i wybierz ten, który najbardziej Ci odpowiada.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full place-items-stretch">
          {items.map((item, index) => (
            <PlaceItem
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              location={item.location}
              street={item.street}
              add={item.add}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
