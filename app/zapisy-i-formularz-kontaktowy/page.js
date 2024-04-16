import Contact from "./Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Zapisy i Formularz Kontaktowy",
};
export default function Zapisy() {
  return (
    <>
      <Contact />
    </>
  );
}
