"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { getPricingSummary, formatPln } from "@/app/data/pricing";

export default function LocationDotation({
  locationId,
  pricingHref = "/cennik",
  contactHref = "/zapisy",
}) {
  const skillRef = useRef(null);
  const isSkillRefinView = useInView(skillRef, { once: true });

  const data = getPricingSummary(locationId);
  if (!data) return null;

  const { accent = "#fa7070", accentDark = "#ea5252", street } = data.meta;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.1, duration: 0.55, ease: "easeOut" },
    }),
  };

  const headline = data.isFree
    ? `W placówce ${data.title} czesne wynosi 0 zł`
    : `W placówce ${data.title} płacisz od ${formatPln(
        data.minFinal,
      )} miesięcznie`;

  return (
    <section
      style={{ "--accent": accent, "--accent-dark": accentDark }}
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/30 via-white to-teal-50/20 px-4 sm:px-6 md:px-[9%] py-16 md:py-20"
    >
      {/* Dekoracyjne kółka w tle — w kolorze placówki */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={skillRef} className="relative max-w-6xl mx-auto">
        {/* Nagłówek + logo miasta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSkillRefinView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-12"
        >
          <div className="text-center md:text-left">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
              style={{
                backgroundColor: "color-mix(in srgb, var(--accent) 14%, white)",
                color: "var(--accent-dark)",
              }}
            >
              <span className="text-sm">{data.icon}</span>
              Dofinansowanie · {data.title}
            </span>

            <h2 className="text-3xl md:text-[2.3rem] font-bold text-gray-800 leading-tight">
              {headline}
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Czesne wynosi {formatPln(data.fee)}.{" "}
              {data.sources.length > 2 ? "Trzy dotacje" : "Dwie dotacje"}{" "}
              pokrywają z tej kwoty {formatPln(data.covered)} miesięcznie.
              {street ? ` Placówka przy ${street}.` : ""}
            </p>
          </div>

          <Image
            src="/krakow/krakow1.jpg"
            width={200}
            height={95}
            alt="Logo miasta Kraków"
            className="w-[150px] md:w-[190px] h-auto mx-auto md:mx-0 flex-shrink-0"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-start">
          {/* Źródła dofinansowania */}
          <div className="space-y-4">
            {data.sources.map((source, i) => (
              <motion.div
                key={source.key}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isSkillRefinView ? "show" : "hidden"}
                className="flex gap-4 p-5 md:p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--accent) 40%, white)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              >
                <span className="text-3xl flex-shrink-0 leading-none">
                  {source.icon}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="font-bold text-lg text-gray-800">
                      {source.title}
                    </h3>
                    {source.badge && (
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--accent) 12%, white)",
                          borderColor:
                            "color-mix(in srgb, var(--accent) 30%, white)",
                          color: "var(--accent-dark)",
                        }}
                      >
                        {source.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className="mt-1 text-xl font-bold"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    {source.amount}
                  </p>

                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                    {source.desc}
                  </p>

                  {source.note && (
                    <p className="mt-1.5 text-sm text-gray-400">
                      {source.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wynik */}
          <motion.div
            custom={data.sources.length}
            variants={fadeUp}
            initial="hidden"
            animate={isSkillRefinView ? "show" : "hidden"}
            className="rounded-2xl shadow-2xl p-6 md:p-8 text-white lg:sticky lg:top-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent), var(--accent-dark))",
              boxShadow:
                "0 25px 50px -12px color-mix(in srgb, var(--accent) 45%, transparent)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              Twoja opłata w placówce {data.title}
            </p>

            <p className="mt-3 text-lg text-white/70 line-through decoration-white/50">
              {formatPln(data.fee)}
            </p>

            <p className="mt-1 text-5xl md:text-6xl font-bold leading-none">
              {data.isFree ? "0 zł" : `od ${formatPln(data.minFinal)}`}
              <span className="ml-2 text-base font-medium text-white/80">
                / mies.
              </span>
            </p>

            {data.hasRange && (
              <p className="mt-3 text-sm text-white/80">
                Zależnie od liczby dni roboczych w miesiącu:{" "}
                {formatPln(data.minFinal)} – {formatPln(data.maxFinal)}.
              </p>
            )}

            {data.additionalFee && (
              <div className="mt-6 pt-6 border-t border-white/25 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-sm text-white/90 leading-relaxed">
                  {data.additionalFee}
                </p>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={pricingHref}
                className="block text-center bg-white font-bold py-3 px-6 rounded-xl transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: "var(--accent-dark)" }}
              >
                Zobacz pełny cennik
              </a>
              <a
                href={contactHref}
                className="block text-center border-2 border-white/60 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Zapytaj o wolne miejsce
              </a>
            </div>
          </motion.div>
        </div>

        {/* Uwagi + pobranie */}
        <motion.div
          custom={data.sources.length + 1}
          variants={fadeUp}
          initial="hidden"
          animate={isSkillRefinView ? "show" : "hidden"}
          className="mt-6 flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-5 bg-teal-50 rounded-xl border border-teal-100"
        >
          <span className="text-2xl flex-shrink-0">✨</span>
          <p className="text-sm md:text-base text-teal-800 leading-relaxed flex-1">
            Dotacja miejska przysługuje wyłącznie dzieciom zamieszkałym na
            terenie Krakowa. Dla dziecka z orzeczeniem o niepełnosprawności
            miasto dopłaca dodatkowe 6,00 zł za każdą godzinę opieki.
          </p>
          <a
            href="/krakow/krakow2.png"
            download
            className="flex-shrink-0 text-center text-sm font-bold text-teal-700 underline underline-offset-4 hover:text-teal-900 transition-colors"
          >
            Pobierz szczegóły dotacji
          </a>
        </motion.div>
      </div>
    </section>
  );
}
