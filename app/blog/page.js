// app/(app)/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import prisma from "../lib/prisma";

export const revalidate = 86400; // 24h

export const metadata = {
  title: "Blog - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Porady dla rodziców, rozwój dziecka, adaptacja w żłobku i inspiracje wychowawcze. Przeczytaj artykuły Żłobka Wesołe Wygibasy w Krakowie.",
  alternates: { canonical: "/blog" },
};

async function getPosts() {
  return prisma.post.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
  });
}

export default async function BlogPage() {
  const [posts] = await Promise.all([getPosts()]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      {/* Nagłówek */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Wesołe Wygibasy
        </p>
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900">
          Nasz Blog
        </h1>
        <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
          Odkryj najnowsze porady, artykuły i inspiracje dla rodziców małych
          dzieci. Dowiedz się więcej o adaptacji, rozwoju mowy, zajęciach
          edukacyjnych i innych tematach związanych ze żłobkiem.
        </p>
      </div>

      {/* Wpisy */}
      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm">Brak opublikowanych wpisów.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-5 relative">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                    Brak zdjęcia
                  </div>
                )}
              </div>

              {post.publishedAt && (
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

              <h2 className="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors mb-2 leading-snug">
                {post.title}
              </h2>

              {post.excerpt && (
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
              )}

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-700 group-hover:text-red-800 transition-colors">
                Czytaj dalej
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
