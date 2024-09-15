import Contact from "./Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Zapisy w Żłobku Wesołe Wygibasy w Krakowie",
  alternates: {
    canonical: "/zapisy",
  },
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
