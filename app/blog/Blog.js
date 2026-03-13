"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { blogPosts } from "../data/blogData";
import Header from "@/components/UI/Header";
import BlogCard from "@/components/UI/blog/BlogCard";
import Favourite from "@/components/UI/blog/Favourite";
import LineHeader from "@/components/UI/blog/LineHeader";
import RecentPosts from "@/components/UI/blog/RecentPosts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const articlesRef = useRef(null);

  // 1. Sortowanie i filtrowanie
  const filteredPosts = useMemo(() => {
    // Najpierw filtrujemy
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Potem sortujemy przefiltrowane elementy
    return filtered.sort((a, b) => {
      // localeCompare dla formatu YYYY-MM-DD działa idealnie od najnowszej do najstarszej
      return b.date.localeCompare(a.date);
    });
  }, [searchTerm]);

  // 2. Logika paginacji
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 3. Scroll do sekcji artykułów po zmianie strony
  useEffect(() => {
    // Przewijaj tylko jeśli użytkownik kliknął paginację (nie przy pierwszym ładowaniu)
    if (articlesRef.current && currentPage > 1) {
      const elementPosition =
        articlesRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 150;
      const targetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  // 4. Handlery
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset do 1. strony przy nowym wyszukiwaniu
  };

  return (
    <main className="pt-8 px-[6%]">
      <Header text="Nasz Blog" />

      <section className="pb-8 2xl:pb-20 bg-white">
        <p className="text-center max-w-3xl mx-auto mt-6 md:mt-10 text-lg xl:text-xl text-gray-600">
          Odkryj najnowsze porady, artykuły i inspiracje dla rodziców małych
          dzieci. Dowiedz się więcej o adaptacji, rozwoju mowy, zajęciach
          edukacyjnych i innych tematach związanych ze żłobkiem.
        </p>

        {/* Wyszukiwarka */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-4 pl-12 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              🔍
            </span>
          </div>
        </div>

        {/* Główna sekcja bloga */}
        <div className="flex flex-col lg:flex-row gap-16 py-16">
          <div className="w-full lg:w-2/3 2xl:w-3/4">
            <div ref={articlesRef}>
              <LineHeader text="Nasze Artykuły" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 2xl:gap-10 my-10 2xl:mt-16">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    header={post.title}
                    date={post.date}
                    text={
                      post.contentPart1.split(" ").slice(0, 35).join(" ") +
                      "..."
                    }
                    link={`/blog/${post.slug}`}
                    button="Czytaj więcej"
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-600 text-lg">
                    Nie znaleziono artykułów pasujących do "{searchTerm}".
                  </p>
                </div>
              )}
            </div>

            {/* Paginacja */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Poprzednia
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          currentPage === page
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Następna
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 2xl:w-1/4 flex flex-col gap-10">
            <Favourite blogPosts={blogPosts} />
            <RecentPosts blogPosts={filteredPosts.slice(0, 5)} />
          </div>
        </div>
      </section>
    </main>
  );
}
