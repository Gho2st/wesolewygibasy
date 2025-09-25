"use client";
import About from "@/components/homepage/About";
import Baner from "@/components/homepage/Baner";
import Places from "@/components/homepage/Places";
import Reviews from "@/components/homepage/Reviews";
import TextContainer from "@/components/homepage/TextContainer";
import Age from "@/components/homepage/Age";
import FacebookPosts from "@/components/homepage/FacebookPosts";
import Rekrutacja from "@/components/homepage/Rekru";

export default function Home() {
  return (
    <>
      <main>
        <Baner />
        <About />
        <Rekrutacja />
        <Places />
        <FacebookPosts />
        <TextContainer />
        <Age />
        <Reviews />
      </main>
    </>
  );
}
