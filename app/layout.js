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
  title: {
    default: "Żłobek Wesołe Wygibasy w Krakowie",
    template: "%s - Żłobek Wesołe Wygibasy w Krakowie",
  },
  description:
    "Żłobek Wesołe Wygibasy w Krakowie, poznaj cennik, jadłospis, kadrę. Zobacz harmonogram i godziny otwarcia. Dotacja maluch +",
  twitter: {
    card: "summary_large_image",
  },
  images: [
    {
      url: "/opengraph.image.png",
      width: 1400,
      height: 1600,
      alt: "opengraph image",
    },
  ],
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
