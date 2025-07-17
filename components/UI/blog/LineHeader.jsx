export default function LineHeader({ text }) {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      <div className="h-1 bg-primary w-full"></div>
      <h2 className="uppercase text-customBlue text-2xl sm:text-3xl md:text-4xl text-center font-bold md:whitespace-nowrap">
        {text}
      </h2>
      <div className="h-1 bg-primary w-full"></div>
    </div>
  );
}
