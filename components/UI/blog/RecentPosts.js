import { parse, format } from "date-fns";
import { pl } from "date-fns/locale";
import Link from "next/link";

export default function RecentPosts({ blogPosts, layout = "column" }) {
  const recentPosts = blogPosts.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="py-8 p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
      <h3 className="text-center text-2xl md:text-3xl font-semibold text-customBlue tracking-wide mb-8">
        Ostatnie Wpisy
      </h3>
      <div
        className={`flex ${
          layout === "row"
            ? "flex-row flex-wrap gap-6 md:py-16"
            : "flex-col gap-8"
        }`}
      >
        {recentPosts.length > 0 ? (
          recentPosts.map((post) => (
            <div
              key={post.id}
              className={`relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-300 ${
                layout === "row" ? "w-full md:w-[calc(33.33%-1rem)]" : "w-full"
              }`}
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm text-gray-500 font-medium block mb-3">
                {format(
                  parse(post.date, "dd-MM-yyyy", new Date()),
                  "d MMMM yyyy",
                  {
                    locale: pl,
                  }
                )}
              </span>
              <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-gray-500 hover:text-red-500 transition-colors duration-200"
              >
                Czytaj więcej...
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center text-lg font-medium">
            Brak dostępnych artykułów.
          </p>
        )}
      </div>
    </div>
  );
}
