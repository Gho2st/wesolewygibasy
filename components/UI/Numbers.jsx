"use client";
import { useState } from "react";

export default function Numbers() {
  const [active, setActive] = useState("klub");

  const numbers = [
    {
      id: "klub",
      label: "1",
      title: "Klub Malucha ul. Vetulaniego",
      number: "7330.2.16.2017",
    },
    {
      id: "glogera",
      label: "2",
      title: "Niepubliczny Żłobek ul. Glogera",
      number: "7330.2.16.2017",
    },
    {
      id: "stanczyka",
      label: "3",
      title: "Niepubliczny Żłobek ul. Stańczyka",
      number: "7330.2.7.2023",
    },
    {
      id: "sliczna",
      label: "4",
      title: "Niepubliczny Żłobek ul. Śliczna",
      number: "7330.1.15.2024",
    },
  ];

  return (
    <div className="bg-white shadow-xl p-6 rounded-3xl max-w-xl w-full mx-auto">
      {/* Przyciski */}
      <div className="flex gap-4 justify-center mb-6">
        {numbers.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-12 h-12 rounded-full shadow-xl  text-white cursor-pointer text-xl font-bold transition-all duration-200 ${
              active === item.id
                ? "bg-primary ring-4 ring-white scale-105"
                : "bg-red-200 hover:bg-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Treść - stała wysokość */}
      <div className="text-center text-black min-h-[130px] flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold mb-1">
          {numbers.find((n) => n.id === active)?.title}
        </h3>
        <p className="">Nasz numer to:</p>
        <p className="font-bold text-2xl mt-1">
          {numbers.find((n) => n.id === active)?.number}
        </p>
      </div>
    </div>
  );
}
