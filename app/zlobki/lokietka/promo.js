import Button from "@/components/UI/Button";
import Link from "next/link";

export default function Promo() {
  return (
    <>
      {/* Promocyjny komponent */}
      <div className="py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-3xl shadow-xl max-w-4xl mx-auto mt-10 relative overflow-hidden transform hover:scale-105 transition-transform duration-500">
        {/* Tło z delikatnymi dekoracjami */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-32 h-32 bg-yellow-300 rounded-full absolute -top-10 -left-10 blur-2xl"></div>
          <div className="w-24 h-24 bg-green-300 rounded-full absolute bottom-0 right-0 blur-2xl"></div>
        </div>
        <div className="mx-auto max-w-3xl text-center px-8 relative z-10">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 drop-shadow-sm font-['Comic_Sans_MS', 'cursive']">
            Promocja: 3x0 dla Maluszków!
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-semibold leading-relaxed">
            Zapisz swoje dziecko we wrześniu lub październiku i skorzystaj z
            naszej bajkowej oferty:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto mb-10">
            <li className="flex items-center text-gray-800 font-semibold bg-white bg-opacity-70 p-4 rounded-2xl shadow-sm">
              <span className="w-8 h-8 mr-3 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl">
                ⭐
              </span>
              Czesne: 0 zł
            </li>
            <li className="flex items-center text-gray-800 font-semibold bg-white bg-opacity-70 p-4 rounded-2xl shadow-sm">
              <span className="w-8 h-8 mr-3 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl">
                🌈
              </span>
              Wpisowe: 0 zł
            </li>
            <li className="flex items-center text-gray-800 font-semibold bg-white bg-opacity-70 p-4 rounded-2xl shadow-sm">
              <span className="w-8 h-8 mr-3 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                🍎
              </span>
              Wyżywienie: 0 zł przez 2 miesiące
            </li>
          </ul>
          <div className="flex justify-center">
            <Button
              text="Zapisz Maluszka!"
              href="/zapisy"
              className="bg-yellow-400 text-purple-800 hover:bg-yellow-500 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-lg tracking-wide"
            />
          </div>
        </div>
      </div>
    </>
  );
}
