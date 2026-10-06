import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  Coffee,
  Apple,
  Soup,
  UtensilsCrossed,
  Cookie,
  Info,
} from "lucide-react";

const weekdays = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

// "… herbatka 200ml kcal 250" -> { text: "… herbatka 200ml", kcal: "250" }
function splitKcal(value) {
  const match = value.match(/\s*kcal\s*(\d+)\s*$/i);
  if (!match) return { text: value, kcal: null };
  return { text: value.slice(0, match.index), kcal: match[1] };
}

// Składniki i alergeny w nawiasach wyświetlamy delikatniej niż nazwę dania
function MealText({ text }) {
  return (
    <p className="text-gray-800 leading-relaxed">
      {text.split(/(\([^)]*\))/).map((part, i) =>
        part.startsWith("(") ? (
          <span key={i} className="text-sm text-[#2c7865]/70">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </p>
  );
}

function KcalBadge({ kcal }) {
  if (!kcal) return null;
  return (
    <span className="shrink-0 rounded-full bg-[#fa7070]/10 px-2.5 py-0.5 text-xs font-semibold text-[#fa7070]">
      {kcal} kcal
    </span>
  );
}

function MealCard({ icon: Icon, label, value, className = "" }) {
  const { text, kcal } = splitKcal(value);
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2c7865]/10 text-[#2c7865]">
          <Icon className="mb-0 h-5 w-5" />
        </span>
        <h4 className="text-lg font-semibold text-[#2c7865]">{label}</h4>
        <span className="ml-auto">
          <KcalBadge kcal={kcal} />
        </span>
      </div>
      <MealText text={text} />
    </div>
  );
}

function LunchCard({ soup, lunch }) {
  const courses = [
    { label: "Zupa", value: soup },
    { label: "Drugie danie", value: lunch },
  ].filter((course) => course.value);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:col-span-2">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2c7865]/10 text-[#2c7865]">
          <UtensilsCrossed className="mb-0 h-5 w-5" />
        </span>
        <h4 className="text-lg font-semibold text-[#2c7865]">Obiad</h4>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map(({ label, value }) => {
          const { text, kcal } = splitKcal(value);
          return (
            <div key={label} className="rounded-xl bg-slate-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                {label === "Zupa" && (
                  <Soup className="mb-0 h-4 w-4 shrink-0 text-[#43b79a]" />
                )}
                <span className="text-xs font-semibold uppercase tracking-wide text-[#43b79a]">
                  {label}
                </span>
                <span className="ml-auto">
                  <KcalBadge kcal={kcal} />
                </span>
              </div>
              <MealText text={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MenuTable({ title, menu, week }) {
  const days = Object.keys(menu);
  const [currentDay, setCurrentDay] = useState(days[0]);

  // Domyślnie pokazujemy dzisiejszy dzień (w weekend – poniedziałek)
  useEffect(() => {
    const today = weekdays[new Date().getDay() - 1];
    if (today && menu[today]) setCurrentDay(today);
  }, [menu]);

  const day = menu[currentDay];

  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-bold text-[#fa7070]">{title}</h3>
        {week && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2c7865]/10 px-4 py-1.5 text-sm font-medium text-[#2c7865]">
            <CalendarDays className="mb-0 h-4 w-4 shrink-0" />
            Tydzień {week}
          </span>
        )}
      </div>

      <div className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2">
        {days.map((name) => (
          <button
            key={name}
            onClick={() => setCurrentDay(name)}
            className={`shrink-0 cursor-pointer rounded-full px-5 py-2 font-medium transition ${
              currentDay === name
                ? "bg-[#fa7070] text-white shadow-sm"
                : "bg-white text-[#2c7865] ring-1 ring-gray-200 hover:ring-[#43b79a]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <MealCard
          icon={Coffee}
          label="Śniadanie"
          value={day.breakfast}
          className={day.secondBreakfast ? "" : "md:col-span-2"}
        />
        {day.secondBreakfast && (
          <MealCard
            icon={Apple}
            label="Drugie śniadanie"
            value={day.secondBreakfast}
          />
        )}
        <LunchCard soup={day.soup} lunch={day.lunch} />
        <MealCard
          icon={Cookie}
          label="Podwieczorek"
          value={day.snack}
          className="md:col-span-2"
        />
      </div>

      <p className="mt-6 flex items-start gap-2 text-sm text-gray-500">
        <Info className="mb-0 mt-1 h-4 w-4 shrink-0" />W nawiasach podajemy
        składniki i alergeny. W razie pytań o alergie lub diety prosimy o
        kontakt z placówką.
      </p>
    </section>
  );
}
