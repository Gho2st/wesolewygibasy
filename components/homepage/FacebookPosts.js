"use client";
import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ") + "...";
  }

  useEffect(() => {
    async function fetchPosts() {
      const timestamp = Date.now();
      try {
        const res = await fetch(`/api/facebook/${timestamp}`, {
          headers: { "Cache-Control": "no-cache" },
        });
        const data = await res.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Błąd podczas pobierania postów:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className=" px-[6%] py-20 flex flex-col items-center overflow-x-hidden">
      {/* Nagłówek sekcji */}
      <div className="text-center max-w-3xl mb-16">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-bold tracking-widest text-[#0096da] uppercase bg-blue-50 rounded-full border border-blue-100">
          Social Media
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
          Co słychać w Wesołych Wygibasach?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Sprawdź najnowsze zdjęcia z zajęć i informacje prosto z naszego
          Facebooka.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="https://www.facebook.com/wesolewygibasy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-gray-100"
          >
            <div className="mb-3">
              <FaFacebookSquare size={30} color="#1877F2" />
            </div>
            <span className="font-bold text-gray-700">Odwiedź nasz profil</span>
          </a>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#0096da] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">
            Wczytywanie aktualności...
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
          <p className="text-gray-400 text-lg italic">
            Chwilowo brak nowych postów.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {posts.map((post, index) => {
            const imageUrl =
              post.attachments?.data?.[0]?.media?.image?.src ?? null;
            const [pageId, postId] = post.id.split("_");
            const postUrl = `https://www.facebook.com/${pageId}/posts/${postId}`;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={post.id}
                className={`
                  ${index > 0 ? "hidden md:flex" : "flex"} 
                  bg-white rounded-[2.5rem] p-5 shadow-xl shadow-blue-900/5 
                  border border-gray-50 flex-col hover:shadow-2xl transition-all group
                `}
              >
                {/* Zdjęcie */}
                {imageUrl && (
                  <div className="relative w-full aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-5">
                    <Image
                      src={imageUrl}
                      alt="Zdjęcie z życia żłobka"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Treść */}
                <div className="px-2 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-[#0096da] uppercase tracking-wider">
                      Aktualności
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.created_time).toLocaleDateString("pl-PL")}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {truncateText(post.message || "Brak treści posta.", 25)}
                  </p>
                </div>

                {/* Link */}
                <div className="px-2 pt-4 border-t border-gray-50 mt-auto">
                  <a
                    href={postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#0096da] font-bold hover:text-[#ff5757] transition-colors"
                  >
                    <span>Zobacz na Facebooku</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
