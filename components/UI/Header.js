export default function Header({ text }) {
  return (
    <div>
      <h1 className="text-center text-3xl sm:text-4xl 2xl:text-5xl font-bold pb-6 mb-4 border-b border-gray-200 bg-gradient-to-b from-[#f74242] to-[#d68282] bg-clip-text text-transparent">
        {text}
      </h1>
    </div>
  );
}
