"use client";
import About from "@/components/homepage/About";
import Baner from "@/components/homepage/Baner";
import Places from "@/components/homepage/Places";
import Reviews from "@/components/homepage/Reviews";
import TextContainer from "@/components/homepage/TextContainer";
import classes from "./page.module.css";
import Age from "@/components/homepage/Age";

export default function Home() {
  return (
    <>
      <main>
        <Baner />
        <About />
        <TextContainer />
        <Age />
        <Reviews />
        <div className={classes.wrapper}>
          <Places />
        </div>
      </main>
    </>
  );
}
