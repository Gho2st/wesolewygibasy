import Header from "@/components/UI/Header";
import Link from "next/link";

export const metadata = {
  title: "Nasza Polityka Cookies - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Dowiedz się, jak używamy plików cookies na wesolewygibasy.pl, aby zapewnić Ci najlepsze doświadczenie, personalizować treści i analizować ruch na stronie. Sprawdź, jak możesz zarządzać ustawieniami cookies!",
  alternates: {
    canonical: "/polityka-cookies",
  },
};

export default function PolitykaCookies() {
  return (
    <>
      <Header text="Polityka Cookies" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Na stronie wesolewygibasy.pl stosujemy pliki cookies, aby zapewnić
            najlepsze doświadczenie użytkownika, wspierać funkcjonalność strony,
            analizować ruch oraz dostarczać spersonalizowane reklamy. Poniżej
            wyjaśniamy, jakie cookies stosujemy, w jakim celu i jak możesz nimi
            zarządzać.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jakie cookies stosujemy?
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong>
                Niezbędne cookies: Umożliwiają działanie strony, np. zapamiętują
                Twoje ustawienia językowe (poprzez Next-Intl) lub umożliwiają
                korzystanie z funkcji rezerwacji online. Te cookies są niezbędne
                i nie wymagają Twojej zgody.
              </strong>
            </li>
            <li>
              <strong>
                Analityczne cookies: Te cookies są aktywowane tylko po wyrażeniu
                Twojej zgody poprzez baner cookies.
              </strong>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Google Analytics 4 (via Google Tag Manager): Używamy do
                  analizy ruchu na stronie, np. liczby odwiedzin, czasu
                  spędzonego na stronie czy źródeł odwiedzin. Dane są
                  przekazywane do Google (USA) w celu optymalizacji strony i
                  poprawy jej użyteczności.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Reklamowe cookies: Te cookies są aktywowane tylko po wyrażeniu
                Twojej zgody poprzez baner cookies.
              </strong>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Google Ads (via Google Tag Manager): Używamy do dostarczania
                  spersonalizowanych reklam, np. remarketingu, w oparciu o Twoje
                  zachowanie na stronie. Dane są przekazywane do Google (USA) w
                  celu optymalizacji kampanii reklamowych.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Dodatkowe narzędzia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Korzystamy z Google Search Console, które nie używa cookies, ale
            pomaga nam monitorować wydajność strony w wynikach wyszukiwania
            Google, np. analizować słowa kluczowe i poprawiać SEO.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jak zarządzać cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Przy pierwszej wizycie na naszej stronie wyświetlamy baner cookies,
            który pozwala Ci:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Zaakceptować wszystkie cookies, włączając cookies analityczne
              (Google Analytics 4) i reklamowe (Google Ads).
            </li>
            <li>
              Odrzucić cookies analityczne i reklamowe, co oznacza, że nie
              będziemy używać Google Analytics 4 ani Google Ads do śledzenia
              Twojej aktywności.
            </li>
            <li>
              Dostosować ustawienia, wybierając, na które kategorie cookies
              wyrażasz zgodę (np. tylko reklamowe lub tylko analityczne).
            </li>
            <li>
              Twoje preferencje są zapisywane w pamięci przeglądarki
              (`localStorage`) i stosowane przy kolejnych wizytach. Możesz
              zmienić swoje ustawienia w dowolnym momencie, usuwając dane
              cookies w ustawieniach przeglądarki.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Możesz także zarządzać cookies w ustawieniach swojej przeglądarki.
            Oto instrukcje dla popularnych przeglądarek:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
            <li>
              <Link
                href="https://support.google.com/chrome/answer/95647)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Chrome
              </Link>
            </li>
            <li>
              <Link
                href="https://support.mozilla.org/pl/kb/usuwanie-ciasteczek)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Firefox
              </Link>
            </li>
            <li>
              <Link
                href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Safari
              </Link>
            </li>
            <li>
              <Link
                href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Microsoft Edge
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jak długo przechowujemy cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Czas przechowywania cookies zależy od ich rodzaju:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Niezbędne cookies: Zazwyczaj wygasają po zakończeniu sesji lub w
              krótkim czasie (np. kilka dni).
            </li>
            <li>
              Analityczne cookies: Mogą być przechowywane do 2 lat (np. Google
              Analytics 4).
            </li>
            <li>
              Reklamowe cookies: Mogą być przechowywane do 2 lat (np. Google
              Ads).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Transfer danych do krajów trzecich
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dane zbierane przez Google Analytics 4, Google Ads (via Google Tag
            Manager) są przekazywane do USA. Transfer danych jest zgodny z
            wymogami GDPR, w oparciu o standardowe klauzule umowne (SCC) lub
            inne zatwierdzone mechanizmy ochrony danych. Więcej informacji
            znajdziesz w politykach prywatności:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google
              </Link>
            </li>
            <li>
              <Link
                href="https://privacy.microsoft.com/pl-pl/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Microsoft
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Jak zmienić ustawienia zgody?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jeśli chcesz zmienić swoje preferencje cookies, wyczyść cookies w
            ustawieniach przeglądarki, co spowoduje ponowne wyświetlenie banera
            cookies przy następnej wizycie.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jeśli masz pytania dotyczące naszej polityki cookies lub
            przetwarzania danych, skontaktuj się z nami:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="mailto:wesolewygibasy@onet.pl"
                className="text-blue-600 hover:underline"
              >
                wesolewygibasy@onet.pl
              </Link>
            </li>
            <li>
              <Link
                href="tel:+48697560022"
                className="text-blue-600 hover:underline"
              >
                +48 697 560 022
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
