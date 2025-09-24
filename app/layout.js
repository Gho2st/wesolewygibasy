import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";
import PromoModal from "@/components/PromoModal";
import CookieConsent from "@/components/CookieConsent";

const font = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://wesolewygibasy.pl"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Żłobki Kraków | Prywatny Żłobek Wesołe Wygibasy – 5 Placówek",
  },
  description:
    "Żłobki Kraków z dotacją – Wesołe Wygibasy! Opieka od 8 mies., 5 placówek w Bronowicach, Olszy. Ocena 4.9/5. Zapisz dziecko!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://wesolewygibasy.pl/",
    title: "Wesołe Wygibasy - Żłobek w Krakowie",
    description:
      "Szukasz dotowanego żłobka w Krakowie? Wesołe Wygibasy to miejsce, które wspiera rozwój Twojego dziecka, oferując profesjonalną opiekę i przyjazną atmosferę.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={font.className}>
        <Navigation />
        <CookieConsent />
        {children}
        <Footer />
        <PromoModal />
      </body>
    </html>
  );
}
