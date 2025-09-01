"use client";
import PlaceItem from "../UI/PlaceItem";

export default function Places() {
  const items = [
    {
      image: "/sliders/lokietka-slider/5.webp",
      alt: "Zdjęcie przedstawiające wnętrze Żłobka na ulicy Łokietka",
      title: "Ciekawe promocje na start w Żłobku na Łokietka!",
      location: "Żłobek, Kraków",
      street: "ul. Łokietka 23",
      link: "zlobki/lokietka",
      add: "Dotacja urzędu miasta \n Dotacja aktywnie w żłobku \n Opieka jest darmowa!!!",
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
      className="min-h-screen flex items-center justify-center overflow-x-hidden bg-white py-16 px-[9%]"
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-full flex flex-col items-center">
        {/* Opis */}
        <div className="text-center mb-12 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl xl:text-5xl font-bold mb-4 xl:mb-8">
            Nasze placówki w Krakowie –{" "}
            <span className="text-primary">znajdź</span> najbliższą!
          </h2>
          <p className="text-base sm:text-lg xl:text-xl font-normal text-gray-700 max-w-3xl mx-auto">
            Mamy 5 placówek w różnych częściach Krakowa – każda z nich oferuje
            tę samą wysoką jakość opieki, ale w unikalnej lokalizacji. Sprawdź
            szczegóły i wybierz żłobek dla swojego dziecka!
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
