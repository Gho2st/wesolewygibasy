"use client";
import { useState, useEffect } from "react";
import ImagesContainer from "@/components/Gallery/ImagesContainer";
import { Loader2 } from "lucide-react"; // lub własny spinner

const branches = [
  { id: "vetulaniego", name: "Vetulaniego", available: true },
  { id: "glogera", name: "Glogera", available: true },
  { id: "stanczyka", name: "Stańczyka", available: true },
  { id: "sliczna", name: "Śliczna", available: true },
  { id: "lokietka", name: "Łokietka", available: false },
];

export default function GallerySection() {
  const [activeFolder, setActiveFolder] = useState(null);
  const [loadingBranch, setLoadingBranch] = useState(false);

  useEffect(() => {
    const availableBranches = branches.filter((b) => b.available);
    const losowy =
      availableBranches[Math.floor(Math.random() * availableBranches.length)];
    setActiveFolder(losowy.id);
  }, []);

  const handleBranchClick = (id) => {
    if (loadingBranch || id === activeFolder) return;
    setLoadingBranch(true);
    // Dodaj krótki delay żeby było widoczne ładowanie nawet przy szybkim API
    setTimeout(() => {
      setActiveFolder(id);
      setLoadingBranch(false);
    }, 300);
  };

  const selectedBranch = branches.find((b) => b.id === activeFolder);

  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl xl:text-4xl font-semibold mb-8 xl:mb-12">
        Galeria zdjęć z naszych placówek
      </h2>

      {/* Przycisk wybierający placówkę */}
      <div className="flex flex-wrap justify-center gap-4">
        {branches.map((branch) => {
          const isActive = activeFolder === branch.id;
          return (
            <button
              key={branch.id}
              onClick={() => handleBranchClick(branch.id)}
              disabled={loadingBranch}
              className={`relative cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl text-lg sm:text-xl font-semibold transition 
                ${
                  isActive
                    ? "bg-red-400 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }
                ${loadingBranch ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {branch.name}
              {isActive && loadingBranch && (
                <Loader2 className="animate-spin w-5 h-5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Renderuj treść */}
      {activeFolder && (
        <div className="px-4 md:px-10 mt-6">
          {selectedBranch?.available ? (
            <ImagesContainer folder={activeFolder} />
          ) : (
            <p className="text-lg text-gray-600 font-medium italic">
              Galeria zdjęć dla placówki <strong>{selectedBranch.name}</strong>{" "}
              będzie dostępna wkrótce.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
