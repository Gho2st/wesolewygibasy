"use client";
import { useState, useEffect } from "react";
import classes from "./FacebookPosts.module.css";
import Image from "next/image";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/facebook");
      const data = await res.json();
      setPosts(data.data || []);
    }

    fetchPosts();
  }, []);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.heading}>📰 Najnowsze posty z Facebooka</h2>
      <ul className={classes.postsList}>
        {posts.map((post) => {
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
        })}
      </ul>
    </section>
  );
}
