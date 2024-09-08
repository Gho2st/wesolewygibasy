"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "@/components/UI/Navigation";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/UI/Footer";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navigation />
        {children}
        <Analytics />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
