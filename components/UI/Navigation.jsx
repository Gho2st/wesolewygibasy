"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full z-50">
      <div
        className={`h-[88px] w-full overflow-x-hidden ${
          isHomePage ? "bg-[#c7eeff]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="absolute top-[15px] left-5 z-10 cursor-pointer">
          <Link href="/">
            <Image src="/others/logo.png" width={100} height={100} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="fixed top-[15px] right-5 z-30">
          <div
            className="w-[2.4rem] h-[2.4rem] flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer transition-transform hover:scale-110"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </div>
        </div>

        {/* Background expanding circle */}
        <div
          className={`fixed top-[15px] right-5 w-[2.3rem] h-[2.3rem] rounded-full bg-gradient-to-r from-white to-pink-300 transition-transform duration-[800ms] ease-[cubic-bezier(0.86,0,0.07,1)] ${
            menuOpen ? "scale-[150]" : "scale-100"
          }`}
          style={{ zIndex: 10 }}
        ></div>

        {/* Nav Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-transparent z-20 transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-full invisible"
          } overflow-y-auto`}
        >
          <ul className="text-center list-none w-full flex flex-col items-center py-8">
            {[
              "Strona Główna",
              "Galeria",
              "Żłobki",
              "Cennik & Jadłospis",
              "Plan dnia",
              "Adaptacja",
              "O nas",
              "Informacje",
              "Zapisy",
            ].map((label, i) => {
              const routes = [
                "/",
                "/galeria",
                "/zlobki",
                "/cennik-i-jadlospis-w-zlobku",
                "/plan-dnia-w-zlobku",
                "/adaptacja-w-zlobku",
                "/o-nas",
                "/informacje-dla-rodzicow",
                "/zapisy",
              ];
              return (
                <li key={i} className="m-1 md:m-4">
                  <Link
                    href={routes[i]}
                    className="inline-block text-xl md:text-3xl font-medium uppercase px-6 py-3 bg-gradient-to-r from-transparent via-transparent to-white bg-[length:230%] hover:bg-[position:100%] hover:text-black transition-all duration-500"
                    onClick={closeMenu}
                  >
                    <span className="mr-4 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
