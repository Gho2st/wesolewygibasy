"use client";

import { useRef, useState } from "react";

export default function PromoVideo({
  src,
  poster,
  title = "Przykładowy dzień w żłobku Wesołe Wygibasy",
}) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
    }
  };

  return (
    <section className="md:px-[9%] pb-12">
      <style>{`
        /* ukryj natywny przycisk pełnego ekranu (webkit/blink) */
        video::-webkit-media-controls-fullscreen-button {
          display: none !important;
        }

        /* pionowy kadr w trybie pełnego ekranu */
        .reel-container:fullscreen,
        .reel-container:-webkit-full-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          border-radius: 0;
        }
        .reel-container:fullscreen video,
        .reel-container:-webkit-full-screen video {
          position: static;
          inset: auto;
          height: 100%;
          width: auto;
          aspect-ratio: 9 / 16;
          object-fit: cover;
        }
      `}</style>

      <div className="mx-auto max-w-sm">
        <div
          ref={containerRef}
          className="reel-container relative aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-lg bg-black"
        >
          {loaded ? (
            <>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
                poster={poster}
                title={title}
                controls
                controlsList="nofullscreen nodownload"
                disablePictureInPicture
                autoPlay
                preload="none"
                playsInline
              />

              <button
                type="button"
                onClick={handleFullscreen}
                aria-label="Pełny ekran"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
                </svg>
              </button>
            </>
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
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
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
