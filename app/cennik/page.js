import Pricing from "./Pricing";

export const metadata = {
  title: "Cennik i Czesne | Żłobek Wesołe Wygibasy Kraków",
  description:
    "Poznaj aktualny cennik żłobka Wesołe Wygibasy w Krakowie. Oferujemy atrakcyjne czesne, dofinansowania i profesjonalną opiekę nad dziećmi. Sprawdź naszą ofertę!",
  alternates: {
    canonical: "/cennik",
  },
};

export default function Cennik() {
  return (
    <>
      <Pricing />
    </>
  );
}
