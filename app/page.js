"use client";
import Dotation from "@/components/Info/dotation";
import Navigation from "@/components/UI/Navigation";
import About from "@/components/homepage/About";
import Baner from "@/components/homepage/Baner";
import Places from "@/components/homepage/Places";
import TextContainer from "@/components/homepage/TextContainer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Baner />
      <About />
      <TextContainer />
      <Places />
      <Dotation />
    </>
  );
}
