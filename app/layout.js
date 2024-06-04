import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/UI/ScrollToTheTop";
import { Metadata } from "next";
import Navigation from "@/components/UI/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://wesolewygibasy.pl"),
  title: {
    default: "Żłobek dla Dzieci w Krakowie - Wesołe Wygibasy",
    template: "%s - Wesołe Wygibasy Kraków",
  },
  description:
    "Szukasz dla swojego dziecka żłobka dotowanego projektem maluch plus? Wesołe Wygibasy to miejsce dla Twojej rodziny!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <Navigation />
        <ScrollToTopButton />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
