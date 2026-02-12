import React from "react";

export default function ZlobkiBaner({ title, bgImage, description, subtitle }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${bgImage}")` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 md:p-16 shadow-2xl text-center transform transition-all duration-500 hover:translate-y-[-5px]">
          {/* Subtitle  */}
          <span className="inline-block px-4 py-1.5 mb-8 text-sm xl:text-base font-semibold tracking-wider uppercase bg-primary text-white rounded-full shadow-lg shadow-primary/30">
            {subtitle}
          </span>

          {/* Title  */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          {/* Description*/}
          <p className="text-lg md:text-xl 2xl:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Opcjonalny dekoracyjny element */}
          <div className="mt-10 flex justify-center gap-4">
            <div className="h-1.5 w-12 bg-primary rounded-full" />
            <div className="h-1.5 w-6 bg-white/50 rounded-full" />
            <div className="h-1.5 w-3 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
