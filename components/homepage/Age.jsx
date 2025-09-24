"use client";
import Image from "next/image";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";

export default function Age() {
  return (
    <div className="min-h-screen bg-[#fffbf2] flex justify-center items-center px-[9%] py-16 overflow-x-hidden">
      <section className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-12 w-full max-w-[1400px]">
        {/* Tekst */}
        <div className="w-full lg:w-[60%] mt-8 lg:mt-12">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-6">
            Przyjmujemy <span className="text-primary">maluchy</span> od 8
            miesiąca do 3 roku życia!
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-normal text-black mb-4 leading-relaxed">
            Szukasz żłobka w Krakowie, gdzie Twoje dziecko będzie czuło się
            bezpiecznie i szczęśliwie? W Wesołych Wygibasach dbamy o ciepłą
            atmosferę, troskliwą opiekę i rozwój dostosowany do wieku dziecka.
            <br />
            <br />
            Każdy dzień to nowe odkrycia: zabawy sensoryczne, muzyczne, ruchowe,
            pierwsze przyjaźnie i wspólne posiłki w przyjaznym otoczeniu.
            Zapewniamy przytulne miejsce do odpoczynku, a harmonijny plan dnia
            pomaga maluchom czuć się pewnie i spokojnie.
            <span className="block text-gray-600 font-semibold mt-4">
              *W placówce na Vetulaniego od 1 roku życia
            </span>
          </p>

          <div className="mt-6 flex space-x-4">
            <Button text="Adaptacja" href="/adaptacja-w-zlobku" />
            <Button2 text="Plan Dnia" href="/plan-dnia-w-zlobku" />
          </div>
        </div>

        {/* Obrazek */}
        <div className="w-full lg:w-[35%] 2xl:w-1/2 flex justify-center items-center">
          <Image
            src="/monkeys/6.gif"
            alt="Skacząca maskotka małpka Żłobka Wesołe Wygibasy w Krakowie"
            width={100}
            height={100}
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
