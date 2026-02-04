import FoodContainer from "./FoodContainer";

export const metadata = {
  title: "Jadłospis | Żłobek Wesołe Wygibasy Kraków",
  description:
    "Sprawdź nasze zdrowe i zbilansowane menu dla maluchów. W Żłobku Wesołe Wygibasy dbamy o zdrowe nawyki żywieniowe i dostosowujemy posiłki do diet i alergii.",
  alternates: {
    canonical: "/cennik",
  },
};

export default function jadlospis() {
  return (
    <>
      <main className="px-[6%] 2xl:px-[16%] mx-auto">
        <FoodContainer />
      </main>
    </>
  );
}
