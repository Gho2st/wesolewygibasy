import Header from "@/components/UI/Header";
import BlogCard from "@/components/UI/blog/BlogCard";
import LineHeader from "@/components/UI/blog/LineHeader";
import { blogPosts } from "../data/blogData";
import { motion } from "framer-motion";

export const metadata = {
  title: "Blog - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Porady dla rodziców, rozwój dziecka, adaptacja w żłobku i inspiracje wychowawcze. Przeczytaj artykuły Żłobka Wesołe Wygibasy w Krakowie.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  return (
    <>
      <main className="pt-8 px-[9%]">
        <Header text="Nasz Blog" />

        <section className="py-8 xl:py-20 bg-white">
          <LineHeader text="Nasze Artykuły" />

          <p className="text-center max-w-3xl mx-auto mt-6 md:mt-10 text-lg xl:text-xl text-gray-600">
            Odkryj najnowsze porady, artykuły i inspiracje dla rodziców małych
            dzieci. Dowiedz się więcej o adaptacji, rozwoju mowy, zajęciach
            edukacyjnych i innych tematach związanych ze żłobkiem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 2xl:gap-20 mt-12 xl:mt-20">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                header={post.title}
                text={post.content.split(" ").slice(0, 35).join(" ") + "..."}
                link={`/blog/${post.slug}`}
                button="Czytaj więcej"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
