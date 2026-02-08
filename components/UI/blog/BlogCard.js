import Button from "@/components/UI/Button";

export default function BlogCard({ header, text, link, button, date }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl p-8 px-4 xl:px-6 h-full bg-grey-50 shadow-2xl transform transition-all duration-300 hover:scale-103">
      <div>
        {date && (
          <span className="text-sm text-gray-400 mb-2 block">{date}</span>
        )}
        <h3 className="font-bold mb-6 text-2xl ">{header}</h3>
        <p className=" mb-6  2xl:text-lg text-gray-700 font-light">{text}</p>
      </div>
      <div className="flex">
        <Button
          text={button}
          bgColor="bg-[#C4966C]"
          textColor="text-white"
          href={link}
        />
      </div>
    </article>
  );
}
