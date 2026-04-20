import { blogPosts } from "@/app/data/blogData";
import Header from "@/components/UI/Header";
import LineHeader from "@/components/UI/blog/LineHeader";
import CtaLink from "@/components/UI/blog/CtaLink";
import { notFound } from "next/navigation";
import RecentPosts from "@/components/UI/blog/RecentPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return {};

  // Użyj dedykowanego pola metaDescription, fallback na contentPart1
  const description =
    post.metaDescription ||
    post.contentPart1?.replace(/<[^>]*>/g, "").slice(0, 155) + "...";

  return {
    title: `${post.title} – Żłobek Wesołe Wygibasy w Krakowie`,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const data = blogPosts.find((post) => post.slug === params.slug);
  if (!data) return notFound();

  // Zbierz wszystkie pary subtitle + content dynamicznie
  const sections = [];
  let i = 1;
  while (data[`contentPart${i}`]) {
    sections.push({
      subtitle: data[i === 1 ? "subtitle" : `subtitle${i}`],
      content: data[`contentPart${i}`],
      layout: i % 2 === 0 ? "right" : "left",
    });
    i++;
  }

  return (
    <>
      <main className="pt-8 px-[9%] 2xl:px-[13%]">
        <Header text={data.title} />
        <section className="py-8 2xl:py-20">
          {sections.map((section, index) => (
            <div key={index}>
              <LineHeader text={section.subtitle} layout={section.layout} />
              <p
                className="text-lg text-left xl:text-xl leading-relaxed mt-10 xl:my-16"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
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
