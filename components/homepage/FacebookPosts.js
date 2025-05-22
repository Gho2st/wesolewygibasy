"use client";
import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa"; // <- dodany import
import classes from "./FacebookPosts.module.css";
import Image from "next/image";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/facebook");
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
            href="https://www.facebook.com/wesolewygibasy" // <- Podmień na właściwy link
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
          {/* error */}
          {posts.length === 0 ? (
            <p className={classes.error}>Brak dostępnych postów.</p>
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
