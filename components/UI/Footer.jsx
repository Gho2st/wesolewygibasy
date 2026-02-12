"use client";
import Link from "next/link";
import { FaPhone, FaMessage, FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Numbers from "./Numbers";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* SVG fala */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0096da"
          fillOpacity="1"
          d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {/* Footer */}
      <footer className="bg-secondary text-white px-[9%] pt-0 pb-16 text-[1.1rem]">
        {/* Góra */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div>
            <span className="text-3xl leading-relaxed xl:text-4xl xl:leading-relaxed font-semibold">
              <span className="bg-white text-primary px-4 py-[0.1px] rounded-full">
                Wesołe Wygibasy
              </span>{" "}
              są wpisane do rejestru krakowskich złobków i klubów dziecięcych
            </span>
            <p className="text-xl lg:text-2xl mt-4">
              Oznacza to, że jesteśmy miejscem bezpiecznym oraz przyjaznym
              dzieciom i rodzicom!
            </p>
            <div className="h-[2px] w-full bg-white my-6"></div>
          </div>
          <div className="flex items-center">
            <Numbers />
          </div>
        </div>

        {/* Sekcje info */}
        <div className="flex flex-col lg:flex-row justify-between mt-12 gap-12">
          {/* Godziny */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Godziny otwarcia</h3>
            <ul className="text-lg">
              <li>
                <span className="font-bold text-primary text-xl">
                  Pon - Pt:
                </span>
              </li>
              <li>Vetulaniego - 7:00 - 17:00</li>
              <li>Glogera - 6:30 - 17:00</li>
              <li>Stańczyka - 6:30 - 17:30</li>
              <li>Śliczna - 7:00 - 17:30</li>
              <li>Łokietka - 6:30 - 17:30</li>
              <li className="mt-2">
                <span className="font-bold text-primary text-xl">Sob:</span>{" "}
                nieczynne
              </li>
              <li>
                <span className="font-bold text-primary text-xl">Ndz:</span>{" "}
                nieczynne
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Kontakt z Nami i Zapisy
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                {
                  href: "tel:+48697560022",
                  icon: <FaPhone className="w-5 h-5 text-white" />,
                  text: "+48 697 560 022",
                  bg: "bg-green-600",
                },
                {
                  href: "mailto:wesolewygibasy@onet.pl",
                  icon: <MdEmail className="w-5 h-5 text-white" />,
                  text: "wesolewygibasy@onet.pl",
                  bg: "bg-blue-600",
                },
                {
                  href: "/zapisy",
                  icon: <FaMessage className="w-5 h-5 text-white" />,
                  text: "Formularz kontaktowy",
                  bg: "bg-yellow-600",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 group hover:text-yellow-300 transition"
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg} group-hover:scale-105 transition`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-base lg:text-lg">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Social media</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/wesolewygibasy"
                aria-label="Facebook Wesołe Wygibasy"
              >
                <FaFacebook className="w-12 h-12 text-blue-600 bg-white rounded-xl shadow-md p-1.5 hover:scale-105 transition" />
              </Link>
              <Link
                href="https://www.instagram.com/wesolewygibasy"
                aria-label="Instagram Wesołe Wygibasy"
              >
                <FaInstagram className="w-12 h-12 text-red-600 bg-white rounded-xl shadow-md p-1.5 hover:scale-105 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dół */}
        <div className="flex justify-center mt-10 text-center text-xl">
          <p>
            <span>&copy;</span> {currentYear} Wesołe Wygibasy
          </p>
        </div>
        <Link
          href="https://wa.me/+48697560022"
          className="fixed bg-[#25D366] shadow-2xl rounded-full p-2 text-3xl xl:text-5xl text-white bottom-6 right-6 xl:bottom-16 xl:right-10 z-10"
        >
          <FaWhatsapp className="cursor-pointer" />
        </Link>
      </footer>
    </>
  );
}
