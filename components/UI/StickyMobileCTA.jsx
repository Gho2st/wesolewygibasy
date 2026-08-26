"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ClipboardEdit } from "lucide-react";

export default function StickyMobileCTA() {
  const pathname = usePathname();

  // Nie pokazuj na stronie zapisów (formularz jest już na ekranie) ani w panelu admina
  if (pathname.startsWith("/zapisy") || pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex">
      <Link
        href="tel:+48697560022"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-orange-700 font-bold text-sm active:bg-orange-50 transition-colors border-r border-slate-100"
      >
        <Phone
          size={18}
          strokeWidth={2.4}
          style={{ width: 18, height: 18 }}
          className="shrink-0"
        />
        Zadzwoń
      </Link>
      <Link
        href="/zapisy"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm active:from-orange-700 active:to-orange-600 transition-colors"
      >
        <ClipboardEdit
          size={18}
          strokeWidth={2.4}
          style={{ width: 18, height: 18 }}
          className="shrink-0"
        />
        Zapisz dziecko
      </Link>
    </div>
  );
}
