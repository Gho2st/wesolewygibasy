import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";
import CookieConsent from "@/components/CookieConsent";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>
      <body className={font.className}>
        <Navigation />
        <div className="pt-20 md:pt-24">{children}</div>
        <Footer />
        {/* <PromoModal /> */}
        <CookieConsent />
        <GoogleTagManager gtmId="GTM-PNRKMMD6" />{" "}
      </body>
    </html>
  );
}
