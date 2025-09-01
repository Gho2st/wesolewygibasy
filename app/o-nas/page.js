import Image from "next/image";
import {
  TeamVetulaniego,
  TeamStanczyk,
  TeamGlogera,
  TeamSliczna,
} from "@/components/UI/Team";
import { FaPeopleGroup } from "react-icons/fa6";
import Header from "@/components/UI/Header";
import Career from "./career";

export const metadata = {
  title: "Wesołe Wygibasy - Żłobek w Krakowie | O nas",
  alternates: {
    canonical: "/o-nas",
  },
  keywords:
    "kadra, o nas, Agnieszka Ciołkowska, historia powstania Wesołych Wygibasów",
  description:
    "Poznaj żłobek Wesołe Wygibasy w Krakowie. Oferujemy opiekę nad dziećmi w przyjaznej atmosferze, kreatywne zajęcia i profesjonalną kadrę pedagogiczną.",
};

export default function oNas() {
  return (
    <div className="px-[9%] py-10 mx-auto ">
      <Header text="Poznaj nasz Żłobek Wesołe Wygibasy w Krakowie" />

      <div className="flex flex-col-reverse lg:flex-row gap-12 items-start justify-between mt-16">
        {/* Tekst główny */}
        <div className="w-full lg:w-[60%] text-justify space-y-6 text-lg font-light text-neutral-700">
          <p>
            Nazywam się Agnieszka Ciołkowska i jestem pedagogiem,
            resocjalizatorem oraz właścicielką Wesołych Wygibasów — żłobka w
            Krakowie, który powstał z pasji i miłości do dzieci.
          </p>

          <h2 className="text-2xl font-semibold text-[#08c6c3]">
            Moja Droga do Żłobka w Krakowie
          </h2>
          <p>
            Marzenia o pracy z dziećmi towarzyszyły mi od najmłodszych lat. Już
            jako dziecko opiekowałam się rodzeństwem, a później dziećmi
            sąsiadów. Posiadanie własnych dzieci tylko wzmocniło moją pasję. Po
            ukończeniu studiów pedagogicznych, które były moim celem od zawsze,
            zdecydowałam się na dalszy rozwój.
          </p>
          <p>
            Mimo że życie rodzinne i praca były priorytetem przez wiele lat,
            nigdy nie zapomniałam o marzeniu o pracy z dziećmi. Gdy na świecie
            pojawiło się moje trzecie dziecko, postanowiłam zrealizować swoje
            ambicje edukacyjne, kończąc studia z zakresu pedagogiki
            przedszkolnej i wczesnoszkolnej oraz resocjalizacji.
          </p>

          <h2 className="text-2xl font-semibold text-[#08c6c3]">
            Historia Wesołych Wygibasów
          </h2>
          <p>
            W 2015 roku, wspólnie z rodziną, zdecydowaliśmy się na przeprowadzkę
            i założenie w Krakowie Wesołych Wygibasów — centrum zajęć
            rozwojowo-rozrywkowych dla dzieci. Nasza wizja zrealizowała się i w
            2017 roku przekształciliśmy naszą placówkę w Klub Malucha, oferujący
            opiekę nad dziećmi w wieku 1-3 lata.
          </p>
          <p>
            W 2021 roku, z powodu rosnącego zainteresowania i braku miejsc,
            otworzyliśmy nową placówkę — żłobek Wesołe Wygibasy na ulicy
            Glogera, zlokalizowany 900 metrów od Klubu Malucha. Z czasem
            powstały kolejne żłobki w Krakowie — na ulicach Stańczyka i
            Ślicznej.
          </p>

          <h2 className="text-2xl font-semibold text-[#08c6c3]">
            Nasze Założenia Pedagogiczne
          </h2>
          <p>
            Moim celem jest zapewnienie dzieciom najwyższej jakości opieki.
            Rozumiem, jak ważne jest zaufanie rodziców, którzy powierzają nam
            swoje największe skarby. Dlatego kładę duży nacisk na bezpieczeństwo
            i komfort maluchów, a także na rozwój ich umiejętności w przyjaznym
            i wspierającym środowisku.
          </p>
          <p>
            Przez lata opracowałam metody pracy z dziećmi, które przekazuję
            mojej kadrze. Każda nasza placówka jest miejscem, w którym dzieci
            mogą rozwijać swoje umiejętności w kreatywny sposób, a rodzice mogą
            być pewni, że ich pociechy są w dobrych rękach.
          </p>
        </div>

        {/* Zdjęcie + podpis */}
        <div className="w-full lg:w-[40%] 2xl:w-[30%] text-center mb-8 lg:mb-0">
          <Image
            src="/others/aga3.png"
            width={100}
            height={100}
            layout="responsive"
            alt="Agnieszka Ciołkowska - Właścicielka Żłobek Wesołe Wygibasy w Krakowie"
            className="rounded-xl"
          />
          <h2 className="text-xl xl:text-2xl font-bold mt-6 text-[#fa7070]">
            Agnieszka Ciołkowska
          </h2>
          <p className="text-sm xl:text-lg text-gray-600">
            Właściciel, Pedagog, Mama 3 dzieci
          </p>
        </div>
      </div>

      {/* Kadra */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 text-[#fa7070]">
          Nasza Kadra
        </h3>
        <div className="flex justify-center text-4xl text-[#fa7070] mb-8">
          <FaPeopleGroup />
        </div>

        <div className="space-y-16">
          <TeamVetulaniego place="Żłobek, Ulica Vetulaniego 8, Kraków 31-226" />
          <TeamGlogera place="Żłobek, Ulica Glogera 53/LU2, Kraków 31-222" />
          <TeamStanczyk place="Żłobek, Ulica Stańczyka/LU3 8, Kraków 31-126" />
          <TeamSliczna place="Żłobek, Ulica Śliczna 36a, Kraków 31-444" />
        </div>
      </div>

      {/* Sekcja dla współpracującego psychologa */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 text-[#fa7070]">
          Nasi Współpracownicy
        </h3>
        <div className="flex justify-center text-4xl text-[#fa7070] mb-8">
          <FaPeopleGroup />
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto text-left space-y-4 text-neutral-700">
          <h4 className="text-xl font-bold text-[#08c6c3]">
            Wsparcie - Wspólna Troska o Emocje Dziecka
          </h4>
          <p>Drodzy Państwo,</p>
          <p>
            nazywam się Julia Krakowska i jestem studentką ostatniego roku
            Psychologii. W tym miejscu chciałabym Państwa zaprosić do współpracy
            oraz wsparcia w rozwoju emocjonalnym i społecznym dziecka.
          </p>
          <p>
            W swojej codziennej pracy stawiam na budowanie relacji opartej na
            zrozumieniu i poczuciu bezpieczeństwa. Moja misja skupia się na
            wsparciu, towarzyszeniu w trudnościach i odkrywaniu siebie bez
            oceniania.
          </p>
          <p>
            Na co dzień zajmuję się prowadzeniem zajęć z młodzieżą,
            przygotowywaniem warsztatów oraz pracy indywidualnej, która opiera
            się na wsparciu, towarzyszeniu w kryzysie oraz poznawaniu emocji.
          </p>
          <p>Dodatkowo jestem Trenerką TUS.</p>
          <p>
            Praca z dziećmi i młodzieżą jest przede wszystkim moją pasją -
            jestem otwarta aby towarzyszyć Państwu w drodze do bezpiecznego
            rozwoju i wspierania zarówno Państwa jak i dzieci.
          </p>
          <p>Zapraszam serdecznie do kontaktu!</p>
          <p>e-mail: julia.krakowska.psychoedu@gmail.com</p>
        </div>
      </div>

      {/* Kariera */}
      <div className="mt-20">
        <Career />
      </div>
    </div>
  );
}
