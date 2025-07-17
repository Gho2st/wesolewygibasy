import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="text-center px-4 py-12">
      <MdErrorOutline className="mx-auto mb-8 text-red-600 text-[6rem] md:text-[8rem]" />
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        404 - Strona nie znaleziona
      </h1>
      <p className="text-gray-600 mb-6 text-base md:text-lg max-w-xl mx-auto">
        PS: Często dzieje się tak przy literówce w adresie URL lub w przypadku
        gdy strona zmieniła adres na troszkę inny...
      </p>
      <Link
        href="/"
        className="inline-block bg-[#fa7070] hover:bg-[#d86161] text-white font-bold py-3 px-5 rounded-md text-sm md:text-base transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        Przejdź do strony głównej
      </Link>
    </div>
  );
}
