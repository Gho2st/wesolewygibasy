import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function ZlobkiBaner({ title, bgImage, description, subtitle }) {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden md:items-center">
      {/* Zdjęcie placówki */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      {/* Przyciemnienie – mocniejsze pod tekstem, żeby był czytelny na jasnych zdjęciach */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/75 md:via-black/40 md:to-transparent" />

      <div className="relative z-10 w-full px-6 pb-14 pt-32 md:px-[9%] md:py-24">
        <div className="max-w-2xl">
          <address className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-sm font-semibold not-italic text-white backdrop-blur-md">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            {subtitle}
          </address>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md md:text-5xl xl:text-6xl">
            {title}
          </h1>

          <div className="mb-6 h-1.5 w-16 rounded-full bg-primary" />

          <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
            {description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/zapisy"
              className="rounded-xl bg-primary px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ea5252]"
            >
              Zapytaj o wolne miejsce
            </Link>
            <Link
              href="/cennik"
              className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Zobacz cennik
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
