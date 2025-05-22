"use client";
import { useState, useEffect } from "react";
import classes from "./FacebookPosts.module.css";
import Image from "next/image";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Dodany stan ładowania

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/facebook");
        const data = await res.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Błąd podczas pobierania postów:", error);
      } finally {
        setIsLoading(false); // Ustaw zakończenie ładowania niezależnie od wyniku
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.heading}>
        Najnowsze <span className={classes.highlight}>posty</span> z Facebooka
      </h2>

      {isLoading ? (
        <p>Wczytywanie postów...</p> // Możesz tu dać spinner, jeśli masz
      ) : (
        <ul className={classes.postsList}>
          {posts.length === 0 ? (
            <p>Brak dostępnych postów.</p>
          ) : (
            posts.map((post) => {
              const imageUrl =
                post.attachments?.data?.[0]?.media?.image?.src ?? null;

              return (
                <li key={post.id} className={classes.postItem}>
                  <p className={classes.message}>
                    {post.message || "Brak treści posta."}
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
