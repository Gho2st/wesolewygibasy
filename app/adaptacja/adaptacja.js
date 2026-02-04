import Image from "next/image";
import Button from "@/components/UI/Button";
import Button2 from "@/components/UI/Button2";

export default function Adaptacja() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-16 pb-24">
        {/* Obrazek */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-[70%] md:w-full">
            <Image
              src="/adaptacja/adaptacja.webp"
              width={200}
              height={100}
              layout="responsive"
              alt="Krąg dzieci podczas Adaptacji w Żłobku Wesołe Wygibasy w Krakowie"
            />
          </div>
        </div>

        {/* Tekst */}
        <div className="md:col-span-3 flex items-center">
          <div className="md:w-full pb-8">
            <article>
              <p className="text-[#08c6c3] font-bold text-lg xl:text-2xl">
                Poznaj. Odkryj. Proces.
              </p>
              <h2 className="text-2xl xl:text-4xl font-semibold mt-8 mb-8">
                Adaptacja to kluczowy moment dla dziecka w Żłobku.
              </h2>
              <p className="font-normal text-base xl:text-xl mb-8">
                Rozumiemy, jak ważne są komfort i poczucie bezpieczeństwa w
                nowym otoczeniu, dlatego oferujemy
                <span className="font-semibold">
                  {" "}
                  8 bezpłatnych spotkań
                </span>{" "}
                adaptacyjnych, które ułatwią zarówno dziecku, jak i rodzicom ten
                ważny krok. Wesołe Wygibasy czekają na Was.
              </p>

              <div className="flex gap-4 mt-6 flex-wrap">
                <Button text="Plan dnia" href="/plan-dnia-w-zlobku" />
                <Button2 text="Cennik" href="/cennik-i-jadlospis-w-zlobku" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
