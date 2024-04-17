import classes from "./page.module.css";
import { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata = {
  title: "Cennik i Jadłospis",
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
