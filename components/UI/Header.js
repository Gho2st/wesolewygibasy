export default function Header({ text }) {
  return (
    <header className="relative pt-20 pb-12  md:pb-20 overflow-hidden">
      {/* Opcjonalne delikatne tło, żeby nawiązać do błękitu navbara */}
      <div className="absolute inset-0 bg-slate-50 -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold pb-6 bg-gradient-to-r from-[#4a71ff] via-[#f74242] to-[#d68282] bg-clip-text text-transparent leading-tight">
            {text}
          </h1>

          {/* Dekoracyjna linia pod tekstem zamiast nudnego border-b */}
          <div className="w-24 h-1.5 bg-[#4a71ff] rounded-full mt-2 opacity-80" />
        </div>
      </div>
    </header>
  );
}
