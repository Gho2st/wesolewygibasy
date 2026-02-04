"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "O nas", href: "/o-nas" },
  { label: "Żłobki", href: "/zlobki" },
  { label: "Cennik", href: "/cennik" },
  { label: "Jadłospis", href: "/jadlospis" },
  { label: "Plan dnia", href: "/plan-dnia" },
  { label: "Adaptacja", href: "/adaptacja" },
  { label: "Informacje", href: "/informacje-dla-rodzicow" },
  { label: "Galeria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  // Logika chowania/pokazywania navbaru
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Pokazuj zawsze, gdy jesteśmy na samej górze (opcjonalne, ale płynne)
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Jeśli scrollujemy w dół i przekroczyliśmy pewien próg (np. 100px) - schowaj
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Jeśli scrollujemy w górę - pokaż
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Zamykanie menu przy zmianie szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] bg-[#0096da] shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          className="relative z-[110] flex flex-col items-center group cursor-pointer"
        >
          <Image
            src={"/grafiki/logo.svg"}
            width={120}
            height={120}
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm md:text-base xl:text-lg font-medium transition-colors hover:text-[#ff5757] ${
                pathname === link.href
                  ? "text-primary border-b-2 border-[#ff5757]"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/zapisy"
            className="bg-white text-[#0096da] px-6 py-2.5 rounded-full font-bold hover:bg-[#ff5757] hover:text-white transition-all shadow-md"
          >
            Zapisz dziecko
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative z-[110] p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 w-screen h-screen bg-[#ff5757] transition-transform duration-500 ease-in-out lg:hidden z-[105] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full w-full gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
