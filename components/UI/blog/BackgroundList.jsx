export default function BackgroundList({
  title,
  items,
  text,
  bgColor = "bg-slate-100",
  textColor = "text-black",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col text-center md:p-10 ${bgColor} lg:w-3/4 mx-auto rounded-2xl p-4 py-10  ${className}`}
    >
      <h3
        className={`text-2xl xl:text-3xl mb-8 md:mb-12 font-semibold leading-snug ${textColor}`}
      >
        {title}
      </h3>
      {text && (
        <p className="mb-8 md:mb-10 xl:text-xl font-medium text-customBlue">
          {text}
        </p>
      )}
      <ul className={`xl:text-lg flex flex-col gap-8 ${textColor}`}>
        {items.map((item, index) => (
          <li className="" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
