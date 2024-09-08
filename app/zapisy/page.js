import Contact from "./Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Zapisy",
  alternates: {
    canonical: "/zapisy",
  },
};
export default function Zapisy() {
  return (
    <>
      <Contact />
    </>
  );
}
