"use client";
import { useState, useRef, useEffect } from "react"; // Add useRef and useEffect
import { blogPosts } from "../data/blogData";
import Header from "@/components/UI/Header";
import BlogCard from "@/components/UI/blog/BlogCard";
import Favourite from "@/components/UI/blog/Favourite";
import LineHeader from "@/components/UI/blog/LineHeader";
import RecentPosts from "@/components/UI/blog/RecentPosts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Liczba artykułów na stronę
  const articlesRef = useRef(null); // Add ref for articles section

  // Filtrowanie postów
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Obliczanie indeksów dla bieżącej strony
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Obliczanie liczby stron
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    if (articlesRef.current) {
      // 1. Obliczamy pozycję elementu względem góry dokumentu
      const elementPosition =
        articlesRef.current.getBoundingClientRect().top + window.scrollY;

      // 2. Ustalamy margines (np. 150px), żeby nie kleiło się do samej góry (miejsce na Header menu)
      const offset = 150;
      const targetPosition = elementPosition - offset;

      // 3. Przewijamy TYLKO wtedy, gdy użytkownik jest niżej niż początek listy
      // Dzięki temu strona nie skacze, jeśli jesteś na górze
      if (window.scrollY > targetPosition) {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [currentPage]); // Uruchamia się przy zmianie strony
  // Funkcje do zmiany strony
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        <div className="relative max-w-2xl mx-auto mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 cursor-text"
            />
            <span
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              🔍
            </span>
          </div>
        </div>

        {/* ARTYKULY */}
        <div className="flex flex-col lg:flex-row gap-16 py-16">
          <div className="w-4/4 lg:w-2/3 2xl:w-3/4">
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
                <p className="text-center text-gray-600 text-lg col-span-full">
                  Nie znaleziono artykułów pasujących do wyszukiwania.
                </p>
              )}
            </div>

            {/* Paginacja */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition-all duration-300`}
                >
                  Poprzednia
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } transition-all duration-300`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition-all duration-300`}
                >
                  Następna
                </button>
              </div>
            )}
          </div>
          <div className="w-4/4 lg:w-1/3 2xl:1/4 flex flex-col gap-10">
            <Favourite blogPosts={blogPosts} />
            <RecentPosts blogPosts={blogPosts} />
          </div>
        </div>
      </section>
    </main>
  );
}
