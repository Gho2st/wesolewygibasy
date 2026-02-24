"use client";
import PlaceItem from "../UI/PlaceItem";

export default function Places() {
  const items = [
    {
      image: "/sliders/lokietka-slider/5.webp",
      alt: "Wnętrze żłobka Wesołe Wygibasy przy ul. Łokietka 23 w Krakowie (Krowodrza)",
      title: "Żłobek na Łokietka",
      location: "Kraków, Krowodrza",
      street: "ul. Łokietka 23",
      link: "zlobki/lokietka",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku",
    },
    {
      image: "sliders/sliczna-slider/sl4.jpg",
      alt: "Własny plac zabaw żłobka Wesołe Wygibasy przy ul. Ślicznej 36A w Krakowie (Prądnik Czerwony)",
      title: "Żłobek na Ślicznej",
      location: "Kraków, Prądnik Czerwony",
      street: "ul. Śliczna 36/A",
      link: "zlobki/sliczna",
      add: "Program Aktywny Maluch \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/stanczyka.jpg",
      alt: "Budynek żłobka Wesołe Wygibasy przy ul. Stańczyka 8 w Krakowie (Bronowice)",
      title: "Żłobek na Stańczyka",
      location: "Kraków, Bronowice",
      street: "ul. Stańczyka 8/LU3",
      link: "zlobki/stanczyka",
      add: "Program Aktywny Maluch  \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/zlobki/glogera.jpg",
      alt: "Wnętrze żłobka Wesołe Wygibasy na Prądniku Białym, ul. Glogera 53 (Kraków - Zielonki)",
      title: "Żłobek na Glogera",
      location: "Kraków, Prądnik Biały",
      street: "ul. Glogera 53/LU2",
      link: "zlobki/glogera",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku",
    },
    {
      image: "/sliders/klub-malucha-slider/k2.jpg",
      alt: "Klub Malucha Wesołe Wygibasy przy ul. Vetulaniego 8 w Krakowie (Prądnik Biały)",
      title: "Klub Malucha Vetulaniego",
      location: "Kraków, Prądnik Biały",
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
