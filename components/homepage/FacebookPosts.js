"use client";
import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
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
    <section className="min-h-screen bg-[#fffbf2] px-[9%] py-16 flex flex-col items-center overflow-x-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl  xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 relative inline-block mb-2">
          Najnowsze <span className="text-primary">posty</span> z Facebooka
        </h2>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.facebook.com/wesolewygibasy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 transition-transform hover:scale-110"
          >
            <FaFacebookSquare size={40} color="#1877F2" />
          </a>
        </div>
      </div>

      {isLoading ? (
        <p className="text-gray-700 text-lg">Wczytywanie postów...</p>
      ) : posts.length === 0 ? (
        <p className="text-red-500 text-lg">Brak dostępnych postów.</p>
      ) : (
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full 2xl:w-3/4">
          {posts.map((post) => {
            const imageUrl =
              post.attachments?.data?.[0]?.media?.image?.src ?? null;
            const [pageId, postId] = post.id.split("_");
            const postUrl = `https://www.facebook.com/${pageId}/posts/${postId}`;

            return (
              <li
                key={post.id}
                className="bg-white rounded-2xl p-6 shadow-xl flex flex-col min-h-[500px]"
              >
                {/* GÓRNA CZĘŚĆ: Tekst posta */}
                <div>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                    {truncateText(post.message || "Brak treści posta.", 35)}
                  </p>
                </div>

                {/* DOLNA CZĘŚĆ: Zdjęcie, data, link */}
                <div className="mt-auto flex flex-col">
                  {imageUrl && (
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                      <Image
                        src={imageUrl}
                        alt="Zdjęcie z posta"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
                  <span className="block text-lg text-right">
                    {new Date(post.created_time).toLocaleString()}
                  </span>
                  <div className="mt-4">
                    <a
                      href={postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline text-xl"
                    >
                      Zobacz całość na Facebooku...
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
