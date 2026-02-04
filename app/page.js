import About from "@/components/homepage/About";
import Baner from "@/components/homepage/Baner";
import Places from "@/components/homepage/Places";
import Reviews from "@/components/homepage/Reviews";
import FacebookPosts from "@/components/homepage/FacebookPosts";
import Rekrutacja from "@/components/homepage/Rekrutacja";

export default function Home() {
  return (
    <>
      <main>
        <Baner />
        <About />
        <Rekrutacja />
        <Places />
        <FacebookPosts />
        <Reviews />
      </main>
    </>
  );
}
