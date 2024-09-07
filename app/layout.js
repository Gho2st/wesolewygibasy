import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import TransitionProvider from "@/components/animation/TransitionProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://wesolewygibasy.pl"),
  keywords: [
    "żłobek Kraków",
    "dotowany żłobek Kraków",
    "żłobek w Krakowie",
    "żłobek z dofinansowaniem Kraków",
    "opieka dla dzieci Kraków",
    "prywatny żłobek Kraków",
    "najlepszy żłobek w Krakowie",
  ],
  title: {
    default: "Żłobek Kraków - Wesołe Wygibasy | Dotowana Opieka dla Dzieci",
    template: "%s - Żłobek Kraków - Wesołe Wygibasy",
  },
  description:
    "Szukasz dotowanego żłobka w Krakowie? Wesołe Wygibasy to miejsce, które wspiera rozwój Twojego dziecka, oferując profesjonalną opiekę i przyjazną atmosferę, gdzie każde dziecko czuje się jak w domu!",
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
      <GoogleAnalytics gaId="G-7ZYQBFJXN7" />
    </html>
  );
}
