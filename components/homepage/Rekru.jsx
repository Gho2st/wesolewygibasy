import Image from "next/image";
import Link from "next/link";

export default function Rekrutacja() {
  return (
    <section
      className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="rekrutacja-zlobki-krakow"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="rekrutacja-zlobki-krakow"
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-tight"
        >
          Rekrutacja do żłobków Kraków 2025/2026
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
          Trwa <strong>rekrutacja do żłobków w Krakowie</strong>! Zapisz swoje
          dziecko do Wesołych Wygibasów i zapewnij mu profesjonalną opiekę w
          jednej z naszych placówek: Prądnik Biały (ul. Łokietka), Bronowice
          (ul. Stańczyka), Krowodrza (ul. Glogera), Olsza (ul. Śliczna) lub Klub
          Malucha na Vetulaniego. Oferujemy <strong>darmową opiekę</strong>{" "}
          dzięki dotacjom miejskim, zajęcia dodatkowe wspierające rozwój i
          zdrowe, zbilansowane posiłki dla najmłodszych.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Dlaczego wybrać żłobki Wesołe Wygibasy w Krakowie?
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-3">
              <li className="text-base">
                Profesjonalna opieka dla dzieci od 8 miesięcy (Klub Malucha
                Vetulaniego od 1 roku).
              </li>
              <li className="text-base">
                <strong>Darmowe czesne</strong> w wybranych placówkach dzięki
                dotacjom miasta Kraków.
              </li>
              <li className="text-base">
                Zajęcia sensoryczne, muzyczne i ruchowe wspierające rozwój
                Twojego dziecka.
              </li>
              <li className="text-base">
                Wysoka ocena rodziców: <strong>4.9/5</strong> – zaufanie rodzin
                w Krakowie.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Jak zapisać dziecko do żłobka w Krakowie? – Rekrutacja 2025
            </h3>
            <p className="text-gray-600 mb-6 text-base">
              Proces <strong>zapisów do żłobków w Krakowie</strong> jest prosty
              i szybki! Skontaktuj się z nami telefonicznie:{" "}
              <a
                href="tel:+48697560022"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                aria-label="Zadzwoń, aby zapisać dziecko do żłobka w Krakowie"
              >
                +48 697 560 022
              </a>{" "}
              lub wypełnij{" "}
              <Link
                href="/zapisy"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                aria-label="Formularz zapisów do żłobków Wesołe Wygibasy w Krakowie"
              >
                formularz zapisów online
              </Link>
              .
            </p>

            <Link
              href="/zapisy"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Zapisz dziecko do żłobka Wesołe Wygibasy w Krakowie"
            >
              Zapisz dziecko do żłobka
            </Link>
          </div>
        </div>

        {/* Sekcja z obrazem dla SEO */}
        <div className="text-center mt-12">
          <Image
            src="/rekrutacja.jpg"
            alt="Rekrutacja do żłobków Wesołe Wygibasy w Krakowie 2025"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            width={250}
            height={250}
          />
          <p className="text-sm text-gray-500 mt-2">
            Wesołe Wygibasy – najlepsze żłobki w Krakowie dla Twojego dziecka
          </p>
        </div>
      </div>
    </section>
  );
}
