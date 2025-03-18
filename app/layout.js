import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";

const font = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Żłobek Kraków - Wesołe Wygibasy | Dotowana Placówka",
  },
  description:
    "Szukasz dofinansowanego żłobka w Krakowie z czesnym 0 zł? Żłobek Wesołe Wygibasy oferuje zajęcia dodatkowe i pyszne zdrowe jedzenie dla Twojego dziecka!",
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
        {children}
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-622G14LN5Q" />
    </html>
  );
}
