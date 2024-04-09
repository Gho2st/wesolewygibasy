import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Żłobki Wesołe Wygibasy - Kraków",
  description: "Odkryj naszą wyjątkową ofertę żłobków w Krakowie dla dzieci w wieku 1-3 lat. Profesjonalna opieka, bezpieczne środowisko i edukacyjne programy. Zapewnij swojemu dziecku najlepszy start w życie już dziś!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
