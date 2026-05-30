"use client";

import { useState } from "react";

export default function PromoVideo({
  src,
  poster,
  title = "Przykładowy dzień w żłobku Wesołe Wygibasy",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="md:px-[9%] pb-12">
      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          {loaded ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={poster}
              title={title}
              controls
              autoPlay
              preload="none"
              playsInline
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              aria-label={`Odtwórz film: ${title}`}
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              <img
                src={poster}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              {/* lekkie przyciemnienie dla kontrastu */}
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

              {/* przycisk play */}
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-200 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-9 w-9 text-rose-500"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
