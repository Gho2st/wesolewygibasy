"use client";
import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import classes from "./FacebookPosts.module.css";
import Image from "next/image";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  useEffect(() => {
    async function fetchPosts() {
      const timestamp = Date.parse(new Date().toString());

      try {
        const res = await fetch(`/api/facebook/${timestamp}`, {
          headers: {
            "Cache-Control": "no-cache",
          },
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
    <section className={classes.wrapper}>
      <div>
        <h2 className={classes.heading}>
          Najnowsze <span className={classes.highlight}>posty</span> z Facebooka
        </h2>
        <div className={classes.iconContainer}>
          <a
            href="https://www.facebook.com/wesolewygibasy"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.fbIconLink}
          >
            <FaFacebookSquare size={36} color="#1877F2" />
          </a>
        </div>
      </div>

      {isLoading ? (
        <p>Wczytywanie postów...</p>
      ) : (
        <ul className={classes.postsList}>
          {posts.length === 0 ? (
            <p className={classes.error}>Brak dostępnych postów.</p>
          ) : (
            posts.map((post) => {
              const imageUrl =
                post.attachments?.data?.[0]?.media?.image?.src ?? null;

              const [pageId, postId] = post.id.split("_");
              const postUrl = `https://www.facebook.com/${pageId}/posts/${postId}`;

              return (
                <li key={post.id} className={classes.postItem}>
                  <p className={classes.message}>
                    {truncateText(post.message || "Brak treści posta.", 35)}
                  </p>

                  <div>
                    {imageUrl && (
                      <div className={classes.imageWrapper}>
                        <Image
                          src={imageUrl}
                          alt="Zdjęcie z posta"
                          fill
                          className={classes.image}
                        />
                      </div>
                    )}

                    <span className={classes.date}>
                      {new Date(post.created_time).toLocaleString()}
                    </span>

                    <div className={classes.linkWrapper}>
                      <a
                        href={postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.postLink}
                      >
                        Zobacz całość na Facebooku...
                      </a>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      )}
    </section>
  );
}
