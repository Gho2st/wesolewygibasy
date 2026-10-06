"use client";
import Header from "@/components/UI/Header";
import MenuTable from "./MenuTable";
import { menuStandard, menuWege, menuBezNabialu } from "./menuData";
import { useState } from "react";
import { Earth, Leaf, MilkOff, UtensilsCrossed } from "lucide-react";

const menus = [
  {
    id: "standard",
    label: "Menu standardowe",
    title: "Menu Standardowe",
    icon: UtensilsCrossed,
    menu: menuStandard,
  },
  {
    id: "wege",
    label: "Menu wege",
    title: "Menu Wege",
    icon: Leaf,
    menu: menuWege,
  },
  {
    id: "bezmleczne",
    label: "Menu bez nabiału",
    title: "Menu Bez Nabiału",
    icon: MilkOff,
    menu: menuBezNabialu,
  },
];

export default function FoodContainer() {
  const [activeMenu, setActiveMenu] = useState("standard");
  const active = menus.find((m) => m.id === activeMenu);

  return (
    <div className="py-12">
      <Header text="Jadłospis - Zdrowe Odżywianie" />

      <div className="mx-auto max-w-3xl space-y-4 text-center text-lg leading-relaxed text-gray-700 mt-10">
        <p>
          W naszych placówkach szczególną uwagę przykładamy do zdrowego
          odżywiania dzieci. Oferujemy starannie zaprojektowany jadłospis, który
          uwzględnia potrzeby żywieniowe najmłodszych, zapewniając im
          odpowiednią ilość składników odżywczych na każdy dzień. Naszym celem
          jest budowanie dobrych nawyków żywieniowych już od najmłodszych lat.
        </p>
        <p>
          Każdy posiłek jest przygotowywany z myślą o zdrowiu i rozwoju dzieci,
          z uwzględnieniem różnorodności i smaku. Wierzymy, że właściwe
          odżywianie to klucz do zdrowego wzrostu i energii na cały dzień pełen
          zabawy i nauki.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-2xl border border-[#43b79a]/30 bg-[#43b79a]/10 p-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2c7865] text-white">
          <Earth className="mb-0 h-6 w-6" />
        </span>
        <p className="text-gray-800">
          <strong className="block text-[#2c7865]">Dieta planetarna</strong>W
          naszych żłobkach podawane są posiłki według najnowszej diety
          planetarnej.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex w-full flex-col gap-1 rounded-2xl bg-gray-100 p-1.5 sm:w-auto sm:flex-row">
          {menus.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveMenu(id)}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-semibold transition ${
                activeMenu === id
                  ? "bg-[#2c7865] text-white shadow-sm"
                  : "text-[#2c7865] hover:bg-white/70"
              }`}
            >
              <Icon className="mb-0 h-[18px] w-[18px] shrink-0" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <MenuTable key={active.id} title={active.title} menu={active.menu} />
    </div>
  );
}
