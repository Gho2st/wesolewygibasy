import classes from "./page.module.css";
import { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata = {
  title: "Cennik i Jadłospis",
};

export default function Cennik() {
  return (
    <>
      <Pricing />
    </>
  );
}
