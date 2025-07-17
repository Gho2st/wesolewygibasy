"use client";
import Image from "next/image";

export default function ImageItem({ src, alt, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="transition ease-in duration-150 hover:-translate-y-1 cursor-pointer text-center"
    >
      {src ? (
        <div className="p-2 max-w-[300px] max-h-[250px] mx-auto">
          <Image
            src={src}
            width={100}
            height={100}
            layout="responsive"
            className="rounded-xl object-cover min-h-[250px] max-h-[250px] w-full"
            alt={alt || "Image"}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[250px] bg-gray-100 rounded-xl">
          <p className="text-gray-500">Brak obrazu</p>
        </div>
      )}

      <p className="mt-2 text-base font-bold capitalize">{text}</p>
    </div>
  );
}
