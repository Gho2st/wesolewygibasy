import classes from "./page.module.css";
import { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata = {
  title: "Cennik i Jadłospis - Żłobek Wesołe Wygibasy Kraków",
  description:
    "Sprawdź cennik i jadłospis żłobka Wesołe Wygibasy w Krakowie. Oferujemy zdrowe posiłki i atrakcyjne ceny opieki dla najmłodszych.",
  alternates: {
    canonical: "/cennik-i-jadlospis-w-zlobku",
  },
};

export default function Cennik() {
  return (
    <>
      <Pricing />
    </>
  );
}
