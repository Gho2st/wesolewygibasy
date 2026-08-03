// app/(app)/blog/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/app/lib/prisma";

export const revalidate = 86400;
export const dynamicParams = true;
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { status: "published" },
    select: { slug: true },
  });
  return posts.map(({ slug }) => ({ slug }));
}

async function getPost(slug) {
  return prisma.post.findFirst({
    where: { slug, status: "published" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      content: true,
      coverImage: true,
      publishedAt: true,
      createdAt: true,
      updatedAt: true,
      // CTA fields
      ctaTitle: true,
      ctaDescription: true,
      ctaPrimaryLabel: true,
      ctaSecondaryLabel: true,
      ctaPrimaryUrl: true,
      ctaSecondaryUrl: true,
    },
  });
}

async function getRelatedPosts(currentSlug) {
  return prisma.post.findMany({
    where: { status: "published", slug: { not: currentSlug } },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      publishedAt: true,
    },
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ← await
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Pantofle Karpaty`,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      images: post.coverImage ? [post.coverImage] : [],
      type: "article",
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; // ← await
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    image: post.coverImage || "",
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Pantofle Karpaty",
    },
    publisher: {
      "@type": "Organization",
      name: "Pantofle Karpaty",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-widest text-gray-400 mb-10 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Strona główna
          </Link>
          <span className="text-gray-300">›</span>
          <Link href="/blog" className="hover:text-red-600 transition-colors">
            Blog
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-600 truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        {/* Nagłówek */}
        <header className="mb-10">
          {post.publishedAt && (
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-red-200 pl-4 italic">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Zdjęcie główne */}
        {post.coverImage && (
          <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-12 relative">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Treść */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ==================== CTA ==================== */}
        {post.ctaTitle && (
          <div className="my-16 bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 lg:p-10 text-white">
            <p className="text-xs uppercase tracking-widest text-red-200 mb-3">
              Pantofle Karpaty
            </p>
            <h3 className="text-2xl lg:text-3xl font-light mb-3 leading-tight">
              {post.ctaTitle}
            </h3>
            {post.ctaDescription && (
              <p className="text-red-100 mb-6 leading-relaxed max-w-xl">
                {post.ctaDescription}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {post.ctaPrimaryUrl && post.ctaPrimaryLabel && (
                <Link
                  href={
                    post.ctaPrimaryUrl.startsWith("http")
                      ? post.ctaPrimaryUrl
                      : post.ctaPrimaryUrl
                  }
                  className="inline-flex items-center gap-2 bg-white text-red-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  {post.ctaPrimaryLabel} <span>→</span>
                </Link>
              )}
              {post.ctaSecondaryUrl && post.ctaSecondaryLabel && (
                <Link
                  href={
                    post.ctaSecondaryUrl.startsWith("http")
                      ? post.ctaSecondaryUrl
                      : post.ctaSecondaryUrl
                  }
                  className="inline-flex items-center gap-2 border border-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-red-700/30 transition-colors"
                >
                  {post.ctaSecondaryLabel}
                </Link>
              )}
            </div>
          </div>
        )}
        {/* ============================================ */}

        {/* Powrót */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Wróć do bloga
          </Link>
        </div>
      </article>

      {/* Powiązane wpisy */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Blog
            </p>
            <h2 className="text-2xl font-light text-gray-900 mb-10">
              Inne wpisy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">
                    {p.coverImage ? (
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}
                  </div>
                  {p.publishedAt && (
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                      {new Date(p.publishedAt).toLocaleDateString("pl-PL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  )}
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-red-700 transition-colors leading-snug mb-2">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="text-xs text-gray-500 line-clamp-2 flex-1">
                      {p.excerpt}
                    </p>
                  )}
                  <span className="mt-3 text-xs font-medium text-red-700 group-hover:text-red-800 inline-flex items-center gap-1">
                    Czytaj dalej
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
