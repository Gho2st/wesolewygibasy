"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ href, text }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#fa7070] text-white px-6 py-2 rounded-xl text-lg font-bold shadow-md mr-2 whitespace-nowrap min-w-fit transition-all duration-200 ease-in-out
          md:text-xl
          2xl:text-2xl
        "
      >
        {text}
      </motion.div>
    </Link>
  );
}
