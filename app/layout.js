import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/UI/ScrollToTheTop";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://wesolewygibasy.pl"),
  title: {
    default: "Żłobek dla Dzieci w Krakowie",
    template: "%s - Wesołe Wygibasy Kraków",
  },
  description:
    "Żłobki dla dzieci Wesołe Wygibasy w Krakowie, poznaj cennik, jadłospis, kadrę. Zobacz harmonogram i godziny otwarcia. Sprawdź jak przebiega adaptacja. Żłobek dotowany z programu maluch+.",
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
        <ScrollToTopButton />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
