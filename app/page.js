"use client";
import About from "@/components/homepage/About";
import Baner from "@/components/homepage/Baner";
import Places from "@/components/homepage/Places";
import Reviews from "@/components/homepage/Reviews";
import TextContainer from "@/components/homepage/TextContainer";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <Baner />
        <About />
        <TextContainer />
        <Reviews />
        <div className={classes.wrapper}>
          <Places />
        </div>
      </main>
    </>
  );
}
