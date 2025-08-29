export default function LineHeader({ text, layout = "center" }) {
  const baseTextStyles =
    "uppercase text-customBlue text-2xl sm:text-3xl md:text-4xl font-bold";
  const baseLineStyles = "h-1 bg-primary";

  if (layout === "left") {
    return (
      <div className="flex items-center gap-6 md:gap-10">
        <h2 className={`${baseTextStyles}`}>{text}</h2>
        <div className={`${baseLineStyles} w-full`}></div>
      </div>
    );
  }

  if (layout === "right") {
    return (
      <div className="flex items-center gap-6 md:gap-10">
        <div className={`${baseLineStyles} w-full`}></div>
        <h2 className={`${baseTextStyles}`}>{text}</h2>
      </div>
    );
  }

  // Default: center layout
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      <div className={`${baseLineStyles} w-full`}></div>
      <h2 className={`${baseTextStyles} text-center`}>{text}</h2>
      <div className={`${baseLineStyles} w-full`}></div>
    </div>
  );
}
