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
  keywords:
    "cennik, jadłospis, czesne w Żłobku, czesne 0zł, darmowe czesne, dotacja, dofinansowanie",
};

export default function Cennik() {
  return (
    <>
      <Pricing />
    </>
  );
}
