import { blogPosts } from "@/app/data/blogData";
import Header from "@/components/UI/Header";
import LineHeader from "@/components/UI/blog/LineHeader";
import CtaLink from "@/components/UI/blog/CtaLink";
import { notFound } from "next/navigation";

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
    description: post.content.slice(0, 150) + "...",
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
      <main className="pt-8 px-[9%]">
        <Header text={data.title} />
        <section className="py-8 2xl:py-20">
          <LineHeader text={data.subtitle} />
          <p
            className="text-lg xl:text-xl leading-relaxed mt-10 xl:my-16 text-center"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <CtaLink
            link={data.cta.link}
            button={data.cta.button}
            header={data.cta.header}
            text={data.cta.text}
          />
        </section>
      </main>
    </>
  );
}
