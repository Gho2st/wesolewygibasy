export default function Map({ src }) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-[9%] py-16">
        <h2 className="text-[3rem] font-medium mb-8 max-[800px]:text-[2.1rem]">
          Mapa dojazdu
        </h2>
        <p className="text-xl w-[80%] max-[800px]:w-full">
          Nasz żłobek <span className="font-semibold">Wesołe Wygibasy</span>{" "}
          znajduje się w dogodnej lokalizacji w Krakowie, co sprawia, że dojazd
          do nas jest szybki i wygodny zarówno dla mieszkańców centrum, jak i
          okolicznych dzielnic. Dzięki bliskości głównych arterii
          komunikacyjnych oraz dostępności miejsc parkingowych w pobliżu, możesz
          z łatwością przywieźć swoje dziecko każdego dnia.
        </p>

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
