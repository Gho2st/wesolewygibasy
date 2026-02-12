export default function Map({ src, description }) {
  return (
    <section>
      <div className="px-[6%]  max-w-7xl mx-auto text-center py-10">
        <h2 className="text-4xl 2xl:text-5xl font-semibold mb-8">
          Mapa dojazdu
        </h2>
        <p className="text-lg 2xl:text-xl ">{description}</p>

        <div className="mt-14 w-full h-[550px] rounded-xl flex justify-center">
          <iframe
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-xl border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
