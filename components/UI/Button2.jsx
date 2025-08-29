"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button2({ href, text }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#4a71ff] text-white px-6 py-2 rounded-xl text-lg font-bold shadow-md transition-all duration-200 ease-in-out
          md:text-xl"
      >
        {text}
      </motion.div>
    </Link>
  );
}
