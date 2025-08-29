import { blogPosts } from "@/app/data/blogData";
import Header from "@/components/UI/Header";
import LineHeader from "@/components/UI/blog/LineHeader";
import CtaLink from "@/components/UI/blog/CtaLink";
import { notFound } from "next/navigation";
import RecentPosts from "@/components/UI/blog/RecentPosts";

// ⬇️ Generowanie ścieżek
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ⬇️ Dynamiczne metadata dla SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return {};

  return {
    title: `${post.title} – Żłobek Wesołe Wygibasy w Krakowie`,
    description: post.contentPart1.slice(0, 150) + "...",
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// ⬇️ Strona bloga
export default async function BlogPostPage({ params }) {
  const data = blogPosts.find((post) => post.slug === params.slug);
  // gdy nie ma danych to not found
  if (!data) return notFound();

  return (
    <>
      <main className="pt-8 px-[9%] 2xl:px-[13%]">
        <Header text={data.title} />
        <section className="py-8 2xl:py-20">
          <div>
            <LineHeader text={data.subtitle} layout="left" />
            <p
              className="text-lg text-left xl:text-xl leading-relaxed mt-10 xl:my-16 "
              dangerouslySetInnerHTML={{ __html: data.contentPart1 }}
            />
          </div>
          <div>
            <LineHeader text={data.subtitle2} layout="right" />
            <p
              className="text-lg text-left xl:text-xl leading-relaxed mt-10 xl:my-16 "
              dangerouslySetInnerHTML={{ __html: data.contentPart2 }}
            />
          </div>
          <CtaLink
            link={data.cta.link}
            button={data.cta.button}
            header={data.cta.header}
            text={data.cta.text}
          />
          <div className="mt-16">
            <RecentPosts blogPosts={blogPosts} layout="row" />
          </div>
        </section>
      </main>
    </>
  );
}
