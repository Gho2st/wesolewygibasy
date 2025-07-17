"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 max-sm:text-3xl">
        Coś poszło nie tak!
      </h2>
      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-5 rounded-md text-base transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
