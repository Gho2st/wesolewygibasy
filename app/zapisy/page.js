import Contact from "./Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Żłobek Wesołe Wygibasy Kraków - Zapisy Otworzone!",
  alternates: {
    canonical: "/zapisy",
  },
  keywords: "zapisy, formularz kontaktowy, dostępne miejsca",
  description:
    "Zapisz swoje dziecko do żłobka Wesołe Wygibasy w Krakowie. Sprawdź dostępne miejsca, procedury rekrutacyjne i rozpocznij przygodę malucha w naszym żłobku.",
};
export default function Zapisy() {
  return (
    <>
      <Contact />
    </>
  );
}
