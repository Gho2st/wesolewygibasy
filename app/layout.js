import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/UI/ScrollToTheTop";
import { Metadata } from "next";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";
import TransitionProvider from "@/components/animation/TransitionProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://wesolewygibasy.pl"),
  title: {
    default: "Żłobek Kraków - Wesołe Wygibasy | Bezpieczna Opieka dla Dzieci",
    template: "%s - Wesołe Wygibasy Kraków",
  },
  description:
    "Szukasz dotowanego żłobka w Krakowie? Wesołe Wygibasy to miejsce, które wspiera rozwój Twojego dziecka!",
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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
