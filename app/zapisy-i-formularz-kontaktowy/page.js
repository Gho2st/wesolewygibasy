import Contact from "./Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Zapisy i Formularz Kontaktowy",
  alternates: {
    canonical: "/zapisy-i-formularz-kontaktowy",
  },
};
export default function Zapisy() {
  return (
    <>
      <Contact />
    </>
  );
}
