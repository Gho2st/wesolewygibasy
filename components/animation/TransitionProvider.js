"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "@/components/UI/Navigation";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTopButton from "@/components/UI/ScrollToTheTop";
import Footer from "@/components/UI/Footer";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.1, y: 30 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Navigation />
        <ScrollToTopButton />
        {children}
        <Analytics />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}