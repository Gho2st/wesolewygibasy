"use client";
import Header from "@/components/UI/Header";
import FoodItemTable from "./FoodItemTable";
import TableWithoutMilk from "./TableWithoutMilk";
import WegeTable from "./WegeTable";
import { useState } from "react";

export default function FoodContainer() {
  const [activeMenu, setActiveMenu] = useState("standard");

  return (
    <div className="py-12">
      <Header
        text="Jadłospis - Zdrowe Odżywianie
"
      />
      <p className="text-center text-gray-700 text-lg leading-relaxed">
        W naszych placówkach szczególną uwagę przykładamy do zdrowego odżywiania
        dzieci. Oferujemy starannie zaprojektowany jadłospis, który uwzględnia
        potrzeby żywieniowe najmłodszych, zapewniając im odpowiednią ilość
        składników odżywczych na każdy dzień. Naszym celem jest budowanie
        dobrych nawyków żywieniowych już od najmłodszych lat.
        <br />
        <br />
        Każdy posiłek jest przygotowywany z myślą o zdrowiu i rozwoju dzieci, z
        uwzględnieniem różnorodności i smaku. Wierzymy, że właściwe odżywianie
        to klucz do zdrowego wzrostu i energii na cały dzień pełen zabawy i
        nauki.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={() => setActiveMenu("standard")}
          className={`px-6 py-3 rounded-xl cursor-pointer font-semibold transition ${
            activeMenu === "standard"
              ? "bg-[#2c7865] text-white"
              : "bg-gray-100 text-[#2c7865] hover:bg-[#2c7865]/10"
          }`}
        >
          MENU STANDARDOWE
        </button>

        <button
          onClick={() => setActiveMenu("wege")}
          className={`px-6 py-3 rounded-xl cursor-pointer font-semibold transition ${
            activeMenu === "wege"
              ? "bg-[#2c7865] text-white"
              : "bg-gray-100 text-[#2c7865] hover:bg-[#2c7865]/10"
          }`}
        >
          MENU WEGE
        </button>

        <button
          onClick={() => setActiveMenu("bezmleczne")}
          className={`px-6 py-3 rounded-xl cursor-pointer font-semibold transition ${
            activeMenu === "bezmleczne"
              ? "bg-[#2c7865] text-white"
              : "bg-gray-100 text-[#2c7865] hover:bg-[#2c7865]/10"
          }`}
        >
          MENU BEZ NABIAŁU
        </button>
      </div>

      <div className="mt-10">
        {activeMenu === "standard" && <FoodItemTable />}
        {activeMenu === "wege" && <WegeTable />}
        {activeMenu === "bezmleczne" && <TableWithoutMilk />}
      </div>
    </div>
  );
}
