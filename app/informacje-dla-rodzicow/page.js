import Header from "@/components/UI/Header";
import Image from "next/image";
import Dotation from "@/components/Info/dotation";
import {
  BookOpen,
  Download,
  Lock,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Informacje - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Znajdź ważne informacje dla rodziców i opiekunów dzieci w Żłobku Wesołe Wygibasy w Krakowie. Dowiedz się więcej o statucie, regulaminie, ochronie małoletnich oraz polityce prywatności.",
  alternates: {
    canonical: "/informacje-dla-rodzicow",
  },
  keywords:
    "informacje, rodo, ochrona małoletnich, zasady w Żłobku, polityka prywatności",
};

const documents = [
  {
    title: "Statut Żłobka Wesołe Wygibasy",
    description:
      "Statut żłobka określa zasady funkcjonowania naszej placówki, w tym prawa i obowiązki rodziców oraz personelu. Statut zawiera również informacje o zasadach rekrutacji, opłatach oraz organizacji dnia w naszym żłobku.",
    href: "/statut.odt",
    fileType: "ODT",
    icon: ScrollText,
    color: "#ff583d",
    bg: "#ffe6e1",
  },
  {
    title: "Regulamin Żłobka",
    description:
      "Regulamin żłobka Wesołe Wygibasy zawiera szczegółowe informacje na temat codziennego funkcjonowania naszej placówki, w tym godzin otwarcia, zasad przyprowadzania i odbierania dzieci, a także norm dotyczących bezpieczeństwa i higieny.",
    href: "/regulamin.odt",
    fileType: "ODT",
    icon: BookOpen,
    color: "#6d5ebc",
    bg: "#ebe6fd",
  },
  {
    title: "Standardy Ochrony Małoletnich",
    description:
      "Ochrona małoletnich jest dla nas kluczowym priorytetem. W naszym żłobku obowiązują ściśle określone standardy ochrony dzieci przed krzywdzeniem. Dokument ten zawiera zasady postępowania w przypadku zagrożeń oraz procedury bezpieczeństwa.",
    href: "/standardy.docx",
    fileType: "DOCX",
    icon: ShieldCheck,
    color: "#d98a0b",
    bg: "#fff3d4",
  },
  {
    title: "Polityka Prywatności i Ochrona Danych Osobowych",
    description:
      "Zgodnie z przepisami RODO, dokładamy wszelkich starań, aby chronić dane osobowe Państwa dzieci. Dokument zawiera szczegółowe informacje na temat przetwarzania danych osobowych w naszej placówce, w tym celów, na jakie są one zbierane, oraz praw przysługujących rodzicom i opiekunom.",
    href: "/RODO-klauzula-informacyjna-copy.jpg",
    fileType: "JPG",
    icon: Lock,
    color: "#1f9e80",
    bg: "#d6fcf9",
  },
];

export default function informacje() {
  return (
    <>
      <div className="px-[9%] py-8">
        <div className="mb-16">
          <Header text="Informacje dla Rodziców i Opiekunów" />

          <div className="mt-12 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 lg:gap-0">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl xl:text-4xl font-bold mb-6">
                Drodzy Rodzice i Opiekunowie!
              </h2>
              <p className="text-xl mt-6">
                Witamy na stronie z ważnymi informacjami dotyczącymi
                funkcjonowania naszego żłobka Wesołe Wygibasy w Krakowie.
                Znajdziecie tutaj kluczowe dokumenty, zasady oraz procedury,
                które są istotne dla każdego rodzica i opiekuna. Naszym
                priorytetem jest zapewnienie bezpiecznej, wspierającej i
                rozwijającej opieki nad Waszymi dziećmi. Zachęcamy do zapoznania
                się z poniższymi dokumentami oraz informacjami dotyczącymi
                naszego żłobka.
              </p>
            </div>
            <div className="w-2/3 sm:w-1/2 lg:w-1/4">
              <Image
                src="/grafiki/info.png"
                width={100}
                height={100}
                layout="responsive"
                alt="Grafika przedstawiająca zabawki"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mt-24 pb-24">
          {documents.map(
            ({ title, description, href, fileType, icon: Icon, color, bg }) => (
              <div
                key={title}
                className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: bg, color }}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                  {title}
                </h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
                  {description}
                </p>
                <a
                  href={href}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition-colors hover:brightness-95"
                  style={{ backgroundColor: bg, color }}
                >
                  <Download className="h-5 w-5" />
                  Pobierz
                  <span className="text-xs font-medium opacity-70">
                    ({fileType})
                  </span>
                </a>
              </div>
            ),
          )}
        </div>
      </div>

      <Dotation />
    </>
  );
}
