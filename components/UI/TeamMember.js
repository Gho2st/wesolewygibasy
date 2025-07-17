import Image from "next/image";

export default function TeamMember({ src, name, role, quote }) {
  return (
    <div className="p-4 pt-8 mx-4 text-center rounded-xl min-h-[250px]">
      <div className="flex justify-center">
        <Image
          src={src}
          width={230}
          height={230}
          alt={`Zdjęcie profilowe: ${name}`}
          className="rounded-xl object-cover shadow-[0_5px_15px_rgba(0,0,0,0.35)] max-[760px]:w-[180px] max-[760px]:h-[180px]"
        />
      </div>
      <div className="mt-4 text-xl font-bold">{name}</div>
      <div className="text-primary font-bold text-base">{role}</div>
      {quote && (
        <p className="mt-6 pb-4 text-lg italic font-light">{quote}</p>
      )}
    </div>
  );
}
